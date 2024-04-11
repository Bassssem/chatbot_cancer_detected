import React, { useState } from 'react';
import axios from 'axios';
import "./chatbot.css";
function Chatbot() {
  const [conversation, setConversation] = useState([]);
  const [input, setInput] = useState('');
  
  
  const handleMessageSubmit = async () => {
    setCurrentModel(null);
    const userMessage = { text: input, fromUser: true };
    let response = await axios.get('http://localhost:3001/prostatecancer/' + t.input1 + '/' + t.input2 + '/' + t.input3 + '/' + t.input4 + '/' + t.input5 + '/' + t.input6 + '/' + t.input7 + '/' + t.input8);
    console.log(response.data.data);
    ;
    
    const botResponse = { text: response, fromUser: false };

    setConversation(prevConversation => [...prevConversation, userMessage, botResponse]);

    setInput('');
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };



  return (
    <div className='container'>
      <div  style={{ height: '300px', overflowY: 'scroll' }}>
      <div className='conversation-container'>
  {conversation.map((message, index) => (
    <div key={index} style={{ padding: '5px', border: `1px solid ${message.fromUser ? 'blue' : 'white'}`, borderRadius: '5px', marginBottom: '5px' }}>
      {message.fromUser ? (
        <div style={{ textAlign: 'right', color: 'white' }}>{message.text}</div>
      ) : (
        <div style={{ textAlign: 'left', color: 'white' }}>{message.text}</div>
      )}
    </div>
  ))}
</div>

    </div>
 <div className='fixed-bottom'>
  <div className='container'>
    <div className='row'>
      <div className='col'>
        <div className='input-group mb-3'>
          <input
            type="text"
            value={input}
            onChange={handleChange}
            placeholder="Type your question..."
            className='form-control'
          />
          <input type="submit" value="send" className='btn btn-primary' onClick={handleMessageSubmit}/>
        </div>
      </div>
    </div>
  </div>
</div>


    </div>
  );
}

export default Chatbot;

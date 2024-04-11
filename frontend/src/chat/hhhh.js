import React, { useRef } from 'react';
import './signup.css';

const SignUp = () => {
    const nameRef = useRef();
    const emailRef = useRef();
    const passRef = useRef();









    
    
    return (
        <div>
            
            <div className="title">
  

  














  

            <header>
                    <h1>Detecting <span className="tt">Breast</span>, <span className="tt">Lung</span>, and <span className="tt">Prostate</span> Cancer: A K-Nearest Neighbors (KNN) Project</h1>
                    
                        created by : 
     
                         - Bassem Farhani
     
                        - Tarek Dhokkar
      
                         - Ryma Dinary
      
                        -Ferdaws Bel Haj Ali
      
            </header>
            <div className="container">
                <div className="cancer-info">

                    <h2>Introduction:</h2>
                    <p>
                    The project exemplifies the potential of machine learning, specifically the KNN algorithm, in cancer detection. By leveraging patient data and advanced algorithms.
                    </p>
                    <p>In the ongoing battle against cancer, early detection remains a crucial factor in improving patient outcomes. Leveraging advancements in machine learning, particularly the K-Nearest Neighbors (KNN) algorithm, holds promise in accurately identifying various cancer types at an early stage. This text delves into a project aimed at utilizing KNN to detect breast, lung, and prostate cancer, discussing its methodology, potential benefits, and challenges.
                    </p>

                </div>






                <div className="cancer-info">
                    <h2>Breast Cancer</h2>
                    <p>Breast cancer is the most common cancer among women worldwide. Early detection through regular screenings and self-exams can greatly improve the chances of successful treatment.</p>
                </div>
                 <div className="cancer-info">
                 <h2>Lung Cancer</h2>
                 <p>Lung cancer is one of the most deadly forms of cancer. Smoking is the leading cause of lung cancer, but non-smokers can also develop it. Early detection and quitting smoking are key for prevention.</p>
                </div>
                <div className="cancer-info">
                     <h2>Prostate Cancer</h2>
                      <p>Prostate cancer is the most common cancer among men. Regular prostate screenings are important, especially for men over 50, to detect and treat the cancer early when it's most treatable.</p>
                </div>

    <div className="cancer-info">
      <h2><center>Documantation :</center></h2>
      <p>
        <ul>
       <li> Introduction :</li>

        <ul><li>Lorsque vous démarrez le chatbot, il vous accueille avec un message de bienvenue.</li></ul>

        <li>Choix du type de cancer :</li>
<ul>
<li>Après le message de bienvenue, le chatbot affiche une question pour vous permettre de choisir le type de cancer que vous souhaitez évaluer.
</li><li>Vous pouvez choisir entre le cancer du sein, le cancer du poumon et le cancer de la prostate en sélectionnant l'option appropriée.
</li></ul>
        <li>Évaluation des Risques :</li>
<ul>
<li>Après avoir choisi le type de cancer, le chatbot pose une série de questions pour évaluer vos risques.</li>
<li>Les questions peuvent inclure des informations en fonction du type de cancer sélectionné.</li>
</ul>
        <li>Analyse des Réponses :</li>
<ul>
<li>Une fois que vous avez répondu à toutes les questions, le chatbot analyse vos réponses pour évaluer vos risques de développer le cancer choisi.
</li>
</ul>      
  </ul>
      </p>
  </div>


</div>

<footer>
    <p>Together, we can fight cancer.</p>
</footer>
<script  src="./script.js"></script>
 






















  
 <div>
<div id="chatbot" className="main-card collapsed">
  <button id="chatbot_toggle">
        <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="currentColor">
            <path d="M0 0h24v24H0V0z" fill="none"/>
            <path d="M15 4v7H5.17l-.59.59-.58.58V4h11m1-2H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm5 4h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1z"/></svg>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" id="ee">
            <path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/></svg>
      
  </button>
  <div className="main-title">
    <div>
      <svg viewBox="0 0 640 512" title="robot">
        <path fill="currentColor" d="M32,224H64V416H32A31.96166,31.96166,0,0,1,0,384V256A31.96166,31.96166,0,0,1,32,224Zm512-48V448a64.06328,64.06328,0,0,1-64,64H160a64.06328,64.06328,0,0,1-64-64V176a79.974,79.974,0,0,1,80-80H288V32a32,32,0,0,1,64,0V96H464A79.974,79.974,0,0,1,544,176ZM264,256a40,40,0,1,0-40,40A39.997,39.997,0,0,0,264,256Zm-8,128H192v32h64Zm96,0H288v32h64ZM456,256a40,40,0,1,0-40,40A39.997,39.997,0,0,0,456,256Zm-8,128H384v32h64ZM640,256V384a31.96166,31.96166,0,0,1-32,32H576V224h32A31.96166,31.96166,0,0,1,640,256Z" />
      </svg>
    </div>
    <span>Chatbot</span>

  </div>
  <div className="chat-area" id="message-box">
  </div>
  <div className="line"></div>
  <div className="input-div">
    <input className="input-message" name="message" type="text" id="message" placeholder="Type your message ..." />
    <button className="input-send" onclick="send()">
      <svg id="hh">
       <path d="M2,21L23,12L2,3V10L17,12L2,14V21Z" />
      </svg>
    </button>
  </div>
</div>



        </div>
        </div>
        </div>
    );
}

export default SignUp;

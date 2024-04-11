const express = require("express");
const path = require("path");
const cors = require("cors");


const app = express();




app.use(express.static(path.join(__dirname, 'assets')));
app.set("view engine", "ejs");
app.set("views", "views");

const { exec } = require('child_process');

app.use(cors())


app.get('/prostatecancer/:radius/:texture/:perimeter/:area/:smoothness/:compactness/:symmetry/:fractal_dimension', async (req, res, next) => {
    const pythonScriptPath = 'script.py';
    const x = req.params.radius;
    const x1 = req.params.texture;
    const x2 = req.params.perimeter;
    const x3 = req.params.area;
    const x4 = req.params.smoothness;
    const x5 = req.params.compactness;
    const x6 = req.params.symmetry;
    const x7 = req.params.fractal_dimension;

    exec(`python ${pythonScriptPath} ${x} ${x1} ${x2} ${x3} ${x4} ${x5} ${x6} ${x7}`, async (error, stdout) => {
        if (error) {
            console.error(`Execution error: ${error}`);
            return;
        }
        console.log(`Prostate Cancer Predicted level is  :${stdout}`);


        
        res.status(200).json({data:`Prostate Cancer Predicted level is  :${stdout}`});
    });
});







app.get('/breastcancer/:t1/:t2/:t3/:t4/:t5/:t6/:t7/:t8/:t9/:t10/:t11/:t12/:t13/:t14/:t15/:t16/:t17/:t18/:t19/:t20/:t21/:t22/:t23/:t24/:t25/:t26/:t27/t28/:t29',(req,res,next)=>{
  const { exec } = require('child_process');

const pythonScriptPath = 'script1.py';
const t1 = req.params.t1;
const t2 = req.params.t2;
const t3 = req.params.t3;
const t4 = req.params.t4;
const t5 = req.params.t5;
const t6 = req.params.t6;
const t7 = req.params.t7;
const t8 = req.params.t8;
const t9 = req.params.t9;
const t10 = req.params.t10;
const t11 = req.params.t11;
const t12 = req.params.t12;
const t13 = req.params.t13;
const t14 = req.params.t14;
const t15 = req.params.t15;
const t16 = req.params.t16;
const t17 = req.params.t17;
const t18 = req.params.t18;
const t19 = req.params.t19;
const t20 = req.params.t20;
const t21 = req.params.t21;
const t22 = req.params.t22;
const t23 = req.params.t23;
const t24 = req.params.t24;
const t25 = req.params.t25;
const t26 = req.params.t26;
const t27 = req.params.t27;
const t28 = req.params.t28;
const t29 = req.params.t29;



exec(`python ${pythonScriptPath} ${t1} ${t2} ${t3} ${t4} ${t5} ${t6} ${t7} ${t8} ${t9} ${t10} ${t11} ${t12} ${t13} ${t14} ${t15} ${t16} ${t17} ${t18} ${t19} ${t20} ${t21} ${t22} ${t23} ${t24} ${t25} ${t26} ${t28} ${t27} ${t29} `, (error, stdout) => {
if (error) {
  console.error(`Erreur d'exécution : ${error}`);
  return;
}
console.log(`Sortie standard : ${stdout}`);
res.status(200).json({data:`breast Cancer Predicted level is  :${stdout}`});
});

});




app.get('/lungcancer/:t1/:t2/:t3/:t4/:t5/:t6/:t7/:t8/:t9/:t10/:t11/:t12/:t13/:t14/:t15',(req,res,next)=>{
  const { exec } = require('child_process');

const pythonScriptPath = 'script2.py';
const t1 = req.params.t1;
const t2 = req.params.t2;
const t3 = req.params.t3;
const t4 = req.params.t4;
const t5 = req.params.t5;
const t6 = req.params.t6;
const t7 = req.params.t7;
const t8 = req.params.t8;
const t9 = req.params.t9;
const t10 = req.params.t10;
const t11 = req.params.t11;
const t12 = req.params.t12;
const t13 = req.params.t13;
const t14 = req.params.t14;
const t15 = req.params.t15;




exec(`python ${pythonScriptPath} ${t1} ${t2} ${t3} ${t4} ${t5} ${t6} ${t7} ${t8} ${t9} ${t10} ${t11} ${t12} ${t13} ${t14} ${t15}`, (error, stdout) => {
if (error) {
  console.error(`Erreur d'exécution : ${error}`);
  return;
}
console.log(`Sortie standard : ${stdout}`);
if (stdout.toLowerCase().includes('yes')) 
res.status(200).json({data:`lung Cancer detected !`});
else
res.status(200).json({data:`lung Cancer is not detected !`});
});

});









const PORT =3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

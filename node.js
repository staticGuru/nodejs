const fs= require('fs');
fs.writeFileSync('helloworld.text','hellow world from the nodejs server');
fs.writeFileSync('index.js','<div>guru</div>');


const restOperator=(...args) =>{
     return args
}
console.log(restOperator({"called":"q"},"name","guru",null))
let cont=document.getElementById("cont");
let word=document.getElementById("word");
let chr =document.getElementById("chr");

function functio(){
 let result=cont.value;
 chr.innerHTML=result.length;

  
 let res=result.trim()
 let wores= res.split(" ");
 let fel=wores.filter(function(elm){
     return elm !="";
 })
 

 
 word.innerHTML=fel.length;
   
}


cont.addEventListener("input",functio);

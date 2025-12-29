let btnAddition=document.getElementById("addition");
let btnSoustraction=document.getElementById("soustraction");
let btnMultiplication=document.getElementById("multiplication");
let btnDivision=document.getElementById("division");

let nombre1=document.getElementById("nombre1");
let nombre2=document.getElementById("nombre2");

let ZoneResultat=document.getElementById("ZoneResultat")

btnAddition.addEventListener("click",()=>{
    let resultat=Number(nombre1.value)+Number(nombre2.value);
    ZoneResultat.textContent=resultat;
});


btnSoustraction.addEventListener("click",()=>{
    let resultat=Number(nombre1.value)-Number(nombre2.value);
    ZoneResultat.textContent=resultat;
});


btnMultiplication.addEventListener("click",()=>{
    let resultat=Number(nombre1.value)*Number(nombre2.value);
    ZoneResultat.textContent=resultat;
});


btnDivision.addEventListener("click",()=>{
    
    if(Number(nombre2.value)===0){
        ZoneResultat.innerHTML = '<span style="color:red;">Math Error</span>';
    }else{
        let resultat=Number(nombre1.value)/Number(nombre2.value);
        ZoneResultat.textContent=resultat;
    }
   
});

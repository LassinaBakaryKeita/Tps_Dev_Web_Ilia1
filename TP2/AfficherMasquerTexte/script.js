let btnClick=document.getElementById("click");
let texte=document.getElementById("texte");

btnClick.addEventListener("click",()=>{
    texte.toggleAttribute("text");
    
    
    if(texte.hasAttribute("text")){
         texte.textContent="Bonjour Lassina Bakary Keïta"
    }else{
         texte.textContent=""
    }
   
});
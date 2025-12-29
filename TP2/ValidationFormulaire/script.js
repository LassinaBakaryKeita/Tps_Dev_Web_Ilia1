let btnSoumettre=document.getElementById("soumettre");
let btnRenitialisation=document.getElementById("renitialiser");

let nom=document.getElementById("nom");
let email=document.getElementById("email");

let message=document.getElementById("messagedeValidation");

let regexEmail= new RegExp("^[a-zA-Z]+[0-9_.-]*@[a-zA-Z0-9_.-]+\\.[a-zA-Z]{2,10}$");
let regexNom=new RegExp("^[a-zA-ZÀ-ÿ_\\s-]{3,30}$");


btnSoumettre.addEventListener("click",(event)=>{
    event.preventDefault();
        
    if(regexNom.test(nom.value) && regexEmail.test(email.value)){
        message.textContent="Vos données sont valides"
        message.style.color="green"
    }else{
        message.textContent="Erreur:Le nom ou l'email est invalide"
        message.style.color="red"
    }
});


btnRenitialisation.addEventListener("click",()=>{
  message.textContent="";
});

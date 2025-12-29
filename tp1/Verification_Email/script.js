let btnValidation= document.getElementById("btnValidation");
let btnInitialisation=document.getElementById("btnInitialisation");

let Email=document.getElementById("email");
let message=document.getElementById("message");


btnValidation.addEventListener("click",()=>{
    let regex= new RegExp("^[a-zA-Z0-9_.-]+@[a-zA-Z0-9_.-]+\\.[a-zA-Z]{2,10}$");
    if(!regex.test(Email.value)){
      message.textContent="Email non valide";
      message.style.color="red";
    }else{
        message.textContent="Email valide";
        message.style.color="green";
    }
});

btnInitialisation.addEventListener("click",()=>{
  message.textContent="";
});


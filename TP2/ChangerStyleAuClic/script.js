let btnClick=document.getElementById("click");

btnClick.addEventListener("click",()=>{
    btnClick.toggleAttribute("couleur2");
    
    if(btnClick.hasAttribute("couleur2")){
         btnClick.style.background="red";
    }else{
        btnClick.style.background="cyan";
    }
   
});
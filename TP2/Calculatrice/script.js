// La declaration des variables

let btnSpr= document.getElementById("btn-spr");
let btnC= document.getElementById("btn-c");

let btnDiv=document.getElementById("btn-div");
let btnMul=document.getElementById("btn-mul");
let btnAdd=document.getElementById("btn-add");
let btnSous=document.getElementById("btn-sous");

let btn0=document.getElementById("btn-zero");
let btn1=document.getElementById("btn-un");
let btn2=document.getElementById("btn-deux");
let btn3=document.getElementById("btn-trois");
let btn4=document.getElementById("btn-quatre");
let btn5=document.getElementById("btn-cinq");
let btn6=document.getElementById("btn-six");
let btn7=document.getElementById("btn-sept");
let btn8=document.getElementById("btn-huit");
let btn9=document.getElementById("btn-neuf");

let btnPoint=document.getElementById("btn-point");

let btnEgale=document.getElementById("btn-egale");

let Ecran=document.querySelector(".conteneur-ecran");
Ecran.textContent="0";

let resultatFini = false;  // Cette variable me permet de savoir si le contenu de l'ecran est un resultat ou une opération



function ajouterChiffre(chiffre){  // implementation de la fonction qui permet d'ajouter un chiffre
    // Si le dernier affichage était un résultat, on repart de zéro
    if (resultatFini) {
        Ecran.textContent = chiffre;
        resultatFini = false; // reinitialisation de la variable d'état
    } else if (Ecran.textContent === "0") {
        Ecran.textContent = chiffre;
    } else {
        Ecran.textContent += chiffre;
    }
}

function ajouterSigne(signe){ // implementation de la fonction qui permet d'ajouter un signe 
    if (resultatFini) {
        // Si le dernier affichage est un résultat, on continue le calcul
        resultatFini = false;
        Ecran.textContent += " " + signe + " ";
    }else if(!Ecran.textContent.includes("+") && !Ecran.textContent.includes("-") && !Ecran.textContent.includes("x") && !Ecran.textContent.includes("/")){
        Ecran.textContent+=" "+signe+" ";
    }
}

// Gestions des chiffres 

btn1.addEventListener("click",()=>{
   ajouterChiffre("1");
});

btn2.addEventListener("click",()=>{
    ajouterChiffre("2");
});

btn3.addEventListener("click",()=>{
    ajouterChiffre("3");
});


btn4.addEventListener("click",()=>{
   ajouterChiffre("4");
});


btn5.addEventListener("click",()=>{
   ajouterChiffre("5");
});


btn6.addEventListener("click",()=>{
    ajouterChiffre("6");
});


btn7.addEventListener("click",()=>{
    ajouterChiffre("7");
});


btn8.addEventListener("click",()=>{
    ajouterChiffre("8");
});


btn9.addEventListener("click",()=>{
    ajouterChiffre("9");
});

btn0.addEventListener("click",()=>{
   ajouterChiffre("0");
});

//Gestion du bouton Point 
btnPoint.addEventListener("click",()=>{
    if(!Ecran.textContent.includes(".")){
        Ecran.textContent+=".";
    }else if(Ecran.textContent.includes("+") || Ecran.textContent.includes("-") || Ecran.textContent.includes("x") || Ecran.textContent.includes("/")){

       let tabString=Ecran.textContent.split(" ");
       if(tabString[2]===""){
         return;
       }else if(!tabString[2].includes(".")){
            Ecran.textContent+=".";
        }

    }
});


// Gestion des signes 
btnAdd.addEventListener("click",()=>{
    ajouterSigne("+");
});


btnMul.addEventListener("click",()=>{
    ajouterSigne("x");
});


btnSous.addEventListener("click",()=>{
    ajouterSigne("-");
});


btnDiv.addEventListener("click",()=>{
    ajouterSigne("/");
});


// Gestion des boutons de suppression

btnC.addEventListener("click",()=>{
    Ecran.textContent="0";
    resultatFini = false; 
});

btnSpr.addEventListener("click",()=>{
    if(Ecran.textContent.length>1){
        let end=Ecran.textContent.length-1;
        let operationText=Ecran.textContent.substring(0,end);
        Ecran.textContent=operationText;
    }else{
        Ecran.textContent="0";
        resultatFini = false;
    }
    
});



// Gestion du bouton Egale

btnEgale.addEventListener("click",()=>{
    let tabOperation=Ecran.textContent.split(" ");

    let nombre1=tabOperation[0];
    let signe=tabOperation[1];
    let nombre2=tabOperation[2];
    
    if(!Ecran.textContent.includes("+") && !Ecran.textContent.includes("-") && !Ecran.textContent.includes("x") && !Ecran.textContent.includes("/")){
        alert("Pas de calcul à faire !");
    }
    
    if(nombre2===""){
        alert("Pas de calcul à faire !");
    }

    
    let resultat;
    switch(signe){
        case "+":
            resultat=Number(nombre1)+Number(nombre2);
            break;
        case "-":
            resultat=Number(nombre1)-Number(nombre2);
            break;
        case "x":
            resultat=Number(nombre1)*Number(nombre2);
            break;
        case "/":
            if(Number(nombre2)===0){
                alert("Erreur:Division impossible");
            }else{
                resultat=Number(nombre1)/Number(nombre2);
            }
             
            break;            
    }

    let dec1 = (nombre1.split(".")[1] || "").length;
    let dec2 = (nombre2.split(".")[1] || "").length;

    //  On prend le plus grand nombre de décimales
    let maxDecimales = Math.max(dec1, dec2);

    // 💡 Si aucun des deux n'a de décimales, on garde le résultat brut
    if (maxDecimales === 0) {
        Ecran.textContent = resultat;
    } else {
        // On limite le résultat au bon nombre de chiffres après la virgule
        Ecran.textContent = resultat.toFixed(maxDecimales);
    }

    resultatFini = true;


});
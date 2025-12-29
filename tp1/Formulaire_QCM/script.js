// Declaration des variables

let btnCorrection =document.getElementById("btnCorrection"); /*Bouton Correction*/ 
let btnResultat =document.getElementById("btnResultat"); /*Bouton Resultat*/ 


let btnInputQuestion1=document.querySelectorAll(".question1 input"); /*Variable contenant la liste des propositions de la question 1*/   
let btnInputQuestion2=document.querySelectorAll(".question2 input"); /*Variable contenant la liste des propositions de la question 2*/
let btnInputQuestion3=document.querySelectorAll(".question3 input"); /*Variable contenant la liste des propositions de la question 3*/
let btnInputQuestion4=document.querySelectorAll(".question4 input"); /*Variable contenant la liste des propositions de la question 4*/
let btnInputQuestion5=document.querySelectorAll(".question5 input"); /*Variable contenant la liste des propositions de la question 5*/




// Ajout d'écouteur d'evenement au bouton Correction 
btnCorrection.addEventListener("click",()=>{
    let fenetreCorrection = window.open("", "Correction", "width=700,height=700");
    fenetreCorrection.document.write("<h2 style='text-align:center;'>Résultat du test</h2>");
    

    // Verification de la véracité de la question 1
    let scoreReponseQuestion1=0;
    for(let i=0;i<btnInputQuestion1.length;i++){
        if(btnInputQuestion1[i].checked){

            if(btnInputQuestion1[i].value=="header" || btnInputQuestion1[i].value=="div"){
                scoreReponseQuestion1++;
            }else{
                scoreReponseQuestion1--;
            }

        }
    } 


    if(scoreReponseQuestion1==2){
         fenetreCorrection.document.write("<p>La reponse de la question 1 est correcte</p>");
    }else{ 
         fenetreCorrection.document.write("<p>La reponse de la question 1 est incorrecte</p>");
    }

   



    // Verification de la véracité de la question 2
    let scoreReponseQuestion2=0;
    for(let i=0;i<btnInputQuestion2.length;i++){
        if(btnInputQuestion2[i].checked){
            scoreReponseQuestion2++;
        }
    } 
    
    if(scoreReponseQuestion2==3){  
           fenetreCorrection.document.write("<p>La reponse de la question 2 est correcte</p>");
    }else{
            fenetreCorrection.document.write("<p>La reponse de la question 2 est incorrecte</p>");
    }


    // Verification de la véracité de la question 3
     let scoreReponseQuestion3=0;
    for(let i=0;i<btnInputQuestion3.length;i++){
        if(btnInputQuestion3[i].checked){

            if(btnInputQuestion3[i].value=="let" || btnInputQuestion3[i].value=="var"){
                scoreReponseQuestion3++;
            }else{
                scoreReponseQuestion3--;
            }

        }
    } 
    
    if(scoreReponseQuestion3==2){
            fenetreCorrection.document.write("<p>La reponse de la question 3 est correcte</p>");
    }else{
           fenetreCorrection.document.write("<p>La reponse de la question 3 est incorrecte</p>");
    }

    
       

    
    // Verification de la véracité de la question 4
    for(let i=0;i<btnInputQuestion4.length;i++){
        if(btnInputQuestion4[i].checked){
            if(btnInputQuestion4[i].value=="img"){
                fenetreCorrection.document.write("<p>La reponse de la question 4 est correcte</p>");
            }else{
                 fenetreCorrection.document.write("<p>La reponse de la question 4 est incorrecte</p>");
            }
        }
    }

    // Verification de la véracité de la question 5
    for(let i=0;i<btnInputQuestion5.length;i++){
        if(btnInputQuestion5[i].checked){
            if(btnInputQuestion5[i].value=="em"){
                 fenetreCorrection.document.write("<p>La reponse de la question 5 est correcte</p>");
            }else{
                 fenetreCorrection.document.write("<p>La reponse de la question 5 est incorrecte</p>");
            }
        }
    }

    

});


// Ajout d'écouteur d'évenement au bouton Resultat 
btnResultat.addEventListener("click",()=>{
    let fenetreResultat = window.open("", "CorrigeComplet", "width=800,height=800");
    fenetreResultat.document.write("<h2 style='text-align:center;'>Corrigé complet du QCM</h2>");
    fenetreResultat.document.write(`
    <p>Question 1: En HTML, quelles balises sont utilisées pour structurer le contenu d’une page web ?</p>
    <ul>
       <li style="text-decoration: underline; color: green;">header</li>
        <li style="text-decoration: underline; color: green;">div</li>
        <li>button</li>
    </ul>

    <p>Question 2: En CSS, quelles propriétés peuvent être utilisées pour centrer un texte ?</p>
    <ul>
       <li style="text-decoration: underline; color: green;">text-align</li>
        <li style="text-decoration: underline; color: green;">justify-content</li>
        <li style="text-decoration: underline; color: green;">align-items</li>
    </ul>

    <p>Question 3: En JavaScript, quelles instructions permettent de déclarer une variable ?</p>
    <ul>
       <li style="text-decoration: underline; color: green;">let</li>
        <li style="text-decoration: underline; color: green;">var</li>
        <li>set</li>
    </ul>

    <p>Question 4: Quelle balise HTML est utilisée pour insérer une image ?</p>
    <ul>
       <li style="text-decoration: underline; color: green;">img</li>
        <li>image</li>
        <li>picture</li>
    </ul>

    <p>Question 5: En CSS, quelle unité est relative à la taille de la police du parent ?</p>
    <ul>
       <li>px</li>
        <li style="text-decoration: underline; color: green;">em</li>
        <li>%</li>
    </ul>`);

    

 });


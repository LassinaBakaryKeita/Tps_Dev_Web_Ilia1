// Récupération du span où le temps sera affiché
const timer=document.getElementById("timer");

// Variable qui stocke le nombre de secondes écoulées
let secondes=-1;

// Exécute la fonction toutes les 1 seconde
setInterval(()=>{
    secondes++;  // incrémentation du temps
    timer.textContent=secondes; // mise à jour de l’affichage
},1000);
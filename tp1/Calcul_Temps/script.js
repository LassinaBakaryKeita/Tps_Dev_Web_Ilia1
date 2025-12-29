
//  DÉCLARATION DES VARIABLES 

// Les champs d'entrée pour les 3 temps
let heure1 = document.getElementById("heure1");
let heure2 = document.getElementById("heure2");
let heure3 = document.getElementById("heure3");

let minute1 = document.getElementById("minute1");
let minute2 = document.getElementById("minute2");
let minute3 = document.getElementById("minute3");

let seconde1 = document.getElementById("seconde1");
let seconde2 = document.getElementById("seconde2");
let seconde3 = document.getElementById("seconde3");

// Les champs de sortie pour le total
let jour = document.getElementById("jour");
let TotalHeure = document.getElementById("TotalHeure");
let TotalMinute = document.getElementById("TotalMinute");
let TotalSeconde = document.getElementById("TotalSeconde");

// Le bouton pour déclencher le calcul
let btnCalculSomme = document.getElementById("btnCalculSomme");


// ÉVÉNEMENT : CLIC SUR "SOMME" 
btnCalculSomme.addEventListener("click", () => {

    // 1️ Récupérer et convertir les valeurs saisies en nombres
    let heures = Number(heure1.value) + Number(heure2.value) + Number(heure3.value);
    let minutes = Number(minute1.value) + Number(minute2.value) + Number(minute3.value);
    let secondes = Number(seconde1.value) + Number(seconde2.value) + Number(seconde3.value);

    // 2️ Déclaration des variables de retenue
    let retenueMin = 0;
    let retenueHeure = 0;
    let retenueJour = 0;

    // Conversion des secondes → minutes
    retenueMin = Math.floor(secondes / 60);  // nombre de minutes à retenir
    secondes = secondes % 60;                // reste des secondes

    //  Conversion des minutes → heures
    retenueHeure = Math.floor((minutes + retenueMin) / 60);
    minutes = (minutes + retenueMin) % 60;

    //  Conversion des heures → jours
    retenueJour = Math.floor((heures + retenueHeure) / 24);
    heures = (heures + retenueHeure) % 24;

    // Affichage du résultat final dans les champs correspondants
    jour.value = retenueJour;
    TotalHeure.value = heures;
    TotalMinute.value = minutes;
    TotalSeconde.value = secondes;
});

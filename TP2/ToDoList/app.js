// Récupération des éléments du DOM
let inputTache = document.getElementById("inputTache"); // Champ de saisie
let listeTaches = document.getElementById("listeTaches"); // Liste UL où seront ajoutées les tâches
let total = document.getElementById("total"); // Élément pour afficher le total des tâches
let nbrtotalTaches = 0; // Compteur du nombre total de tâches

let faites = document.getElementById("faites"); // Élément pour afficher le nombre de tâches faites
let nbrtachesFaites = 0; // Compteur du nombre de tâches faites

let restantes = document.getElementById("restantes"); // Élément pour afficher le nombre de tâches restantes
let nbrtachesRestantes = 0; // Compteur du nombre de tâches restantes

let messageFinal = document.getElementById("messageFinal"); // Élément pour afficher le message de félicitations

// Fonction pour mettre à jour les compteurs et affichages
function mettreAJourScores() {
  total.innerText = nbrtotalTaches; // Mise à jour de l'affichage du total
  faites.innerText = nbrtachesFaites; // Mise à jour de l'affichage des tâches faites
  restantes.innerText = nbrtachesRestantes; // Mise à jour de l'affichage des tâches restantes

  // Vérification si toutes les tâches sont complétées
  if (nbrtotalTaches > 0 && nbrtachesFaites === nbrtotalTaches) {
    messageFinal.innerText = "Bravo, toutes les tâches sont terminées ! 🎉"; // Message de félicitations
  } else {
    messageFinal.innerText = ""; // Effacement du message si nécessaire
  }
}

// Récupération du bouton d'ajout
let btnAjouter = document.getElementById("btnAjouter");

// Désactivation initiale du bouton (champ vide au départ)
btnAjouter.disabled = true;

// Écouteur d'événement pour le champ de saisie
inputTache.addEventListener("input", () => {
  // Activation/désactivation du bouton en fonction du contenu du champ
  if (inputTache.value.trim() === "") {
    btnAjouter.disabled = true; // Désactivation si le champ est vide
  } else {
    btnAjouter.disabled = false; // Activation si du texte est présent
  }
});

// Écouteur d'événement pour le bouton d'ajout
btnAjouter.addEventListener("click", () => {
  // Vérification que le champ n'est pas vide
  if (inputTache.value.trim() === "") {
    return; // Arrêt de la fonction si le champ est vide
  }
  
  nbrtotalTaches++; // Incrémentation du compteur de tâches totales
  nbrtachesRestantes++; // Incrémentation du compteur de tâches restantes

  // Création d'un nouvel élément de liste
  let li = document.createElement("li");
  li.innerText = inputTache.value; // Ajout du texte de la tâche
  listeTaches.appendChild(li); // Ajout à la liste UL

  // Création d'un conteneur pour les boutons d'action
  let div = document.createElement("div");
  li.appendChild(div); // Ajout du conteneur à l'élément de liste

  // Création du bouton "Faire"
  let bouttonFaire = document.createElement("button");
  bouttonFaire.innerText = "Faire ✓"; // Texte du bouton
  bouttonFaire.classList.add("faire"); // Ajout de la classe CSS
  div.appendChild(bouttonFaire); // Ajout du bouton au conteneur

  // Création du bouton "Supprimer"
  let bouttonSupprimer = document.createElement("button");
  bouttonSupprimer.innerText = "Supprimer"; // Texte du bouton
  bouttonSupprimer.classList.add("supprimer"); // Ajout de la classe CSS
  div.appendChild(bouttonSupprimer); // Ajout du bouton au conteneur

  // Écouteur d'événement pour le bouton "Faire"
  bouttonFaire.addEventListener("click", () => {
    li.classList.toggle("fait"); // Basculer la classe "fait" (barré/grisé)
    
    // Mise à jour des compteurs en fonction de l'état de la tâche
    if (li.classList.contains("fait")) {
      nbrtachesFaites++; // Incrémentation si la tâche est marquée comme faite
      nbrtachesRestantes--; // Décrémentation des tâches restantes
    } else {
      nbrtachesFaites--; // Décrémentation si la tâche est marquée comme non faite
      nbrtachesRestantes++; // Incrémentation des tâches restantes
    }

    mettreAJourScores(); // Mise à jour des affichages
  });

  // Écouteur d'événement pour le bouton "Supprimer"
  bouttonSupprimer.addEventListener("click", () => {
    // Mise à jour des compteurs en fonction de l'état de la tâche
    if (li.classList.contains("fait")) {
      nbrtachesFaites--; // Décrémentation si la tâche était faite
    } else {
      nbrtachesRestantes--; // Décrémentation si la tâche était restante
    }

    nbrtotalTaches--; // Décrémentation du total
    li.remove(); // Suppression de l'élément du DOM
    mettreAJourScores(); // Mise à jour des affichages
  });

  mettreAJourScores(); // Mise à jour initiale des affichages
  inputTache.value = ""; // Réinitialisation du champ de saisie
  btnAjouter.disabled = true; // Désactivation du bouton après ajout
});
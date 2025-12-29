
        // DÉCLARATION DES VARIABLES
        
        // Récupération des éléments HTML
        const champRecherche = document.getElementById('champRecherche');
        const listeProduits = document.getElementById('listeProduits');
        const messageVide = document.getElementById('messageVide');
        const statTotal = document.getElementById('statTotal');
        const statAffiches = document.getElementById('statAffiches');
        const statCaches = document.getElementById('statCaches');
        
        // Récupérer tous les éléments de produits
        const tousLesProduits = document.querySelectorAll('.element-produit');
        
        // Nombre total de produits
        const nombreTotalProduits = tousLesProduits.length;
        
        
       
        // FONCTION POUR FILTRER LES PRODUITS
      
        function filtrerProduits() {
            // Récupérer le texte de recherche et le convertir en minuscules
            const texteRecherche = champRecherche.value.toLowerCase().trim();
            
            // Compteurs pour les statistiques
            let nombreAffiches = 0;
            let nombreCaches = 0;
            
            // Parcourir tous les produits
            tousLesProduits.forEach(produit => {
                // Récupérer le nom du produit (en minuscules)
                const nomProduit = produit.getAttribute('data-nom');
                
                // Vérifier si le nom contient le texte recherché
                if (nomProduit.includes(texteRecherche)) {
                    // Afficher le produit
                    produit.classList.remove('cache');
                    nombreAffiches++;
                } else {
                    // Cacher le produit
                    produit.classList.add('cache');
                    nombreCaches++;
                }
            });
            
            // Afficher le message "Aucun résultat" si nécessaire
            if (nombreAffiches === 0) {
                messageVide.classList.add('affiche');
                listeProduits.style.display = 'none';
            } else {
                messageVide.classList.remove('affiche');
                listeProduits.style.display = 'block';
            }
            
            // Mettre à jour les statistiques
            mettreAJourStatistiques(nombreAffiches, nombreCaches);
            
            
        }
        
        
      
        // FONCTION POUR METTRE À JOUR LES STATISTIQUES
        
        function mettreAJourStatistiques(affiches, caches) {
            statTotal.textContent = nombreTotalProduits;
            statAffiches.textContent = affiches;
            statCaches.textContent = caches;
        }
        
        
       
        // FONCTION POUR RÉINITIALISER LA RECHERCHE
        
        function reinitialiserRecherche() {
            // Vider le champ de recherche
            champRecherche.value = '';
            
            // Réafficher tous les produits
            tousLesProduits.forEach(produit => {
                produit.classList.remove('cache');
            });
            
            // Cacher le message vide
            messageVide.classList.remove('affiche');
            listeProduits.style.display = 'block';
            
            // Réinitialiser les statistiques
            mettreAJourStatistiques(nombreTotalProduits, 0);
        }
        
        
       
        // ÉVÉNEMENTS
    
        
        // Événement "input" : déclenché à chaque caractère tapé
        champRecherche.addEventListener('input', filtrerProduits);
        
        // Événement de clic sur un produit
        tousLesProduits.forEach(produit => {
            produit.addEventListener('click', function() {
                const nomProduit = this.textContent;
                alert(`Vous avez sélectionné : ${nomProduit}`);
            });
        });
        
        // Navigation au clavier : Échap pour réinitialiser
        document.addEventListener('keydown', function(evenement) {
            if (evenement.key === 'Escape') {
                reinitialiserRecherche();
                champRecherche.focus();
            }
        });
        
        
    
        // INITIALISATION
       
        
        // Mettre le focus sur le champ de recherche au chargement
        champRecherche.focus();
        
        // Afficher les statistiques initiales
        mettreAJourStatistiques(nombreTotalProduits, 0);
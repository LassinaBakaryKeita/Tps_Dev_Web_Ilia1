        // DÉCLARATION DES VARIABLES

        // Récupération des éléments HTML
        const boutonOuvrir = document.getElementById('boutonOuvrir');
        const modaleOverlay = document.getElementById('modaleOverlay');
        const modaleContenu = document.getElementById('modaleContenu');
        const boutonFermer = document.getElementById('boutonFermer');
        const boutonFermerX = document.getElementById('boutonFermerX');
        const boutonAction = document.getElementById('boutonAction');
        const statOuvertures = document.getElementById('statOuvertures');
        const statFermetures = document.getElementById('statFermetures');
        const statActions = document.getElementById('statActions');
        
        // Variables pour les statistiques
        let nombreOuvertures = 0;
        let nombreFermetures = 0;
        let nombreActions = 0;
        
        
        
        // FONCTION POUR OUVRIR LA MODALE
     
        function ouvrirModale() {
            // Ajouter la classe 'active' pour afficher la modale
            modaleOverlay.classList.add('active');
            
            // Bloquer le scroll du body
            document.body.style.overflow = 'hidden';
            
            // Incrémenter le compteur
            nombreOuvertures++;
            statOuvertures.textContent = nombreOuvertures;
            
          
        }
        
        
       
        // FONCTION POUR FERMER LA MODALE
        
        function fermerModale() {
            // Retirer la classe 'active' pour masquer la modale
            modaleOverlay.classList.remove('active');
            
            // Réactiver le scroll du body
            document.body.style.overflow = 'auto';
            
            // Incrémenter le compteur
            nombreFermetures++;
            statFermetures.textContent = nombreFermetures;
            
        }
        
        
        
        // FONCTION POUR L'ACTION PRINCIPALE
    
        function executerAction() {
            // Incrémenter le compteur d'actions
            nombreActions++;
            statActions.textContent = nombreActions;
            
            // Fermer la modale
            fermerModale();
            
            // Afficher un message
            alert('✓ Action validée avec succès !');
            
           
        }
        
        
      
        // LES ÉVÉNEMENTS
       
        // Clic sur le bouton "Ouvrir"
        boutonOuvrir.addEventListener('click', ouvrirModale);
        
        // Clic sur le bouton "Fermer"
        boutonFermer.addEventListener('click', fermerModale);
        
        // Clic sur le bouton X
        boutonFermerX.addEventListener('click', fermerModale);
        
        // Clic sur le bouton d'action
        boutonAction.addEventListener('click', executerAction);
        
        // Clic sur l'overlay (en dehors de la modale) pour fermer
        modaleOverlay.addEventListener('click', function(evenement) {
            // Vérifier si le clic est sur l'overlay et non sur le contenu
            if (evenement.target === modaleOverlay) {
                fermerModale();
                console.log('Modale fermée via clic extérieur');
            }
        });
        
        // Touche Échap pour fermer la modale
        document.addEventListener('keydown', function(evenement) {
            if (evenement.key === 'Escape' && modaleOverlay.classList.contains('active')) {
                fermerModale();
                console.log('Modale fermée via touche Échap');
            }
        });
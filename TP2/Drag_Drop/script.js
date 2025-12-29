
        // DÉCLARATION DES VARIABLES
      
        
        // Récupération des éléments HTML
        const zoneSource = document.getElementById('zoneSource');
        const zoneCible = document.getElementById('zoneCible');
        const messageVide = document.getElementById('messageVide');
        const statSource = document.getElementById('statSource');
        const statCible = document.getElementById('statCible');
        const statDeplacements = document.getElementById('statDeplacements');
        const boutonReset = document.getElementById('boutonReset');
        
        // Variable pour compter les déplacements
        let nombreDeplacements = 0;
        
        // Élément en cours de déplacement
        let elementEnDeplacement = null;
        
        
       
        // FONCTION POUR METTRE À JOUR LES STATISTIQUES
       
        function mettreAJourStatistiques() {
            // Compter les éléments dans chaque zone
            const elementsSource = zoneSource.querySelectorAll('.element-deplacable').length;
            const elementsCible = zoneCible.querySelectorAll('.element-deplacable').length;
            
            // Mettre à jour l'affichage
            statSource.textContent = elementsSource;
            statCible.textContent = elementsCible;
            statDeplacements.textContent = nombreDeplacements;
            
            // Afficher/masquer le message vide
            if (elementsCible === 0) {
                messageVide.style.display = 'block';
            } else {
                messageVide.style.display = 'none';
            }
        }
        
        
        
        // ÉVÉNEMENTS DE DRAG AND DROP
       
        
        // Fonction pour initialiser les événements sur les éléments
        function initialiserElementsDraggables() {
            const elements = document.querySelectorAll('.element-deplacable');
            
            elements.forEach(element => {
                // Début du glissement
                element.addEventListener('dragstart', function(evenement) {
                    elementEnDeplacement = this;
                    this.classList.add('en-deplacement');
                    
                    // Définir les données à transférer
                    evenement.dataTransfer.effectAllowed = 'move';
                    evenement.dataTransfer.setData('text/html', this.innerHTML);
                    
                });
                
                // Fin du glissement
                element.addEventListener('dragend', function() {
                    this.classList.remove('en-deplacement');
                });
            });
        }
        
        // Fonction pour configurer les zones de drop
        function configurerZonesDrop() {
            const zones = [zoneSource, zoneCible];
            
            zones.forEach(zone => {
                // Autoriser le drop
                zone.addEventListener('dragover', function(evenement) {
                    evenement.preventDefault();
                    this.classList.add('survol');
                    return false;
                });
                
                // Quitter la zone
                zone.addEventListener('dragleave', function() {
                    this.classList.remove('survol');
                });
                
                // Déposer l'élément
                zone.addEventListener('drop', function(evenement) {
                    evenement.stopPropagation();
                    evenement.preventDefault();
                    
                    this.classList.remove('survol');
                    
                    // Vérifier qu'un élément est en cours de déplacement
                    if (elementEnDeplacement) {
                        // Ajouter l'élément à la zone cible
                        this.appendChild(elementEnDeplacement);
                        
                        // Incrémenter le compteur
                        nombreDeplacements++;
                        
                        // Mettre à jour les statistiques
                        mettreAJourStatistiques();
                        
                    }
                    
                    return false;
                });
            });
        }
        
        
   
        // FONCTION POUR RÉINITIALISER
       
        function reinitialiser() {
            // Récupérer tous les éléments
            const tousLesElements = document.querySelectorAll('.element-deplacable');
            
            // Les remettre dans la zone source
            tousLesElements.forEach(element => {
                zoneSource.appendChild(element);
            });
            
            // Réinitialiser le compteur
            nombreDeplacements = 0;
            
            // Mettre à jour les statistiques
            mettreAJourStatistiques();
            
            console.log('Réinitialisation effectuée');
        }
        
        
        
        // LES ÉVÉNEMENTS
       
        // Clic sur le bouton de réinitialisation
        boutonReset.addEventListener('click', reinitialiser);
        
        
        // INITIALISATION
        
        // Initialiser les éléments draggables
        initialiserElementsDraggables();
        
        // Configurer les zones de drop
        configurerZonesDrop();
        
        // Mettre à jour les statistiques initiales
        mettreAJourStatistiques();
        

        // DÉCLARATION DES VARIABLES
      
        
        // Récupération des éléments HTML
        const grilleBoites = document.getElementById('grilleBoites');
        const barreLaterale = document.getElementById('barreLaterale');
        const boutonToggle = document.getElementById('boutonToggle');
        const largeurEcran = document.getElementById('largeurEcran');
        const modeAffichage = document.getElementById('modeAffichage');
        const indicateurMode = document.getElementById('indicateurMode');
        const corpsTableau = document.getElementById('corpsTableau');
        
        // Variable pour suivre l'état du menu
        let menuVisible = true;
        
        
      
        // FONCTION POUR ADAPTER LE LAYOUT
        function adapterLayout() {
            // Récupérer la largeur actuelle de la fenêtre
            const largeurFenetre = window.innerWidth;
            
            // Mettre à jour l'affichage de la largeur
            largeurEcran.textContent = largeurFenetre;
            
            // Définir le mode selon la largeur
            let mode = '';
            
            // Mobile : moins de 768px
            if (largeurFenetre < 768) {
                mode = 'mobile';
                grilleBoites.className = 'grille-boites mobile';
                barreLaterale.classList.add('cache');
                boutonToggle.classList.add('affiche');
                modeAffichage.textContent = 'Mobile';
                indicateurMode.textContent = '📱 Mode Mobile';
                menuVisible = false;
            }
            // Tablette : entre 768px et 1024px
            else if (largeurFenetre >= 768 && largeurFenetre < 1024) {
                mode = 'tablette';
                grilleBoites.className = 'grille-boites tablette';
                barreLaterale.classList.remove('cache');
                boutonToggle.classList.remove('affiche');
                modeAffichage.textContent = 'Tablette';
                indicateurMode.textContent = '💻 Mode Tablette';
                menuVisible = true;
            }
            // Desktop : 1024px et plus
            else {
                mode = 'desktop';
                grilleBoites.className = 'grille-boites desktop';
                barreLaterale.classList.remove('cache');
                boutonToggle.classList.remove('affiche');
                modeAffichage.textContent = 'Desktop';
                indicateurMode.textContent = '🖥️ Mode Desktop';
                menuVisible = true;
            }
            
            // Mettre à jour le tableau d'informations
            mettreAJourTableau(largeurFenetre, mode);
            
            // Afficher dans la console
            console.log(`Mode: ${mode} | Largeur: ${largeurFenetre}px`);
        }
        
        
      
        // FONCTION POUR METTRE À JOUR LE TABLEAU
    
        function mettreAJourTableau(largeur, mode) {
            const hauteur = window.innerHeight;
            const orientation = largeur > hauteur ? 'Paysage' : 'Portrait';
            
            corpsTableau.innerHTML = `
                <tr>
                    <td><strong>Largeur de l'écran</strong></td>
                    <td>${largeur} px</td>
                </tr>
                <tr>
                    <td><strong>Hauteur de l'écran</strong></td>
                    <td>${hauteur} px</td>
                </tr>
                <tr>
                    <td><strong>Mode d'affichage</strong></td>
                    <td>${mode.charAt(0).toUpperCase() + mode.slice(1)}</td>
                </tr>
                <tr>
                    <td><strong>Orientation</strong></td>
                    <td>${orientation}</td>
                </tr>
                <tr>
                    <td><strong>Ratio d'aspect</strong></td>
                    <td>${(largeur / hauteur).toFixed(2)}</td>
                </tr>
            `;
        }
        
        
       
        // FONCTION POUR BASCULER LE MENU (MOBILE)
      
        function basculerMenu() {
            menuVisible = !menuVisible;
            
            if (menuVisible) {
                barreLaterale.classList.remove('cache');
                boutonToggle.textContent = '❌ Masquer le menu';
            } else {
                barreLaterale.classList.add('cache');
                boutonToggle.textContent = '📋 Afficher le menu';
            }
        }
        
        
       
        // ÉVÉNEMENTS
       
        
        // Événement "resize" : déclenché quand on redimensionne la fenêtre
        window.addEventListener('resize', adapterLayout);
        
        // Clic sur le bouton toggle
        boutonToggle.addEventListener('click', basculerMenu);
        
        // Événement au chargement de la page
        window.addEventListener('load', adapterLayout);
        
        
       
        // INITIALISATION
      
        
        // Adapter le layout au chargement
        adapterLayout();
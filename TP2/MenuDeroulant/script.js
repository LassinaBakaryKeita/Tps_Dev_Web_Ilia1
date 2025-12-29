        //Declaration des variables
        const menuTitle = document.getElementById('menuTitle');
        const menuContent = document.getElementById('menuContent');
        const arrow = document.getElementById('arrow');
        const menuItems = document.querySelectorAll('.menu-item');
        const selectedInfo = document.getElementById('selectedInfo');
        const selectedText = document.getElementById('selectedText');
        let isOpen = false;

        // Fonction pour ouvrir/fermer le menu
        function toggleMenu() {
            isOpen = !isOpen;
            
            if (isOpen) {
                menuContent.classList.add('open');
                arrow.classList.add('open');
            } else {
                menuContent.classList.remove('open');
                arrow.classList.remove('open');
            }
        }

        // Event listener sur le titre du menu
        menuTitle.addEventListener('click', toggleMenu);

        // Event listener sur chaque élément du menu
        menuItems.forEach(item => {
            item.addEventListener('click', function() {
                const value = this.getAttribute('data-value');
                const text = this.textContent;
                
                // Afficher la sélection
                selectedText.textContent = text;
                selectedInfo.classList.remove('show');
                
                // Forcer un reflow pour relancer l'animation
                void selectedInfo.offsetWidth;
                selectedInfo.classList.add('show');
                
                // Fermer le menu
                toggleMenu();
                
                console.log('Option sélectionnée:', value);
            });
        });

        // Fermer le menu si on clique en dehors
        document.addEventListener('click', function(e) {
            if (!menuTitle.contains(e.target) && !menuContent.contains(e.target)) {
                if (isOpen) {
                    toggleMenu();
                }
            }
        });

        // Navigation au clavier
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && isOpen) {
                toggleMenu();
            }
        });
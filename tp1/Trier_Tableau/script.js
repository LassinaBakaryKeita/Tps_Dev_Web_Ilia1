// Implementation de la fonction qui permet de trier 
function trier(tab){ 
    for(let i=0;i<tab.length-1;i++){
        for(let j=i+1;j<tab.length;j++){
            if(tab[i]>tab[j]){
                let temp=tab[i];
                tab[i]=tab[j];
                tab[j]=temp;
            }
        }
    }
    return tab;
}

let tab=[5,10,-2,7,2,-100]; // Declaration du tableau

document.writeln("tableau trier avec la methode sort: ", tab.sort());
console.log("Affichage des "+ tab.length+" elements du tableau avant triage: "); // Affichage des elements du tableau avant triage
for(let i=0;i<tab.length;i++){
    console.log("Tab["+i+"]= "+tab[i]);
}


console.log("Affichage des "+ tab.length+" elements du tableau après triage: "); // Affichage des elements du tableau avant triage
trier (tab); // Appel à la fonction trier()
for(let i=0;i<tab.length;i++){
    console.log("Tab["+i+"]= "+tab[i]);
}


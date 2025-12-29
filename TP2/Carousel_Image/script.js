let btnPrev=document.getElementById("btnPrev");
let btnNext=document.getElementById("btnNext");

let images=document.querySelectorAll(".conteneur-photo img");

let conteneurPhoto=document.querySelector(".conteneur-photo");

function MontrerImage(index){
    let deplacement=-400*index;
    conteneurPhoto.style.transform=`translateX(${deplacement}px)`;   
}

let index=0;

btnNext.addEventListener("click",()=>{
    if(index<images.length-1){
        index++;
        MontrerImage(index);
    }
});

btnPrev.addEventListener("click",()=>{
    if(index>0){
        index--;
        MontrerImage(index);
    }
});
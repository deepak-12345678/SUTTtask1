let scrollRight=document.querySelector('.arrowr')
let scrollLeft=document.querySelector('.arrowl')
let qas=document.querySelector('.car')
scrollLeft.addEventListener("click",myFunction);
function myFunction(){
    qas.scrollBy(-150,0);
    qas.style.transition="0.5s";
}
scrollRight.addEventListener("click",myFunction1);
function myFunction1(){
    qas.scrollBy(150,0);
    qas.style.transition="0.5s";

}
let ham=document.querySelector('.bars')

ham.addEventListener('click', () => {
    document.querySelector('.bot1').classList.toggle("cross1")
    document.querySelector('.bot2').classList.toggle("cross2")
    document.querySelector('.bot3').classList.toggle("cross3")
    

    
});
ham.addEventListener('click',()=>{
    if (document.querySelector('.mainmenu').classList.contains("opened")){
        document.querySelector('.mainmenu').classList.remove("opened")
    }
    else{
        document.querySelector('.mainmenu').classList.add("opened")
    }
})

document.querySelector("#brh").addEventListener("mouseover",()=>{
document.querySelector('.breifbox').style.display="block";
document.querySelector('.tip').style.display="block";
});
document.querySelector("#brh").addEventListener("mouseleave",()=>{
    document.querySelector('.breifbox').style.display="none";
    document.querySelector('.tip').style.display="none"
});


let hammobile=document.querySelector('.hamenc')

hammobile.addEventListener('click', () => {
    document.querySelector('.ham1').classList.toggle("cross1mob")
    document.querySelector('.ham2').classList.toggle("cross2mob")
    document.querySelector('.ham3').classList.toggle("cross3mob")
    

    
});
hammobile.addEventListener('click',()=>{
    if (document.querySelector('.navbarformob').classList.contains("openedmob")){
        document.querySelector('.navbarformob').classList.remove("openedmob")
    }
    else{
        document.querySelector('.navbarformob').classList.add("openedmob")
    }
})
let header = document.querySelector("header");
let header_a = document.querySelectorAll("header nav ul li a");

window.addEventListener("scroll",e => {
    if(window.pageYOffset != 0){
        header.style.backgroundColor="rgba(0,0,0,0.8)";
        header.style.color="white";
        header_a.forEach( a =>{
            a.style.color="white";
        })
    }
    else{
        header.style="";
        header_a.forEach( a =>{
            a.style.color="#09777D";
        })}
});
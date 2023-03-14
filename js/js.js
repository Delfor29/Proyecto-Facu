// MODAL
document.querySelectorAll('.container img').forEach(image =>{
    image.onclick = () =>{
        document.querySelector('.modal-image').style.display = "block";
        document.querySelector('.modal-image img').src = image.getAttribute('src')
    }
});

document.querySelector('.modal-image .exit').onclick = ()=>{
    document.querySelector('.modal-image').style.display = "none";

}
// GO UP
mybutton = document.getElementById("mybtn")
window.onscroll = function() {scrollFunction()}

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop  > 20){
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function topFunction(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

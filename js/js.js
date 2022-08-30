let cad = `
<nav>
<input type="checkbox" name="show-menu" id="show-menu">
<label for="show-menu" class="menu-icon"><i class="fa-solid fa-bars"></i></label>
<div class="content">
    <div class="logo"><a href="index.html">FACUNDO AHUMADA PH</a></div>
    <ul class="links">
        <li class="links"><a href="#Dakar">Rally Dakar</a></li>
        <li class="links"><a href="#WRC">WRC</a></li>
        <li class="links"><a href="#RallyArg">Rally argentino</a></li>
        <li class="links"><a href="#Other">Other sports</a></li>
        <li class="links"><a href="#Portait">Portait</a></li>
        <li class="links"><a href="#">About me</a></li>
        <li class="links"><a href="#Contact">Contact</a></li>
    </ul>
</div>
</nav>
`

document.getElementById("head").innerHTML = cad;

cad = `
<span class="copy">
    Delfor Fuente - 2022 | Todos los derechos reservados.
</span>
<ul class="social">
    <li><a href="mailito:rcfacundo@gmail.com">rcfacundo@gmail.com</a></li>
    <li><a href="https://www.instagram.com/facundo_ahumada_fotografia/" target="_blank"><i class="fa-brands fa-instagram"></i></a></li>
</ul>
`
document.getElementById("final").innerHTML = cad;

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

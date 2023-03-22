// MODAL
// document.querySelectorAll('.container img').forEach(image =>{
//     image.onclick = () =>{
//         document.querySelector('.modal-image').style.display = "block";
//         document.querySelector('.modal-image img').src = image.getAttribute('src')
//     }
// });

// document.querySelector('.modal-image .exit').onclick = ()=>{
//     document.querySelector('.modal-image').style.display = "none";
// }

//MODAL AND CARROUSEL
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  const slides = document.querySelectorAll('.container img');
  const modalImg = document.querySelector('.modal-image img');
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  slides[slideIndex-1].style.display = "block";
  modalImg.src = slides[slideIndex-1].getAttribute('src');
}

document.querySelectorAll('.container img').forEach((image, index) => {
  image.onclick = () =>{
    currentSlide(index+1);
    document.querySelector('.modal-image').style.display = "block";
  }
});
function closeModal() {
    document.querySelector('.modal-image .exit').onclick = ()=>{
        document.querySelector('.modal-image').style.display = "none";
    }
};



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

//NAVIGATION THROUGH THE MODAL
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', (event) => {
  touchStartX = event.touches[0].clientX;
});

document.addEventListener('touchend', (event) => {
  touchEndX = event.changedTouches[0].clientX;
  if (touchStartX - touchEndX > 50) {
    plusSlides(1); 
  } else if (touchEndX - touchStartX > 50) {
    plusSlides(-1); 
  }
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') {
      plusSlides(-1); 
    } else if (event.key === 'ArrowRight') {
      plusSlides(1); 
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        document.querySelector('.modal-image').style.display = "none"; 
    }
  });


//HAMBURGER MENU
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle('active')
    navMenu.classList.toggle('active')
})

document.querySelectorAll(".nav-item").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))


// dada la siguiente estructura en html:

//       <section class="container">
//         <figure class="img-container">
//           <img class="zoom" src="img//Other/_9DS0482.jpg" alt="Track day" />
//         </figure>
//       <div class="modal-image">
//         <div class="exit">&times;</div>
//         <div class="prev" onclick="plusSlides(-1)">&#10094;</div>
//         <div class="next" onclick="plusSlides(1)">&#10095;</div>
//         <img src="" alt="" />
//       </div>
// y el siguiente codigo de js: 

// document.querySelectorAll('.container img').forEach(image =>{
//     image.onclick = () =>{
//         document.querySelector('.modal-image').style.display = "block";
//         document.querySelector('.modal-image img').src = image.getAttribute('src')
//     }
// });

// document.querySelector('.modal-image .exit').onclick = ()=>{
//     document.querySelector('.modal-image').style.display = "none";
// }

// Dame el codigo para armar un carrusel en js
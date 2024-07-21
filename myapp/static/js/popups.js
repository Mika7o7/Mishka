function openForm() {
    document.getElementById("popup").classList.toggle("popup-open");
    document.getElementById("popup_close").style.display = "block";
  }
function closeForm() {
    document.getElementById("popup").classList.toggle("popup-open");
    document.getElementById("popup_close").style.display = "none";
  }

// function myFunction() {
//     var x = document.getElementById("myLinks");
//     if (x.style.display === "block") {
//       x.style.display = "none";
//     } else {
//       x.style.display = "block";
//     }
//   }

function openbar() {
    document.getElementById("myLinks").classList.toggle("myLinks-close");
    document.getElementById("myLinks").style.display = "block";
    document.getElementById('icon').style.display = "none";
  }


function closebar() {
    document.getElementById("myLinks").classList.toggle("myLinks-close");
    document.getElementById("myLinks").style.display = "none";
    document.getElementById('icon').style.display = "block";


  }

const offset = 700;
const offset1 = 600; // Замените на нужное значение
const offset2 = 1300; // Замените на нужное значение
const offset3 = 5000;

const offset21 = 100; // Замените на нужное значение
const offset22 = 1300; // Замените на нужное значение
const offset23 = 2500;
function toLesson(x, y) {
    window.scrollTo(x, y);
};

function Course_program(x, y) {
    window.scrollTo(x, y);
};

function toContacts(x, y) {
    window.scrollTo(x, y);
};

// onScroll
window.onscroll = () => {
   if (window.scrollY > offset) {
    document.querySelector('.buttonUp').classList.add('buttonUp--active')
    // click
    document.querySelector('.buttonUp').onclick = () => {
        window.scrollTo(0, 0);
};
   } else {
    document.querySelector('.buttonUp').classList.remove('buttonUp--active')
    
   }

   // Для mishkaUp1
  if (window.scrollY > offset1) {
    document.querySelector('.mishkaUp1').classList.add('mishkaUp1--active');
    // click
    document.querySelector('.mishkaUp1').onclick = () => {
      window.scrollTo(0, 0);
    };
  } else {
    document.querySelector('.mishkaUp1').classList.remove('mishkaUp1--active');
  }

  // Для mishkaUp2
  if (window.scrollY > offset2) {
    document.querySelector('.mishkaUp2').classList.add('mishkaUp2--active');
    // click
    document.querySelector('.mishkaUp2').onclick = () => {
      window.scrollTo(0, 0);
    };
  } else {
    document.querySelector('.mishkaUp2').classList.remove('mishkaUp2--active');
  }

  // Для mishkaUp3
  if (window.scrollY > offset3) {
    document.querySelector('.mishkaUp3').classList.add('mishkaUp3--active');
    // click
    document.querySelector('.mishkaUp3').onclick = () => {
      window.scrollTo(0, 0);
    };
  } else {
    document.querySelector('.mishkaUp3').classList.remove('mishkaUp3--active');
  }

  if (window.scrollY > offset21) {
    document.querySelector('.mishkaUp21').classList.add('mishkaUp21--active');
    // click
    document.querySelector('.mishkaUp21').onclick = () => {
      window.scrollTo(0, 0);
    };
  } else {
    document.querySelector('.mishkaUp21').classList.remove('mishkaUp21--active');
  }

  // Для mishkaUp2
  if (window.scrollY > offset22) {
    document.querySelector('.mishkaUp22').classList.add('mishkaUp22--active');
    // click
    document.querySelector('.mishkaUp22').onclick = () => {
      window.scrollTo(0, 0);
    };
  } else {
    document.querySelector('.mishkaUp22').classList.remove('mishkaUp22--active');
  }

  // Для mishkaUp3
  if (window.scrollY > offset23) {
    document.querySelector('.mishkaUp23').classList.add('mishkaUp23--active');
    // click
    document.querySelector('.mishkaUp23').onclick = () => {
      window.scrollTo(0, 0);
    };
  } else {
    document.querySelector('.mishkaUp23').classList.remove('mishkaUp23--active');
  }
};

// carusel 

var slideIndex = 1;
showSlides(slideIndex);


function pluseSlides(n) {
  showSlides(slideIndex += n);
} 

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");

  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex=slides.length
  }
  for (i=0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i=0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += "active";
}
$(document).ready(function () {
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    
})
});



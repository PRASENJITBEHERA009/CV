
const menuIcon =
document.getElementById("menuIcon");

const navMenu =
document.getElementById("navMenu");

menuIcon.addEventListener("click",()=>{

  navMenu.classList.toggle("active");

  const icon =
  menuIcon.querySelector("i");

  if(navMenu.classList.contains("active")){

    icon.classList.remove("fa-bars");

    icon.classList.add("fa-xmark");

  }else{

    icon.classList.remove("fa-xmark");

    icon.classList.add("fa-bars");
  }

});

// CLOSE MENU AFTER CLICK

const navLinks =
document.querySelectorAll(".nav-menu a");

navLinks.forEach((link)=>{

  link.addEventListener("click",()=>{

    navMenu.classList.remove("active");

    const icon =
    menuIcon.querySelector("i");

    icon.classList.remove("fa-xmark");

    icon.classList.add("fa-bars");

  });

});

// ==========================
// CONTACT FORM
// ==========================

const contactForm =
document.getElementById("contactForm");

contactForm.addEventListener("submit",(e)=>{

  e.preventDefault();

  alert(
  "Thank You! Your message has been submitted."
  );

  contactForm.reset();

});

// ==========================
// TYPING ANIMATION
// ==========================

const typingText =
document.querySelector(".typing");

const words = [

  "Web Developer",
  "Programmer",
  "Java Developer",
  "Frontend Developer"

];

let wordIndex = 0;

let charIndex = 0;

let isDeleting = false;

function typeEffect(){

  const currentWord =
  words[wordIndex];

  if(!isDeleting){

    typingText.textContent =
    currentWord.substring(0,charIndex++);

    if(charIndex >
      currentWord.length){

      isDeleting = true;

      setTimeout(typeEffect,1000);

      return;
    }

  }else{

    typingText.textContent =
    currentWord.substring(0,charIndex--);

    if(charIndex < 0){

      isDeleting = false;

      wordIndex =
      (wordIndex + 1) %
      words.length;
    }
  }

  setTimeout(typeEffect,
    isDeleting ? 60 : 120);
}

typeEffect();

// ==========================
// DARK MODE TOGGLE
// ==========================

const themeToggle =
document.getElementById("themeToggle");

themeToggle.addEventListener("click",()=>{

  document.body.classList.toggle(
    "dark-mode"
  );

  const icon =
  themeToggle.querySelector("i");

  if(document.body.classList.contains(
    "dark-mode")){

    icon.classList.remove("fa-moon");

    icon.classList.add("fa-sun");

  }else{

    icon.classList.remove("fa-sun");

    icon.classList.add("fa-moon");
  }

});

// ==========================
// HEADER SHADOW ON SCROLL
// ==========================

const header =
document.querySelector(".header");

window.addEventListener("scroll",()=>{

  if(window.scrollY > 50){

    header.style.boxShadow =
    "0 5px 20px rgba(0,0,0,0.25)";

  }else{

    header.style.boxShadow = "none";
  }

});

// ==========================
// SCROLL REVEAL ANIMATION
// ==========================

const revealElements =
document.querySelectorAll(
".card, .about-box, .contact-box"
);

const revealOnScroll = ()=>{

  revealElements.forEach((element)=>{

    const elementTop =
    element.getBoundingClientRect().top;

    const windowHeight =
    window.innerHeight;

    if(elementTop <
      windowHeight - 80){

      element.classList.add("show");
    }

  });

};

window.addEventListener(
"scroll",
revealOnScroll
);

window.addEventListener(
"load",
revealOnScroll
);

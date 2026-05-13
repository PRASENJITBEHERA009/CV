// MOBILE MENU

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

// CONTACT FORM

const contactForm =
document.getElementById("contactForm");

contactForm.addEventListener("submit",(e)=>{

  e.preventDefault();

  alert(
  "Thank You! Your message has been submitted."
  );

  contactForm.reset();

});

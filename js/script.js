var slideIndex = 0;
showSlides();


function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 4000); // Change image every 4 seconds
}

//getting menu-item as an array
let menuItems = document.getElementsByClassName("menu-item");

//default hide menu
time=setInterval(function() {
  let menuButton = document.getElementById('menu-button');
  let buttonStyle = getComputedStyle(menuButton);

  if (window.innerWidth < 1100 && buttonStyle.display == "block") {
    for (i=0;i < menuItems.length;i++) {
      menuItems[i].style.display = "none";
  } 
  } else {}
},50);

//show menu
function showMenu() {
    let xButton = document.getElementById("xbutton");
    let menuButton = document.getElementById("menu-button");

    for (i=0;i < menuItems.length;i++) {
        menuItems[i].style.display = "block";
    }
    xButton.style.display = "inline";
    menuButton.style.display="none";
}

//hides the menu
function hideMenu() {
    let xButton = document.getElementById("xbutton");
    let menuButton = document.getElementById("menu-button");

        for (i=0;i < menuItems.length;i++) {
          menuItems[i].style.display = "none";
      }
        xButton.style.display = "none";
        menuButton.style.display="block";   
}

//show or hide faq answer
function faqShowHide(answer) {
  let showItem = document.getElementById(answer);
  if (showItem.style.display == "none") {
    showItem.style.display = "block";
  } else {
    showItem.style.display = "none";
  }
}

//show event
function showEvent(event) {
  let eventNumber = document.getElementById(event);
  let eventStyle = getComputedStyle(eventNumber);

  if (eventStyle.display == "none") {
    eventStyle.display = "block";
  } else {
    eventStyle.display = "none";
  }
}
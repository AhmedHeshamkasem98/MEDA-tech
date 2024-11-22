// Scroll up button
const scrollBtn = document.querySelector(".scroll-up");
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");
const bars = document.querySelector(".fa-bars");
const xMark = document.querySelector(".fa-xmark");
const navList = document.querySelectorAll(".nav-list");

// Scroll up button
window.onscroll = () => {
  if (document.documentElement.scrollTop > 100) {
    scrollBtn.classList.add("top");
  } else {
    scrollBtn.classList.remove("top");
  }
};

// show menu
navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  bars.classList.toggle("active");
  xMark.classList.toggle("active");
});

// hide menu
navList.forEach((item) => {
  item.addEventListener("click", () => {
    navMenu.classList.remove("active");
    bars.classList.toggle("active");
    xMark.classList.toggle("active");
  });
});

// Typewriter Effect 

document.addEventListener('DOMContentLoaded', function() {
  const sitname = document.getElementById('sitname');
  const set = sitname.innerHTML;
  sitname.innerHTML = '';

  let i = 0;

  function Typewriter() {
    if (i < set.length){
      sitname.innerHTML += set.charAt(i);
      i++
      
     
      if (i == set.length) {
       setname.innerHTML += set.charAt(i)
       i++
      }
      setTimeout(Typewriter, 200);

    }else {
      setTimeout(( )=> {
    set.innerHTML = '';
    i = 0;
    Typewriter()
      },2000)
    }
  }
  Typewriter();
})

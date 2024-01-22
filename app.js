function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

Shery.mouseFollower({
  skew: true,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});

Shery.makeMagnet(".btn", {
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});
Shery.makeMagnet(".submit", {
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});
Shery.makeMagnet(".logo-container", {
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});

gsap.from(".profile-pic-container", {
  y: 30,
  opacity: 0,
  ease: Power2,
  duration: 1,
});

gsap.from(".section-text-container", {
  y: 30,
  opacity: 0,
  ease: Power2,
  duration: 1,
});
Shery.textAnimate(".section__text__p1" , {
  style: 1,
  y: 10,
  delay: 0.1,
  duration: 0.5,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  multiplier: 0.1,
});
Shery.textAnimate(".title" , {
  style: 1,
  y: 10,
  delay: 0.1,
  duration: 1,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  multiplier: 0.1,
});
Shery.textAnimate(".section__text__p2" , {
  style: 1,
  y: 10,
  delay: 0.1,
  duration: 2,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  multiplier: 0.1,
});

VanillaTilt.init(document.querySelectorAll(".color-container"),{
    max: 22,
    speed: 150,
    glare: true,
    "max-glare": 0.5
  });
  
VanillaTilt.init(document.querySelectorAll(".details-container"),{
    max: 22,
    speed: 150,
    glare: true,
    "max-glare": 2
  });
// Select necessary elements
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");
const overlay = document.querySelector(".overlay");
const menuLinks = document.querySelectorAll(".menu a");

// Add click event listeners for menu toggle and overlay
menuToggle.addEventListener("click", toggleMenu);
overlay.addEventListener("click", toggleMenu);

// Add click event listeners for each menu link
menuLinks.forEach((link) => {
  link.addEventListener("click", toggleMenu);
});

// Toggle the menu and overlay based on window width
function toggleMenu() {
  if (window.innerWidth >= 992) {
    resetMenu();
  } else {
    nav.classList.toggle("active");
    overlay.classList.toggle("active");
  }
}

// Reset the menu and overlay when window width is greater than or equal to 992px
window.addEventListener("resize", function () {
  if (window.innerWidth >= 992) {
    resetMenu();
  }
});

// Remove 'active' class from menu and overlay elements
function resetMenu() {
  nav.classList.remove("active");
  overlay.classList.remove("active");
}

// Initialize the slider
$(document).ready(function () {
  $(".slider").slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true,
    prevArrow: '<button type="button" class="slick-prev">Previous</button>',
    nextArrow: '<button type="button" class="slick-next">Next</button>',
  });
});

$(".slider").slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  centerMode: true,
  variableWidth: true,
  prevArrow: '<button type="button" class="slick-prev">Previous</button>',
  nextArrow: '<button type="button" class="slick-next">Next</button>',
  responsive: [
    {
      breakpoint: 375,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        centerMode: true,
        centerPadding: "30px", // Adicione esta linha para centralizar em dispositivos pequenos
      },
    },
    {
      breakpoint: 550,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        centerMode: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        centerMode: true,
      },
    },
  ],
});

// Adicione este código para trazer a imagem clicada para o centro
$(".slide").on("click", function () {
  var index = $(this).attr("data-slick-index");
  $(".slider").slick("slickGoTo", index);
});

// AJUSTAR MARGEM DAS SEÇÕES
function adjustSectionMargin() {
  const headerHeight = $("header").outerHeight();
  $(".menu a").on("click", function (e) {
    e.preventDefault();
    const target = $(this).attr("href");
    const section = $(target);
    $("html, body").animate(
      {
        scrollTop: section.offset().top - headerHeight,
      },
      800
    );
  });
}

$(document).ready(function () {
  adjustSectionMargin();
});

function changeMenuColor(color) {
  const menuToggle = document.querySelector(".menu-toggle");

  if (color === "light") {
    menuToggle.classList.add("light");
    menuToggle.classList.remove("dark");
  } else {
    menuToggle.classList.add("dark");
    menuToggle.classList.remove("light");
  }
}

// Observe color detectors to change menu color
const colorDetectors = document.querySelectorAll(".color-detector");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const bgColor = entry.target.getAttribute("data-bg-color");
        changeMenuColor(bgColor);
      }
    });
  },
  { threshold: 0.5 }
);

colorDetectors.forEach((detector) => observer.observe(detector));

// BTN MOBILE

function initBtnMobile() {
  const btnMobile = document.querySelector(".btn-mobile");

  function toggleMenu(event) {
    const nav = document.querySelector(".nav");
    nav.classList.toggle("ativo");
  }

  btnMobile.addEventListener("click", toggleMenu);
}
initBtnMobile();

// MODAL

function initModal() {
  const botaoAbrir = document.querySelector('[data-modal="abrir"]');
  const botaoFechar = document.querySelector('[data-modal="fechar"]');
  const containerModal = document.querySelector('[data-modal="container"]');

  if (botaoAbrir && botaoFechar && containerModal) {
    function toggleModal(event) {
      event.preventDefault();
      containerModal.classList.toggle("ativo");
    }

    function cliqueForaModal(event) {
      if (event.target === this) toggleModal(event);
    }

    botaoAbrir.addEventListener("click", toggleModal);
    botaoFechar.addEventListener("click", toggleModal);
    containerModal.addEventListener("click", cliqueForaModal);
  }
}
initModal();

// Scroll Anima

function initScrollAnima() {
  const sections = document.querySelectorAll(".js-scroll");

  if (sections.length) {
    const windowMetade = window.innerHeight * 0.75;

    function scrollAnima() {
      sections.forEach((item) => {
        const sectionTop = item.getBoundingClientRect().top;
        const sectionIsVisible = sectionTop - windowMetade < 0;
        if (sectionIsVisible) {
          item.classList.add("ativo");
        } else {
          item.classList.remove("ativo");
        }
      });
    }
    scrollAnima();

    window.addEventListener("scroll", scrollAnima);
  }
}
initScrollAnima();

// Scroll Suave
function initScrollSuave() {
  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');
  if (linksInternos.length) {
    function scrollIntoSection(event) {
      event.preventDefault();
      const href = event.currentTarget.getAttribute("href");
      const section = document.querySelector(href);
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    linksInternos.forEach((item) => {
      item.addEventListener("click", scrollIntoSection);
    });
  }
}
initScrollSuave();

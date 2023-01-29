/*Olena */
$(document).ready(function() {
  $('#accordeon .acc-head').on('click', f_acc);
});

function f_acc(){
  //$('#accordeon .ac-body').slideUp(1000);
  $('#accordeon .acc-body').not(    $(this).next()   ).slideUp(1000);
  $(this).next().slideToggle(2000);
}
/*Скрытый блок нажатие на кнопку 1*/

$(document).ready(function() {
 $(".krujok").click(function() {
  $("#bar_block").slideToggle(); 
}); });


/*Скрытый блок  для мобильной версии нажатие на кнопку 2*/
$(document).ready(function() {
 $(".krujok2").click(function() {
  $(".project-hiden").slideToggle(); 
}); });


$(function() {
  // Owl Carousel
  var owl = $(".owl-carousel");
  owl.owlCarousel({
    items: 1,
    margin: 10,
    loop: true,
    nav: true
  });
});



(() => {
  const mobileMenu = document.querySelector('.js-menu-container');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtn = document.querySelector('.js-close-menu');

  const toggleMenu = () => {
    const isMenuOpen =
      openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
        openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
        mobileMenu.classList.toggle('is-open');

    const scrollLockMethod = !isMenuOpen
      ? 'disableBodyScroll'
      : 'enableBodyScroll';
    bodyScrollLock[scrollLockMethod](document.body);
  };

  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);

  // Close the mobile menu on wider screens if the device orientation changes
  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', false);
    bodyScrollLock.enableBodyScroll(document.body);
  });
})();


(() => {
  const refs = {
    openModalBtn: document.querySelector(".data-modal-open"),
    closeModalBtn: document.querySelector(".data-modal-close"),
    modal: document.querySelector(".data-modal"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();

$(document).ready(function() {
 $(".li-menu-toggle").click(function() {
  $(".js-menu-container").css("display", "none"); 
}); });


$(document).ready(function() {
 $(".js-open-menu").click(function() {
  $(".js-menu-container").css("display", "block"); 
}); });


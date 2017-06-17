'use strict';
(function () {
  document.querySelector('.main-nav').classList.remove('main-nav--opened');
  document.querySelector('.main-nav').classList.add('main-nav--closed');

  var menuBtn = document.querySelector('.main-nav__toggle');
  menuBtn.addEventListener('click', function () {
    document.querySelector('.main-nav').classList.toggle('main-nav--opened');
    document.querySelector('.main-nav').classList.toggle('main-nav--closed');
  });
})();

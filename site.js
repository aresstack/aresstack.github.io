(function () {
  'use strict';

  var menuToggle = document.querySelector('.menu-toggle');
  var navigation = document.getElementById('primary-navigation');
  var year = document.getElementById('year');

  document.documentElement.classList.add('has-js');

  if (year) {
    year.textContent = String(new Date().getFullYear());
  }

  if (!menuToggle || !navigation) {
    return;
  }

  function closeNavigation() {
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Open navigation');
    navigation.classList.remove('is-open');
  }

  menuToggle.addEventListener('click', function () {
    var isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!isOpen));
    menuToggle.setAttribute('aria-label', isOpen ? 'Open navigation' : 'Close navigation');
    navigation.classList.toggle('is-open', !isOpen);
  });

  navigation.addEventListener('click', function (event) {
    if (event.target.closest('a')) {
      closeNavigation();
    }
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      closeNavigation();
    }
  });

  window.addEventListener('resize', function () {
    if (window.innerWidth > 760) {
      closeNavigation();
    }
  });
}());

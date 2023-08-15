'use strict';
//Elements
const navigation = document.querySelector('.navigation');
const hamburgerBtn = document.querySelector('#navigation__hamburger');
const navLinks = document.querySelector('#navigation__links');
const activePage = window.location.pathname;
const navLink = document.querySelectorAll('.navigation__link');
const hiddenElements = document.querySelectorAll('.hide-element');
const navLogo = document.querySelector('.navigation__logo');
const main = document.querySelector('main');
const scrollTop = document.querySelector('.scroll-to-top');
const navPrev = document.querySelector('.navigation__prev');
const navContainer = document.querySelector('.navigation__container');
const senderEmail = document.getElementById('email');
const senderName = document.querySelector('#name');
const senderMessage = document.querySelector('#message');
//SwiperJS

navLink.forEach(link => {
  if (link.href.includes(`${activePage}`)) {
    link.classList.add('active-nav');
  }
});

//Functions

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show-element');
    } else {
      entry.target.classList.add('hide-element');
    }
  });
});

//Event Listeners
hiddenElements.forEach(el => observer.observe(el));
//ScrolToTop
window.addEventListener('scroll', () => {
  scrollTop.classList.toggle('active', window.scrollY > 500);
  navLogo.classList.toggle('sticky__logo', window.scrollY > 5);
  navigation.classList.toggle('sticky', window.scrollY > 5);
  navPrev.classList.toggle('hidden', window.scrollY > 5);
  navContainer.classList.toggle('white-background', window.screenY > 1);
  // navPrev.classList.add('hidden', window.scrollY > 1);
  // navPrev.classList.add('navigation__prev', window.scrollY < 1);
  // navLinks.classList.toggle('sticky', window.scrollY > 500);
});

const scrollToTop = function () {
  window.scrollTo({
    top: 0,
  });
};

//Mobile Nav Menu toggle
hamburgerBtn.addEventListener('click', e => {
  e.preventDefault();
  hamburgerBtn.classList.toggle('is-active');
  navLinks.classList.toggle('show-nav');
});

//Function calls
const sendEmail = () => {
  Email.send({
    Host: 'smtp.elasticemail.com',
    Username: 'abiodun2014akanbi@gmail.com',
    Password: '27CF279BE5E0AFDEAC6666ED340C938B6918',
    Port: '2525',
    To: 'contact@markazultarbiyya.com.ng',
    From: senderEmail.value,
    Subject: 'New contact form entry from Markazul Tarbiyya',
    Body:
      'Name: ' +
      senderName.value +
      '<br> Email: ' +
      senderEmail.value +
      '<br> Message: ' +
      senderMessage.value,
  }).then(message => alert('Message sent successfully'));
};

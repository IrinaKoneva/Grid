const  burger = document?.querySelector('.burger__header');
const nav = document?.querySelector('.nav__header');
const body = document.body;
burger?.addEventListener('click', () => {
  nav?.classList.toggle('nav--visible')
  burger?.classList.toggle('burger--active');
  body.classList.toggle('stop-scroll');
})

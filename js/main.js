const navMobile = document.querySelector('.nav-mobile');
const navBtn = document.querySelector('.hamburger');
const navLinks = document.querySelectorAll('.nav__link');
const footerYear = document.querySelector('.footer__year');

const handleNav = () => {
	navBtn.classList.toggle('is-active');
	navMobile.classList.toggle('nav-mobile--active');
	document.body.classList.toggle('sticky-body');
};

const hidingNav = () => {
	navBtn.classList.remove('is-active');
	navMobile.classList.remove('nav-mobile--active');
	document.body.classList.remove('sticky-body');
};

const handleCurrentYear = () => {
	const year = new Date().getFullYear();
	footerYear.innerText = year;
};

handleCurrentYear();
navBtn.addEventListener('click', handleNav);
navLinks.forEach(n => n.addEventListener('click', hidingNav));

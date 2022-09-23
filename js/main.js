const dropdown = document.querySelector('.burger-line');
const menu = document.querySelector('.menu');
const site = document.querySelector('html');
const header =  document.querySelector('header');

// methods
const scrollDown = () => {
	if (window.innerHeight >= 800) {
		if (pageYOffset >= 140) {
			menu.classList.remove('active')
			header.classList.add('scrollDown');
		} else {
				header.classList.remove('scrollDown');
		}
	}

	if (window.innerHeight <= 800) {
		if (pageYOffset >= 10) {
			header.classList.add('scrollDown');
		} else {
			header.classList.remove('scrollDown');
		}
	}
}

// end methods

dropdown.onclick = () => {
	menu.classList.toggle('active')
	site.classList.toggle('active');
	header.classList.remove('scrollDown');
}

window.addEventListener('scroll', scrollDown);


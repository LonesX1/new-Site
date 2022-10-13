const dropdown = document.querySelector('.burger-line');
const menu = document.querySelector('.menu');
const site = document.querySelector('html');
const header =  document.querySelector('header');
// const blogPost = document.querySelector('.all-blog-post');

// methods
const scrollDown = () => {
	if (window.innerHeight >= 801) {
		if (pageYOffset >= 100) {
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
// const mainOverflowSetting = (post) => {
// 	if (post.children.length >= 5) {
// 		post.style.height = 100 + "%";
// 	} else if (post.children.length < 5) {
// 		post.style.height = 100 + "vh";
// 	}
// }

const openMenu = (menuOpen) => {
	menuOpen.classList.toggle('active');
}

// end methods

dropdown.onclick = () => {
	menu.classList.toggle('active')
	site.classList.toggle('active');
	header.classList.remove('scrollDown');
}
// mainOverflowSetting(blogPost)
window.addEventListener('scroll', scrollDown);

const partner = document.querySelector('.partner');
const open = document.querySelector('.button-open-about');

// open.onclick = () => {
// 	partner.classList.toggle('active')
// }
// open.addEventListener("click", openMenu(partner));
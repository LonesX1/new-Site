const dropdown = document.querySelector('.burger-line');
const menu = document.querySelector('.menu');
const site = document.querySelector('html');
const header =  document.querySelector('header');
const blogPost = document.querySelector('.all-blog-post');
const mainInfo = document.querySelector('.post-info');
const idBlogPost = document.querySelector('.all-blog-post');
const postImg = document.querySelector('.post-img');

// methods

const scrollDown = () => {
	if (window.innerHeight >= 801) {
		if (pageYOffset >= 140) {
			menu.classList.remove('active')
			header.classList.add('scrollDown');
		} else {
				header.classList.remove('scrollDown');
		}
	}

	if (window.innerHeight <= 800) {
		if (pageYOffset >= 15) {
			header.classList.add('scrollDown');
		} else {
			header.classList.remove('scrollDown');
		}
	}
}
// const mainOverflowSetting = (post) => {
// 	if (post.children.length >= 5) {
// 		post.style.height = 200 + "%";
// 	} else if (post.children.length < 5) {
// 		post.style.height = 100 + "vh";
// 	}
// }
// // console.log(body.offsetHeight)
// const postOverflowSetting = (post, main) => {
//     if (main.offsetHeight < 600) {
//         post.style.height = 100 + "vh";
//     } else if (main.offsetHeight > 601) {
//         post.style.height = 100 + "%";
//     }
// }
const imgPerPost = () => {
	if (postImg.children === 1) {
		postImg.style.justifyContent = 'center';
	} else if (postImg.children >= 2) {
		postImg.style.justifyContent = 'none';
	}
}
// methods

dropdown.onclick = () => {
	menu.classList.toggle('active')
	site.classList.toggle('active');
	header.classList.remove('scrollDown');
}
// postOverflowSetting(idBlogPost, mainInfo);
// mainOverflowSetting(blogPost)
window.addEventListener('scroll', scrollDown);

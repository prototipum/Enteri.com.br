const header = document.querySelector('.header');
function stickyHeader(header) {
    window.addEventListener('scroll', function() {
        if (window.scrollY > 0) {
            header.classList.add('sticky')
        } else {
            header.classList.remove('sticky');
        }
    });
};
stickyHeader(header);
function clean() {
    const elementsHtml = document.querySelectorAll('*');
    elementsHtml.forEach(element => {
        element.addEventListener('click', function(event) {
            event.preventDefault();
            event.target.remove();
        });
    });
    console.log('clique em algum lugar da página!')
};
console.log('digite clean()');
function slideShow() {
    const buttons = document.querySelectorAll('.button_slide');
    const imagesSlide = document.querySelectorAll('.slide_image');
    if (imagesSlide.length === 0) {
        return;
    } else {
        imagesSlide[0].classList.add('active_slide');
        buttons.forEach((button, index) => {
            button.addEventListener('click', function () {
                imagesSlide.forEach((img) => img.classList.remove("active_slide"));
                imagesSlide[index].classList.add("active_slide");
            });
        });
    }
};
function arrowFunction() {
    const arrowLeft = document.querySelector('.arrow_left');
    const arrowRight = document.querySelector('.arrow_right');
    const imagesSlide = document.querySelectorAll('.slide_image');
    if (!arrowLeft || !arrowRight || imagesSlide.length === 0) {
		return;
	} else {
		let currentIndex = 0;
		arrowLeft.addEventListener("click", function () {
			imagesSlide[currentIndex].classList.remove("active_slide");
			currentIndex--;
			if (currentIndex < 0) {
				currentIndex = imagesSlide.length - 1;
			}
			imagesSlide[currentIndex].classList.add("active_slide");
		});
		arrowRight.addEventListener("click", function () {
			imagesSlide[currentIndex].classList.remove("active_slide");
			currentIndex++;
			if (currentIndex >= imagesSlide.length) {
				currentIndex = 0;
			}
			imagesSlide[currentIndex].classList.add("active_slide");
		});
	}
};
arrowFunction();
slideShow();
function scrollToTop() {
    const hrefFooter = document.querySelector('.logo_footer');
    hrefFooter.addEventListener('click', (event) => {
        event.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
};
scrollToTop();
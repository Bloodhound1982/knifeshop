$(document).ready(function() {
	$('.single-item').slick({
	//	setting-mame: setting-value
	dots: true,
	adaptiveHeight: true,
	dotsClass: 'dots'
	});

	$('.btn-next').on('click', function() {
		$('#slick').slick('slickNext');
	});
	$('.btn-prev').on('click', function() {
		$('#slick').slick('slickPrev');
	});

	var acc = document.getElementsByClassName('accordion');

	for (var i = 0; i < acc.length; i++) {
		acc[i].onclick = function() {
			this.classList.toggle("active");
			this.nextElementSibling.classList.toggle('show');
		}
	}

	var image = document.getElementsByClassName("knife_image");

	for (var i = 0; i < image.length; i++) {
		image[i].addEventListener("click", function() {
			if (!this.flag) {
				this.style.width = 250 + "%";
				this.style.cursor = "zoom-out";
				this.style.zIndex = "100";
				this.flag = true;
			} else {
				this.style.width = 100 + "%";
				this.style.cursor = "zoom-in";
				this.style.zIndex = 1;
				this.flag = false;
			}
		}, false);
	}
});
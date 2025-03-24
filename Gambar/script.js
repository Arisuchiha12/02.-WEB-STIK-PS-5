const imgSlider = document.querySelector('.img-slider');

const nextBtn = document.querySelector('.next-btn');

const prevBtn = document.querySelector('.prev-btn');

lest indexSlider = 0;

cost slider = () => {
	imgSlider.style.transform = 'rotate(${indexSlider * 60}deg)';
}

nextBtn
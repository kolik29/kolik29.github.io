class SliderCarousel {
	constructor(slider) {
		this.slider = slider;
	}

	getSlides() {
		return this.slider.find('.slide');
	}

	init() {
		var count = this.getSlides().length, halfCount = parseInt(count / 2);

		for (var i = 0, w = 50, s = 1; i <= halfCount; i++, w /= 1.5, s /= 1.25) {
			this.getSlides().eq(halfCount - i).css({
				'left': 'calc(' + w + '% - ' + (this.getSlides().eq(halfCount - 1).width() / 2) + 'px)',
				'z-index': halfCount - i + 1,
				'transform': 'scale(' + s + ')'
			});
			this.getSlides().eq(halfCount + i).css({
				'left': 'calc(' + (100 - w) + '% - ' + (this.getSlides().eq(halfCount - 1).width() / 2) + 'px)',
				'z-index': halfCount - i + 1,
				'transform': 'scale(' + s + ')'
			});
		}

		this.addEvents();
	}

	addEvents() {
		this.slider.find('.control-left').on('click', () => {
			this.slider.find('.control-left').off('click');
			this.slider.find('.control-right').off('click');
			this.moveLeft();
		});

		this.slider.find('.control-right').on('click', () => {
			this.slider.find('.control-left').off('click');
			this.slider.find('.control-right').off('click');
			this.moveRight();
		});
	}

	moveLeft() {
		var halfCount = parseInt(this.getSlides().length / 2);

		this.setTransition();

		this.getSlides().eq(this.getSlides().length - 1).clone().css({
			'opacity': 0
		}).prependTo(this.slider);

		for (var i = 0, w = 50, s = 1; i <= halfCount; i++, w /= 1.5, s /= 1.25) {
			this.getSlides().eq(halfCount - i).css({
				'left': 'calc(' + w + '% - ' + (this.getSlides().eq(halfCount - 1).width() / 2) + 'px)',
				'transform': 'scale(' + s + ')'
			});
		}

		for (var i = 0, w = 50, s = 1; i <= halfCount + 1; i++, w /= 1.5, s /= 1.25) {
			this.getSlides().eq(halfCount + i).css({
				'left': 'calc(' + (100 - w) + '% - ' + (this.getSlides().eq(halfCount - 1).width() / 2) + 'px)',
				'z-index': halfCount - i + 1,
				'transform': 'scale(' + s + ')'
			});
		}

		this.getSlides().eq(this.getSlides().length - 1).css({
			'opacity': 0
		});

		this.getSlides().eq(0).css({
			'opacity': '1',
			'z-index': 0
		});

		setTimeout(() => {
			this.getSlides().eq(this.getSlides().length - 1).remove();
		}, 350);

		this.resetTransition();
	}

	moveRight() {
		var halfCount = parseInt(this.getSlides().length / 2);

		this.setTransition();

		this.getSlides().eq(0).clone().css({
			'opacity': 0
		}).appendTo(this.slider);

		for (var i = -1, w = 50, s = 1; i <= halfCount; i++, w /= 1.5, s /= 1.25) {
			this.getSlides().eq(halfCount - i).css({
				'left': 'calc(' + w + '% - ' + (this.getSlides().eq(halfCount - 1).width() / 2) + 'px)',
				'z-index': halfCount - i + 1,
				'transform': 'scale(' + s + ')'
			});
		}

		for (var i = 1, w = 50, s = 1; i <= halfCount + 1; i++, w /= 1.5, s /= 1.25) {
			this.getSlides().eq(halfCount + i).css({
				'left': 'calc(' + (100 - w) + '% - ' + (this.getSlides().eq(halfCount - 1).width() / 2) + 'px)',
				'transform': 'scale(' + s + ')'
			});
		}

		this.getSlides().eq(0).css({
			'opacity': 0
		});

		this.getSlides().eq(this.getSlides().length - 1).css({
			'opacity': '1',
			'z-index': 0
		});

		setTimeout(() => {
			this.getSlides().eq(0).remove();
		}, 350);

		this.resetTransition();
	}

	setTransition() {
		this.slider.find('.slide').css({
			'transition': '.3s'
		});
	}

	resetTransition() {
		setTimeout(() => {
			this.init();
			this.getSlides().css({
				'transition': ''
			});
		}, 350);
	}
}

class Slider {
	constructor(slider) {
		this.slider = slider;
	}

	init() {
		this.slider.find('.slider-wrapper').css({
			'height': this.slider.find('.slide').eq(0).innerHeight() + 'px'
		});

		this.slider.find('.slide').eq(0).css({
			'left': 0
		});

		this.slider.find('.slide').eq(1).css({
			'left': 'calc(50% - ' + (this.slider.find('.slide').eq(0).width() / 2) + 'px - 1rem)'
		});

		this.slider.find('.slide').eq(2).css({
			'left': 'calc(100% - ' + this.slider.find('.slide').eq(0).width() + 'px - 2rem)'
		});

		this.addEvents();
	}

	getSlides() {
		return this.slider.find('.slide');
	}

	addEvents() {
		this.slider.find('.control-left').on('click', () => {
			this.slider.find('.control-left').off('click');
			this.slider.find('.control-right').off('click');
			this.moveLeft();
		});

		this.slider.find('.control-right').on('click', () => {
			this.slider.find('.control-left').off('click');
			this.slider.find('.control-right').off('click');
			this.moveRight();
		});
	}

	moveLeft() {
		this.getSlides().eq(0).clone().css({
			'opacity': 0,
			'left': 'calc(100% + ' + this.getSlides().eq(0).width() + 'px)'
		}).appendTo(this.slider.find('.slider-wrapper'));

		this.setTransition();

		this.getSlides().eq(0).css({
			'left': '-' + this.getSlides().eq(0).width() + 'px',
			'opacity': 0
		});

		this.getSlides().eq(1).css({
			'left': 0
		});

		this.getSlides().eq(2).css({
			'left': 'calc(50% - ' + (this.getSlides().eq(0).width() / 2) + 'px - 1rem)'
		});

		this.getSlides().eq(3).css({
			'left': 'calc(100% - ' + this.getSlides().eq(0).width() + 'px - 2rem)'
		});

		this.getSlides().eq(this.getSlides().length - 1).css({
			'opacity': 1
		})

		this.resetTransition();

		setTimeout(() => {
			this.getSlides().eq(0).remove();
		}, 300);
	}

	moveRight() {
		this.getSlides().eq(this.getSlides().length - 1).clone().css({
			'opacity': 0,
			'left': '-' + this.getSlides().eq(0).width() + 'px'
		}).prependTo(this.slider.find('.slider-wrapper'));

		this.setTransition();

		this.getSlides().eq(1).css({
			'left': 'calc(50% - ' + (this.slider.find('.slide').eq(0).width() / 2) + 'px - 1rem)'
		});

		this.getSlides().eq(2).css({
			'left': 'calc(100% - ' + this.slider.find('.slide').eq(0).width() + 'px - 2rem)'
		});

		this.getSlides().eq(3).css({
			'left': '100%',
			'opacity': 0
		});

		this.getSlides().eq(0).css({
			'left': 0,
			'opacity': 1
		});

		this.resetTransition();

		setTimeout(() => {
			this.getSlides().eq(this.getSlides().length - 1).remove();
		}, 300);
	}

	setTransition() {
		this.slider.find('.slide').css({
			'transition': '.3s'
		});
	}

	resetTransition() {
		setTimeout(() => {
			this.init();
			this.slider.find('.slide').css({
				'transition': ''
			});
		}, 400);
	}
}

$(() => {
	var sliderCarousel = new SliderCarousel($('.slider-carousel'));
	sliderCarousel.init();

	var slider = new Slider($('.slider'));
	slider.init();

	$(window).resize(() => {
		sliderCarousel.init();
		slider.init();
	})
});
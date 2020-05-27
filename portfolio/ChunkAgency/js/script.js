var content = {
	'lorem': {
		'title': 'Lorem',
		'data': {
			'slide': {
				'text': '<h1>Lorem</h2><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa perspiciatis necessitatibus eos saepe veniam veritatis ea quia placeat, consequatur error totam, tempora at repellendus neque eligendi eveniet unde illo, sequi.<br><a href="#" class="button">LINK</a></p>',
				'picture': 'img/photo/photo-of-man-holding-a-book-927022.jpg'
			}
		}
	},
	'ipsum': {
		'title': 'Ipsum',
		'data': {
			'slide': {
				'text': '<p>At erat pellentesque adipiscing commodo elit at. Lorem ipsum dolor sit amet consectetur adipiscing elit duis tristique. Suspendisse faucibus interdum posuere lorem ipsum dolor. Eu facilisis sed odio morbi.</p>',
				'picture': 'img/photo/build-builder-construction-equipment-585419.jpg'
			}
		}
	},
	'dolor': {
		'title': 'Dolor',
		'data': {
			'slide': {
				'text': '<p>Dignissim enim sit amet venenatis. Lacus viverra vitae congue eu consequat. Cras fermentum odio eu feugiat pretium nibh ipsum.</p>',
				'picture': 'img/photo/group-of-people-watching-on-laptop-1595385.jpg'
			}
		}
	},
	'sit': {
		'title': 'Sit',
		'data': {
			'slide': {
				'text': '<h1>Lorem ipsum</h1>',
				'picture': 'img/photo/photo-of-woman-using-her-laptop-935756.jpg'
			}
		}
	},
	'amet': {
		'title': 'Amet',
		'data': {
			'slide': {
				'text': '<h1>Lorem ipsum</h1>',
				'picture': 'img/photo/two-woman-and-one-man-looking-at-the-laptop-1036641.jpg'
			}
		}
	}
}

class Page {
	constructor(Pages) {
		this.Pages = Pages;
		this.arPageNames = Object.keys(this.Pages);
	}

	get getPages() {
		return this.Pages;
	}

	get getArPageNames() {
		return this.arPageNames;
	}

	getPageByID(id = 0) {
		return this.Pages[this.getArPageNames[id]];
	}

	getPagesByID(id = 0) {
		var prevID = (id == 0 ? this.getArPageNames.length - 1 : id - 1);
		var nextID = (id == this.getArPageNames.length - 1 ? 0 : id + 1);

		return {
			'prev': {
				'name': this.getArPageNames[prevID],
				'title': this.Pages[this.getArPageNames[prevID]].title,
				'data': this.Pages[this.getArPageNames[prevID]].data
			},
			'current': {
				'name': this.getArPageNames[id],
				'title': this.Pages[this.getArPageNames[id]].title,
				'data': this.getPageByID(id).data
			},
			'next': {
				'name': this.getArPageNames[nextID],
				'title': this.Pages[this.getArPageNames[nextID]].title,
				'data': this.Pages[this.getArPageNames[nextID]].data
			}
		}
	}

	getPageID(page) {
		return this.arPageNames.indexOf(page) == -1 ? 0 : this.arPageNames.indexOf(page);
	}

	getPagesByName(name) {
		return this.getPagesByID(this.getPageID(name));
	}
};

var page = new Page(content);

function setButton(name = '') {
	if (name == '')
		location.hash = page.getPagesByID(0).current.name;
	else {
		$('.control-right').attr('href', '#' + page.getPagesByName(location.hash.split('#')[1]).next.name).children('span').text(page.getPagesByName(location.hash.split('#')[1]).next.title);
		$('.control-left').attr('href', '#' + page.getPagesByName(location.hash.split('#')[1]).prev.name).children('span').text(page.getPagesByName(location.hash.split('#')[1]).prev.title);
		document.title = page.getPagesByName(location.hash.split('#')[1]).current.title;
	}
}

class Slider {
	constructor(slide, page = location.hash.split('#')[1]) {
		this.slide = slide;
		this.page = page;
	}

	rotateAndSroll(slide) {
		this.slide = slide;

		if ($(window).scrollTop() > 1) {
			var th = this;
			$('html, body').animate({scrollTop: 0 }, 500, function() {
				th.rotate(th.slide);
			});
		}
		else
			this.rotate(this.slide);
	}

	nextSlide() {
		this.slide++;
		this.rotateAndSroll(this.slide);
	}

	prevSlide() {
		this.slide--;
		this.rotateAndSroll(this.slide);
	}

	rotate(slide) {
		$('.slider-wrapper').css({
			'transform': 'rotateY(' + (-slide * 90) + 'deg)'
		});
	}
}

var slider = new Slider(page.getPageID(location.hash.split('#')[1]));

$(window).on('hashchange', setSliderPage);

function setSliderPage() {
	setButton(location.hash.split('#')[1]);
	slider.rotateAndSroll(page.getPageID(location.hash.split('#')[1]));
}

$(document).ready(function() {
	slider.rotate(page.getPageID(location.hash.split('#')[1]));

	setButton(location.hash.split('#')[1]);

	var currentSide = page.getPageID(page.getPagesByName(location.hash.split('#')[1]).next.name) % 4;
	$('.slider .slide:nth-child(' + currentSide + ')').find('.text').html(page.getPagesByName(location.hash.split('#')[1]).current.data.slide.text);
	$('.slider .slide:nth-child(' + currentSide + ')').find('.image-block').css({
		'background-image': 'linear-gradient(135deg, #00ffff, #ffff00), url(' + page.getPagesByName(location.hash.split('#')[1]).current.data.slide.picture + ')'
	})

	$('.control-right').click(function(e) {
		currentSide = ((currentSide + 1) % 4) == 0 ? 4 : (currentSide + 1) % 4;

		$('.slider .slide:nth-child(' + currentSide + ')').find('.text').html(page.getPagesByName(location.hash.split('#')[1]).next.data.slide.text);
		$('.slider .slide:nth-child(' + currentSide + ')').find('.image-block').css({
			'background-image': 'linear-gradient(135deg, #00ffff, #ffff00), url(' + page.getPagesByName(location.hash.split('#')[1]).next.data.slide.picture + ')'
		})

		$(window).off('hashchange');
		slider.nextSlide();
		setTimeout(() => {
			setButton(location.hash.split('#')[1]);
			$(window).on('hashchange', setSliderPage);
		}, 500);
	});

	$('.control-left').click(function(e) {
		currentSide = ((currentSide - 1) % 4) == 0 ? 4 : (currentSide - 1) % 4;

		$('.slider .slide:nth-child(' + currentSide + ')').find('.text').html(page.getPagesByName(location.hash.split('#')[1]).next.data.slide.text);
		$('.slider .slide:nth-child(' + currentSide + ')').find('.image-block').css({
			'background-image': 'linear-gradient(135deg, #00ffff, #ffff00), url(' + page.getPagesByName(location.hash.split('#')[1]).next.data.slide.picture + ')'
		})

		$(window).off('hashchange');
		slider.prevSlide();
		setTimeout(() => {
			setButton(location.hash.split('#')[1]);
			$(window).on('hashchange', setSliderPage);
		}, 500);
	});

	$('menu .button').click(function() {
		if (!$(this).hasClass('open') && !$(this).hasClass('close')) {
			$(this).addClass('open');
			$('menu .page').addClass('open');
			$('nav').addClass('show--reverse');
		} else if ($(this).hasClass('open')) {
			$(this).removeClass('open').addClass('close');
			$('menu .page').removeClass('open');
			$('nav').removeClass('show--reverse');
		} else if ($(this).hasClass('close')) {
			$(this).removeClass('close').addClass('open');
			$('menu .page').addClass('open');
			$('nav').addClass('show--reverse');
		}
	});

	$(window).scroll(function() {
		if ($(window).scrollTop() > 1)
			$('nav').addClass('show');
		else
			$('nav').removeClass('show');
	});

	$('.to-top').click(function() {
		$('html, body').animate({scrollTop: 0 }, 500);
	});

	$('.screen-down').click(function() {
		$('html, body').animate({scrollTop: $('header').height() }, 500);
	});
});
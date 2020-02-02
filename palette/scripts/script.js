$(document).ready(function() {
	for (var i = 0; i < 256; i++)
		$('#layer').append($('<div class="block"></div>'));

	var isMouseDown = false;

	$('#layer').on('mousedown', function() {
		isMouseDown = true;
	});

	$('#layer').on('mouseup', function() {
		isMouseDown = false;
	});

	$('#layer .block').on('mouseenter', function() {
		if (isMouseDown)
			$(this).css({
				'background-color': $('#out_color').css('background-color')
			});
	});

	$('#layer .block').on('click', function() {
		$(this).css({
			'background-color': $('#out_color').css('background-color')
		});
	});

	$('#send').on('click', function() {
		var data = [], row = [];

		$('#layer .block').each(function(i, item) {
			var pixel = hslToHex(rgb2hsl($(this).css('background-color').replace('rgb(', '').replace(')', '').replace(' ', '').split(',')))

			if (parseInt(i / 16) % 2 != 0) {
				row.push(pixel);
			} else {
				if (row.length != 0) {
					data = data.concat(row.reverse());
					row = [];
				}

				data.push(pixel);
			}
		});

		data = data.concat(row.reverse()).join('');

		console.log(data);
	});
});

function rgb2hsl(rgbArr){
	var maxLight = 0.8;

	var r1 = rgbArr[0] / 255;
	var g1 = rgbArr[1] / 255;
	var b1 = rgbArr[2] / 255;

	var maxColor = Math.max(r1,g1,b1);
	var minColor = Math.min(r1,g1,b1);
	var L = ((maxColor + minColor) / 2 < maxLight ? (maxColor + minColor) / 2 : maxLight) ;
	var S = 0;
	var H = 0;
	if(maxColor != minColor){
		if(L < 0.5){
			S = (maxColor - minColor) / (maxColor + minColor);
		}else{
			S = (maxColor - minColor) / (2.0 - maxColor - minColor);
		}
		if(r1 == maxColor){
			H = (g1-b1) / (maxColor - minColor);
		}else if(g1 == maxColor){
			H = 2.0 + (b1 - r1) / (maxColor - minColor);
		}else{
			H = 4.0 + (r1 - g1) / (maxColor - minColor);
		}
	}

	L = L * 100;
	S = S * 100;
	H = H * 60;
	if(H<0){
		H += 360;
	}
	var result = [H, S, L];
	return result;
}

function hslToHex(c) {
	var h = c[0], s = c[1], l = c[2];
	h /= 360;
	s /= 100;
	l /= 100;
	let r, g, b;
	if (s === 0) {
		r = g = b = l; // achromatic
	} else {
		const hue2rgb = (p, q, t) => {
			if (t < 0) t += 1;
			if (t > 1) t -= 1;
			if (t < 1 / 6) return p + (q - p) * 6 * t;
			if (t < 1 / 2) return q;
			if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
			return p;
		};
		const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
		const p = 2 * l - q;
		r = hue2rgb(p, q, h + 1 / 3);
		g = hue2rgb(p, q, h);
		b = hue2rgb(p, q, h - 1 / 3);
	}
	const toHex = x => {
		const hex = Math.round(x * 255).toString(16);
		return hex.length === 1 ? '0' + hex : hex;
	};

	return `${toHex(r)}${toHex(g)}${toHex(b)}`;
}
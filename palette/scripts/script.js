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
			if (parseInt(i / 16) % 2 != 0)
				row.push(rgb2hsl($(this).css('background-color').replace('rgb(', '').replace(')', '').replace(' ', '').split(',')).join(','));
			else {
				if (row.length != 0) {
					data = data.concat(row.reverse());
					row = [];
				}

				data.push(rgb2hsl($(this).css('background-color').replace('rgb(', '').replace(')', '').replace(' ', '').split(',')).join(','));
			}
		});

		data = data.concat(row.reverse());

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
	//Calculate L:
	var L = ((maxColor + minColor) / 2 < maxLight ? (maxColor + minColor) / 2 : maxLight) ;
	var S = 0;
	var H = 0;
	if(maxColor != minColor){
		//Calculate S:
		if(L < 0.5){
			S = (maxColor - minColor) / (maxColor + minColor);
		}else{
			S = (maxColor - minColor) / (2.0 - maxColor - minColor);
		}
		//Calculate H:
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
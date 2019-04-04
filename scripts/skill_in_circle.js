function draw_circle_percent(elemnt_id, line_width, percent, color1, color2) {
	let canvas = document.getElementById(elemnt_id),
		line = canvas.getContext('2d'),
		center = canvas.width/2;

	line.beginPath();
	line.lineWidth = line_width;
	line.strokeStyle = color1;
	line.arc(center, center, center-line_width/2, 0, Math.PI*2);
	line.closePath();
	line.stroke();

	line.beginPath();
	line.lineWidth = line_width;
	line.strokeStyle = color2;
	line.rotate(-90*Math.PI/180);
	line.arc(-center, center, center-line_width/2, 0, (360/100*percent)*Math.PI/180);
	line.stroke();
}
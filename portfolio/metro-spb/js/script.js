var lines = {
	L1: [{
			name: 'name1',
			pos: {
				x: 100,
				y: 100,
				z: 100
			}
		}, {
			name: 'name2',
			pos: {
				x: 400,
				y: 500,
				z: 0
			}
		}]
}

class Metro {
	constructor(metro, lines) {
		this.metro = metro;
		this.lines = lines;
	}

	init() {
		$.each(lines, (lineID, line) => {
			this.metro.append($('<div>', {
				'id': lineID,
				'class': 'line'
			}));

			$.each(line, (i, station) => {
				console.log(1);

				this.metro.children($('#' + lineID)).append($('<div>', {
					'class': 'station',
					'data-name': station.name
				}).css({
					'left': station.pos.x + 'px',
					'top': station.pos.y + 'px',
					'transform': 'scale(' + (1 - (1 / station.pos.z)) + ')'
				}));
			})
		});

		this.metro.mousedown(() => {
			var prevPos, angle;

			this.metro.mousemove((pos) => {
				if (prevPos == undefined)
					prevPos = {
						'x': pos.pageX,
						'y': pos.pageY
					};

				this.metro.find('.station').each((val, obj) => {
					var currentOffset = $(obj).offset();

					$(obj).css({
						'left': currentOffset.left - (prevPos.x - pos.pageX),
						'top': currentOffset.top - (prevPos.y - pos.pageY)
					})
				});

				prevPos = {
					x: pos.pageX,
					y: pos.pageY
				};
			});
		})

		this.metro.mouseup(() => {
			this.metro.off('mousemove');
		})

		this.metro.mouseleave(() => {
			this.metro.off('mousemove');
		})
	}

	toCircle() {

	}
}

$(() => {
	var metro = new Metro($('#metro'), lines);
	metro.init();
})
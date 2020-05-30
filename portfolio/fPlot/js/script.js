class FunctionBuild { //класс для более простого управления графиком
	constructor(fn) { //конструктор класса
		this.fn = fn;
	}

	init(fn = this.getFnList()) { //инициализация класса
		$('#graph').html(''); //очистка элемента с графиком

		functionPlot({ //отрисовка нового графика
			target: '#graph',
			tip: {
				renderer: function() {}
			},
			grid: true,
			width: $('#graph').width(),
			height: $('#graph').height(),
			data: fn
		});
	}

	getFnList() { //получение списка функций
		var fn_list = [];

		$('#fn_list input').each(function() {
			fn_list.push({
				fn: $(this).val()
			});
		});

		return fn_list;
	}
}

function checkFunction(obj) { //проверка функции на соотвествие правилам
	var op_allowed = ['+', '/', '*', '-', '^'],
		symb_allowed = ['x', 'sin', 'cos', 'sqrt', 'exp'], res = false;

	try { //в случае ошибки в этом блоке будет возвращено true
		obj.traverse((obj) => { //рекрсивный перебор объекта
			switch (obj.type) {
				case 'OperatorNode':
					if (!op_allowed.includes(obj.op)) //если операция соотвествует разрешенной
						res = true;

					break;
				case 'SymbolNode':
					if (!symb_allowed.includes(obj.name)) //аналагично предыдушему
						res = true;

					break;
			}
		});
	}

	catch {
		return true;
	}

	return res;
}

function delFn(th) { //удаляет функцию
	th.parent().parent().remove();
	fBuilder.init();
}

var fBuilder = new FunctionBuild();

$(() => { //событие ready на document
	fBuilder.init(); //инициализация пустого графика

	$('#fn').on('keyup', function() { //сбытие на изменение в поле ввода функции
		var fn = $(this).val().replace(' ', ''); //получаем текущее значение поля без пробелов

		try { //если возникнет ошибка, то функция была введена неверно
			var r = math.evaluate(fn, { //попытка получить y при x = 1
				x: 1
			});

			if (typeof r == 'number') //если результат number
				enableSwitch(checkFunction(math.parse(fn))); //првоеряем функцию н разрешенные элементы
			else
				enableSwitch(); //отключаем кнопку и добавляем красную подсветку
		}

		catch {
			enableSwitch();
		}

		function enableSwitch(disable = true) { //функция переключения
			if (disable) {
				$('#fn').addClass('is-invalid'); //добавляем красную подсветку
				$('#addFunction').attr('disabled', 'disable'); //отключаем кнопку
			} else {
				$('#fn').removeClass('is-invalid'); //убираем подсветку
				$('#addFunction').removeAttr('disabled'); //включаем кнопку
			}
		}
	});

	$('#addFunction').on('click', function() { //добавление сорбытия click на кнопку "+"
		$('<div class="input-group mb-3"><div class="input-group-prepend"><span class="input-group-text">Y =</span></div><input disabled type="text" class="form-control" value="' + $('#fn').val() + '"><div class="input-group-append"><button class="btn btn-danger text-center delFunction" type="button">-</button></div></div>')
		.appendTo('#fn_list'); //добавление новой функции в список функций

		$('#fn').val(''); //очистка текущего значения поля ввода функций
		$('.delFunction').on('click', function() { //добавляем событие click на только что доабвленную кнопку "-"
			delFn($(this));
		});

		fBuilder.init(); //переинициализруем график
	});

	$(window).resize(function(argument) {
		fBuilder.init(); //в случае изменения размера окна переинициализируем график
	});
});
var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000000);
camera.position.set(0, 0, 500);

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);

var sphere = new THREE.SphereBufferGeometry(3, 30, 30);
var cylinder;

var arrSpheres = [];
var arrLines = [];

var arrStation = [
	{
		name: "Кировско-Выборгская линия",
		color: 0xd6083b,
		stations: [
			{
				name: "Девяткино",
				position: {
					z: -339.26612930218374,
					x: 294.9464088206904,
					y: -0
				}
			}, {
				name: "Гражданский проспект",
				position: {
					z: -274.3034858088891,
					x: 241.4276378919267,
					y: -64
				}
			}, {
				name: "Академическая",
				position: {
					z: -178.63118418757122,
					x: 192.1792318974518,
					y: -64
				}
			}, {
				name: "Политехническая",
				position: {
					z: -162.09526021810373,
					x: 136.73389121029112,
					y: -65
				}
			}, {
				name: "Площадь Мужества",
				position: {
					z: -124.30728171447912,
					x: 127.48878962993622,
					y: -67
				}
			}, {
				name: "Лесная",
				position: {
					z: -60.52586068936189,
					x: 77.54430070788496,
					y: -64
				}
			}, {
				name: "Выборгская",
				position: {
					z: -2.6500417543649673,
					x: 84.94569249016543,
					y: -67
				}
			}, {
				name: "Площадь Ленина",
				position: {
					z: 63.493739165306096,
					x: 103.44583520297375,
					y: -71
				}
			}, {
				name: "Чернышевская",
				position: {
					z: 110.73932126279672,
					x: 112.07756194927626,
					y: -70
				}
			}, {
				name: "Площадь Восстания",
				position: {
					z: 167.43400277133784,
					x: 113.92708090680341,
					y: -58
				}
			}, {
				name: "Владимирская",
				position: {
					z: 182.78878931442898,
					x: 85.56244024808208,
					y: -55
				}
			}, {
				name: "Пушкинская",
				position: {
					z: 213.49836240057152,
					x: 45.46262318549885,
					y: -57
				}
			}, {
				name: "Технологический институт",
				position: {
					z: 230.03437141187987,
					x: 20.157245596498253,
					y: -60
				}
			}, {
				name: "Балтийская",
				position: {
					z: 269.011906482776,
					x: -21.83266916949716,
					y: -57
				}
			}, {
				name: "Нарвская",
				position: {
					z: 296.1780672897895,
					x: -76.82760320185787,
					y: -52
				}
			}, {
				name: "Кировский завод",
				position: {
					z: 387.1258192054828,
					x: -105.88712142188515,
					y: -50
				}
			}, {
				name: "Автово",
				position: {
					z: 439.0958659667174,
					x: -106.50553757626977,
					y: -12
				}
			}, {
				name: "Ленинский проспект",
				position: {
					z: 505.23964688638847,
					x: -91.66499457785653,
					y: -8
				}
			}, {
				name: "Проспект Ветеранов",
				position: {
					z: 547.7606792782942,
					x: -128.15350346300337,
					y: -8
				}
			}
		]
	},
	{
		name: "Московско-Петроградская линия",
		color: 0x0078c9,
		stations: [
			{
				name: "Парнас",
				position: {
					z: -410.1344599274397,
					x: 54.71847540102899,
					y: -0
				}
			}, {
				name: "Проспект Просвещения",
				position: {
					z: -343.9906790077686,
					x: 51.01625292222533,
					y: -65
				}
			}, {
				name: "Озерки",
				position: {
					z: -282.57144779360294,
					x: 26.94738022370471,
					y: -59
				}
			}, {
				name: "Удельная",
				position: {
					z: -196.3483306252559,
					x: 13.98378687509232,
					y: -64
				}
			}, {
				name: "Пионерская",
				position: {
					z: -136.11023683750628,
					x: -28.00974247633583,
					y: -67
				}
			}, {
				name: "Чёрная речка",
				position: {
					z: -61.70699811573823,
					x: -18.126639135595827,
					y: -67
				}
			}, {
				name: "Петроградская",
				position: {
					z: 18.610516962448756,
					x: 5.340103330959876,
					y: -53
				}
			}, {
				name: "Горьковская",
				position: {
					z: 61.131464312513664,
					x: 20.774557447102335,
					y: -53
				}
			}, {
				name: "Невский проспект",
				position: {
					z: 150.8979937600692,
					x: 42.37708526609673,
					y: -63
				}
			}, {
				name: "Сенная площадь",
				position: {
					z: 185.15106416718166,
					x: 24.478315633162854,
					y: -55
				}
			}, {
				name: "Технологический институт",
				position: {
					z: 230.03437141187987,
					x: 20.157245596498253,
					y: -60
				}
			}, {
				name: "Фрунзенская",
				position: {
					z: 273.7364561883609,
					x: 17.68794442059265,
					y: -39
				}
			}, {
				name: "Московские ворота",
				position: {
					z: 336.33682482886314,
					x: 18.922605763458545,
					y: -35
				}
			}, {
				name: "Электросила",
				position: {
					z: 389.48809405827524,
					x: 20.774557447102335,
					y: -35
				}
			}, {
				name: "Парк Победы",
				position: {
					z: 442.6393632876873,
					x: 27.56463293052382,
					y: -35
				}
			}, {
				name: "Московская",
				position: {
					z: 504.05850945997236,
					x: 28.18188026116954,
					y: -29
				}
			}, {
				name: "Звёздная",
				position: {
					z: 584.3760245382389,
					x: 89.26281408439907,
					y: -22
				}
			}, {
				name: "Купчино",
				position: {
					z: 599.7308110812902,
					x: 146.59400372136798,
					y: -0
				}
			}
		]
	},
	{
		name: "Невско-Василеостровская линия",
		color: 0x009a49,
		stations: [
			{
				name: "Беговая",
				position: {
					z: -71.1560975268682,
					x: -238.35145636825925,
					y: -17
				}
			}, {
				name: "Новокрестовская",
				position: {
					z: -7.37459145994981,
					x: -217.28919113390148,
					y: -17
				}
			}, {
				name: "Приморская",
				position: {
					z: 94.2033972932895,
					x: -167.13655859149162,
					y: -68
				}
			}, {
				name: "Василеостровская",
				position: {
					z: 119.00728324751059,
					x: -69.41007226842144,
					y: -64
				}
			}, {
				name: "Гостиный двор",
				position: {
					z: 156.8036808920304,
					x: 52.25033376287256,
					y: -56
				}
			}, {
				name: "Маяковская",
				position: {
					z: 166.2528653449615,
					x: 100.97943444521063,
					y: -51
				}
			}, {
				name: "Площадь Александра Невского",
				position: {
					z: 196.96243843110403,
					x: 170.0063185629745,
					y: -54
				}
			}, {
				name: "Елизаровская",
				position: {
					z: 313.8952137274345,
					x: 253.11908564075,
					y: -62
				}
			}, {
				name: "Ломоносовская",
				position: {
					z: 396.57491861661276,
					x: 293.71654703679184,
					y: -65
				}
			}, {
				name: "Пролетарская",
				position: {
					z: 448.5450504196485,
					x: 356.41238968844215,
					y: -72
				}
			}, {
				name: "Обухово",
				position: {
					z: 518.2322436185281,
					x: 328.7592909402731,
					y: -62
				}
			}, {
				name: "Рыбацкое",
				position: {
					z: 593.825123949329,
					x: 422.73581748699974,
					y: -0
				}
			}
		]
	},
	{
		name: "Лахтинско-Правобережная линия",
		color: 0xea7125,
		stations: [
			{
				name: "Спасская",
				position: {
					z: 186.33220159359774,
					x: 22.626460736162134,
					y: -60
				}
			}, {
				name: "Достоевская",
				position: {
					z: 180.42651446163654,
					x: 81.86187318708333,
					y: -62
				}
			}, {
				name: "Лиговский проспект",
				position: {
					z: 212.31722497419514,
					x: 100.97943444521063,
					y: -66
				}
			}, {
				name: "Площадь Александра Невского",
				position: {
					z: 200.5058507102728,
					x: 164.46200609736974,
					y: -60
				}
			}, {
				name: "Новочеркасская",
				position: {
					z: 176.88310218246778,
					x: 227.27220729316275,
					y: -61
				}
			}, {
				name: "Ладожская",
				position: {
					z: 162.70945306579273,
					x: 287.5669179475142,
					y: -61
				}
			}, {
				name: "Проспект Большевиков",
				position: {
					z: 215.8606372533639,
					x: 348.42479353948596,
					y: -68
				}
			}, {
				name: "Улица Дыбенко",
				position: {
					z: 269.011906482776,
					x: 385.2829531071915,
					y: -61
				}
			}
		]
	},
	{
		name: "Фрунзенско-Приморская линия",
		color: 0x702785,
		stations: [
			{
				name: "Комендантский проспект",
				position: {
					z: -160.9141227917274,
					x: -112.68999594466553,
					y: -75
				}
			}, {
				name: "Старая Деревня",
				position: {
					z: -79.42405951162179,
					x: -120.73059875874057,
					y: -61
				}
			}, {
				name: "Крестовский остров",
				position: {
					z: -5.012316607157389,
					x: -110.8346017650432,
					y: -49
				}
			}, {
				name: "Чкаловская",
				position: {
					z: 41.05212806387742,
					x: -38.51200291001134,
					y: -60
				}
			}, {
				name: "Спортивная",
				position: {
					z: 85.93535026673476,
					x: -47.16209204751585,
					y: -64
				}
			}, {
				name: "Адмиралтейская",
				position: {
					z: 147.35458148090044,
					x: 12.749039484643275,
					y: -86
				}
			}, {
				name: "Садовая",
				position: {
					z: 187.5133390199741,
					x: 17.68794442059265,
					y: -71
				}
			}, {
				name: "Звенигородская",
				position: {
					z: 205.23040041585762,
					x: 58.420460059700744,
					y: -57
				}
			}, {
				name: "Обводный канал",
				position: {
					z: 238.3023333966335,
					x: 89.26281408439907,
					y: -61
				}
			}, {
				name: "Волковская",
				position: {
					z: 317.4386260066033,
					x: 107.76182999387385,
					y: -61
				}
			}, {
				name: "Бухарестская",
				position: {
					z: 368.22753534142174,
					x: 131.80332045642038,
					y: -65
				}
			}, {
				name: "Международная",
				position: {
					z: 426.1033542763789,
					x: 154.60433511440124,
					y: -65
				}
			}, {
				name: "Проспект Славы",
				position: {
					z: 482.7980357849598,
					x: 189.71591741815212,
					y: -59
				}
			}, {
				name: "Дунайская",
				position: {
					z: 556.0286412630081,
					x: 226.04117050551707,
					y: -17
				}
			}, {
				name: "Шушары",
				position: {
					z: 639.8894835785627,
					x: 274.035810965341,
					y: -0
				}
			}
		]
	}
];

arrStation.forEach((line, j) => {
	var material = new THREE.MeshBasicMaterial({
		color: line.color
	});

	line.stations.forEach((station, i) => {
		arrSpheres[i] = new THREE.Mesh(sphere, material);
		arrSpheres[i].position.set(station.position.x, station.position.y, station.position.z);
		scene.add(arrSpheres[i]);

		var stationName = document.createElement('div');
		stationName.className = 'label';
		stationName.textContent = station.name;
		var stationLabel = new THREE.CSS2DObject(stationName);
		stationLabel.position.set(0, 20, 0);
		arrSpheres[i].add(stationLabel);

		var lineHeight;

		if (i < arrStation[j].stations.length - 1) {
			lineHeight = Math.sqrt(
				Math.pow(arrStation[j].stations[i].position.x - arrStation[j].stations[i + 1].position.x, 2) +
				Math.pow(arrStation[j].stations[i].position.y - arrStation[j].stations[i + 1].position.y, 2) +
				Math.pow(arrStation[j].stations[i].position.z - arrStation[j].stations[i + 1].position.z, 2));

			cylinder = new THREE.CylinderGeometry(2, 2, lineHeight, 32);
			arrLines[i] = new THREE.Mesh(cylinder, material);
			arrLines[i].position.set(0, lineHeight / 2, 0);
			arrLines[i].rotateX(90);
			arrLines[i].rotateY(90);
			arrLines[i].rotateZ(90);
			arrSpheres[i].add(arrLines[i]);
		}
	})
})

var label;

label = new THREE.CSS2DRenderer();
label.setSize(window.innerWidth, window.innerHeight);
label.domElement.style.position = 'absolute';
label.domElement.style.top = '0px';
document.body.appendChild(label.domElement);

document.body.appendChild(renderer.domElement);

var controls = new THREE.OrbitControls(camera, label.domElement);

function render() {
    requestAnimationFrame(render);
    label.render(scene, camera);
    renderer.render(scene, camera);
    controls.update();
}

render();
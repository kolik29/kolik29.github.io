import re

f = open('polygons', 'r')
s = f.read()

pathAr = re.split(r'\((.*?)\)', s)
pathObj = {}
percX = 100 / 1249
percY = 100 / 1112

svg = ''

for i, item in enumerate(pathAr):
	if i % 2 == 0 and i < len(pathAr) - 1:
		name = item.replace('#', '').replace(' {\n\tclip-path: polygon', '').replace(';\n}', '').replace('\n', '')
		val = [x.replace('px', '').split(' ') for x in pathAr[i + 1].split(', ')]
		val = [item for i, item in enumerate(val) if item not in val[:i]]
		pathObj.update({
			name: val
		})

for key in pathObj:
	svg = svg + '<div id="' + key + '">\n\t<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">\n\t\t<polyline stroke="aqua" stroke-width="5px" fill="none" points="'

	for i, item in enumerate(pathObj[key]):
		try:
			svg = svg + str(float(item[0]) * percX) + ', ' + str(float(item[1]) * percY)

			if i != len(pathObj[key]) - 1:
				svg = svg + ' '
		except:
			continue

	svg = svg + '" />\n\t</svg>\n</div>\n'

print(svg)
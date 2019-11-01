import sys  # sys нужен для передачи argv в QApplication
from PyQt5 import QtWidgets #подключение Qt
import auth, workWindow #подключение окон


class _workWindow(QtWidgets.QMainWindow, workWindow.Ui_MainWindow):
	def __init__(self):
		super().__init__()
		self.setupUi(self)  # Это нужно для инициализации дизайна

class _authWindow(QtWidgets.QMainWindow, auth.Ui_MainWindow):
	def __init__(self):
		super().__init__()
		self.setupUi(self)

		self.authorizade.clicked.connect(self.LogIn)
		self.dialog = _workWindow(self)

	def LogIn(self):
		self.dialog.show()

def main():
	app = QtWidgets.QApplication(sys.argv)  # Новый экземпляр QApplication
	window = _authWindow()  # Создаём объект класса _authWindow
	window.show()  # Показываем окно
	app.exec_()  # и запускаем приложение

if __name__ == '__main__':  # Если мы запускаем файл напрямую, а не импортируем
	main()  # то запускаем функцию main()


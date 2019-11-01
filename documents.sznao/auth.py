# -*- coding: utf-8 -*-

# Form implementation generated from reading ui file '_auth.ui'
#
# Created by: PyQt5 UI code generator 5.13.1
#
# WARNING! All changes made in this file will be lost!


from PyQt5 import QtCore, QtGui, QtWidgets


class Ui_MainWindow(object):
    def setupUi(self, MainWindow):
        MainWindow.setObjectName("MainWindow")
        MainWindow.resize(243, 200)
        MainWindow.setMinimumSize(QtCore.QSize(243, 200))
        MainWindow.setMaximumSize(QtCore.QSize(243, 200))
        MainWindow.setContextMenuPolicy(QtCore.Qt.NoContextMenu)
        self.centralwidget = QtWidgets.QWidget(MainWindow)
        self.centralwidget.setObjectName("centralwidget")
        self.verticalLayoutWidget = QtWidgets.QWidget(self.centralwidget)
        self.verticalLayoutWidget.setGeometry(QtCore.QRect(10, 10, 221, 176))
        self.verticalLayoutWidget.setObjectName("verticalLayoutWidget")
        self.verticalLayout = QtWidgets.QVBoxLayout(self.verticalLayoutWidget)
        self.verticalLayout.setContentsMargins(0, 0, 0, 0)
        self.verticalLayout.setObjectName("verticalLayout")
        self.label = QtWidgets.QLabel(self.verticalLayoutWidget)
        self.label.setObjectName("label")
        self.verticalLayout.addWidget(self.label)
        self.login = QtWidgets.QLineEdit(self.verticalLayoutWidget)
        self.login.setText("")
        self.login.setObjectName("login")
        self.verticalLayout.addWidget(self.login)
        self.label_2 = QtWidgets.QLabel(self.verticalLayoutWidget)
        self.label_2.setObjectName("label_2")
        self.verticalLayout.addWidget(self.label_2)
        self.password = QtWidgets.QLineEdit(self.verticalLayoutWidget)
        self.password.setInputMethodHints(QtCore.Qt.ImhHiddenText|QtCore.Qt.ImhNoAutoUppercase|QtCore.Qt.ImhNoPredictiveText|QtCore.Qt.ImhSensitiveData)
        self.password.setInputMask("")
        self.password.setText("")
        self.password.setEchoMode(QtWidgets.QLineEdit.Password)
        self.password.setObjectName("password")
        self.verticalLayout.addWidget(self.password)
        self.rememberMe = QtWidgets.QCheckBox(self.verticalLayoutWidget)
        self.rememberMe.setObjectName("rememberMe")
        self.verticalLayout.addWidget(self.rememberMe)
        self.authorizade = QtWidgets.QPushButton(self.verticalLayoutWidget)
        self.authorizade.setObjectName("authorizade")
        self.verticalLayout.addWidget(self.authorizade)
        MainWindow.setCentralWidget(self.centralwidget)

        self.retranslateUi(MainWindow)
        QtCore.QMetaObject.connectSlotsByName(MainWindow)

    def retranslateUi(self, MainWindow):
        _translate = QtCore.QCoreApplication.translate
        MainWindow.setWindowTitle(_translate("MainWindow", "Авторизация"))
        self.label.setText(_translate("MainWindow", "Логин:"))
        self.label_2.setText(_translate("MainWindow", "Пароль:"))
        self.rememberMe.setText(_translate("MainWindow", "Запомнить пользователя"))
        self.authorizade.setText(_translate("MainWindow", "Войти"))

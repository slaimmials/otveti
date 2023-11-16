let user = {
    name: "sas",
    surname: "sasov",
    lastname: "sasovich",
    login: "aboba227",
    password: "ponluti123",

   changePassword(){
        let newlogin;
        let confirmlogin;
        do {
            newlogin = prompt("Введите новый логин: ")
            confirmlogin = prompt("Потдвердите логин: ")
        }while(newlogin!=confirmlogin)
        let newpass;
        let confirmpass;
        do {
            newpass = prompt("Введите новый пароль: ")
            confirmpass = prompt("Потдвердите пароль: ")
        }while(newpass!=confirmpass)
        
        if(confirm("Вы уверены?")) {
            this.password = newpass
            this.login = newlogin
            alert("Данные изменены.")
        } else {
            alert("Действие отменено.")
        }
    },

    NameSurnameLastname() {
        alert(`Имя: ${this.name}\nФамилия: ${this.surname}\nОтчество: ${this.lastname}`)
    },
    
    LoginPassword() {
        alert(`Логин: ${this.login}\nПароль: ${this.password}`)
    }
}
let code = prompt("Введите код:")
while(code) {
    code = Number(code)
    switch(code) {
        case 1:
            user.NameSurnameLastname();
            break;
        case 2:
            user.LoginPassword();
            break;
        case 3:
            user.changePassword();
            break;
        default:
            alert("Неверное значение!");
            break;
    }
    code = prompt("Введите код:")
}

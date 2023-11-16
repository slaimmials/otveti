let user = {
    name: "sas",
    surname: "sasov",
    lastname: "sasovich",
    login: "aboba227",
    password: "ponluti123"
}

function NameSurnameLastname() {
    alert(`Имя: ${user.name}\nФамилия: ${user.surname}\nОтчество: ${user.lastname}`)
}

function LoginPassword() {
    alert(`Логин: ${user.login}\nПароль: ${user.password}\n`)
}
NameSurnameLastname()
LoginPassword()

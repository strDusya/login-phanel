let tels = []
let passwords = []

let userInputTel = document.querySelector('.telInput')
let userInputPassword = document.querySelector('.passwordInput')
let userButtonLogin = document.querySelector('.loginButton')
let error = document.querySelector('.error')

let login = document.querySelector('.login')
let network = document.querySelector('.network')

let userInputTelReg = document.querySelector('.telInputReg')
let userInputPasswordReg = document.querySelector('.passwordInputReg')
let userButtonReg = document.querySelector('.RegButton')
let errorReg = document.querySelector('.errorReg')

let back = document.querySelector('.back')


userButtonLogin.addEventListener('click',() => {

    if (tels.indexOf(userInputTel.value) == -1 || passwords.indexOf(userInputPassword.value) == -1) {

        error.innerHTML = 'Неверныый пароль или номер телефона'

        userInputPassword.value = ''
    } else {

        userInputTel.value = ''
        userInputPassword.value = ''

        error.innerHTML = ''
        login.style.display = 'none'
        network.style.display = 'flex'
    }


})

userButtonReg.addEventListener('click', () => {

    if (userInputTelReg.value.length < 11 || userInputPasswordReg.value.length < 6) {
        errorReg.innerHTML = 'Недопустимый формат телефона или слишком корокий пароль'
    } else {
        if (tels.indexOf(userInputTelReg.value) == -1) {

            tels.push(userInputTelReg.value)
            passwords.push(userInputPasswordReg.value)

            userInputTelReg.value = ''
            userInputPasswordReg.value = ''

            errorReg.innerHTML = 'Аккаунт зарегистрирован'
        } else {
            errorReg.innerHTML = 'Такой аккаунт уже существует'
            userInputTelReg.value = ''
            userInputPasswordReg.value = ''
        }
    }
})

back.addEventListener('click', () => {
    login.style.display = 'flex'
    network.style.display = 'none'
})

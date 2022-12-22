let passwordLength = document.getElementById("Password Length")
let password = document.getElementById("Password")

function generatePassword(len) {
    const lowerAlphabet = "abcdefghijklmnopqrstuvwxyz"
    const upperAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const number = "012345678910"
    const symbol = "!@#$%^&*()_+=-{}[]';:/?.,<>~`"

    const data = lowerAlphabet + upperAlphabet + number + symbol
    let generator;
    for(let index = 0; index < len; index++){
        generator = data[~~(Math.random() * data.length)];
    }
    return generator
}

function getPasswor() {
    const newPassword = generatePassword(passwordLength.value)
    password.value = newPassword
    alert('Password telah diterima')
}

function savePassword() {

}
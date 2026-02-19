
const $inputName = document.getElementById('name')
const $inputEmail = document.getElementById('email')
const $inputPhoneNumber = document.getElementById('phone-number')

const $errorName = document.getElementById('error_name')
const $errorEmail = document.getElementById('error_email')
const $errorPhoneNumber = document.getElementById('error_phone_number')

const $errorButton = document.getElementById('error_button')

const $form = document.querySelector('form')

const $title = document.querySelector('h1')
// Expresión regular: solo letras, espacios, acentos y ñ
const nameRegex = /^[a-záéíóúüñA-ZÁÉÍÓÚÜÑ\s]*$/;
const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

let validate = [false, false, false]

$form.addEventListener('submit', (event) => {
    event.preventDefault()

    //console.log(event.target.name.value);
        
    $errorButton.innerHTML = ''

    const isValid = validate.every(element => element === true);
    
    if (!isValid) {
        $errorButton.innerHTML = 'All fields must be valid'
        return
    }

    $form.style.display = 'none'
    $title.innerText = 'Sent successfully :D'
})

$inputName.addEventListener('input', (event) => {
    const value = $inputName.value

    $errorName.innerText = ''
    $errorButton.innerHTML = ''

    if (value.length < 5) {
        validate[0] = false
        $errorName.innerText = "Minimum 5 letters"
        return
    }

    if (!nameRegex.test(value)) {
        validate[0] = false
        $errorName.innerText = "Only letters are allowed"
        return
    }

    validate[0] = true
    
})

$inputEmail.addEventListener('input', (event) => {
    const value = $inputEmail.value

    $errorEmail.innerText = ''
    $errorButton.innerHTML = ''

    if (!emailRegex.test(value)){
        validate[1] = false
        $errorEmail.innerText = "The email address is invalid."
        return
    }

    validate[1] = true
})

$inputPhoneNumber.addEventListener('input', (event) => {
    const value = $inputPhoneNumber.value

    $errorPhoneNumber.innerHTML = ''
    $errorButton.innerHTML = ''

    if (isNaN(Number(value))){
        validate[2] = false
        $errorPhoneNumber.innerHTML = 'Only numbers are accepted'
        return
    }

    if (value.length != 10){
        $errorPhoneNumber.innerHTML = 'Only 10 digits'
        validate[2] = false
        return
    }

    validate[2] = true
})
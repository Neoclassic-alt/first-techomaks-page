function ready() {
    const form = document.querySelector(".form")
    const phone = document.querySelector(".phone-input")

    const errorNumber = document.querySelector(".error-invalid-number")
    const errorEmptyNumber = document.querySelector(".error-empty-number")
    const validNumber = document.querySelector(".info-valid-number")

    const phoneRegexp = /(\+7|8)?\d{10}/;

    form.onsubmit = function(e) {
        e.preventDefault();

        errorEmptyNumber.hidden = true
        errorNumber.hidden = true
        validNumber.hidden = true

        if (!phone.value) {
            errorEmptyNumber.hidden = false
            return
        }
        if (!phoneRegexp.test(phone.value)) {
            errorNumber.hidden = false
            return
        }
        if (!phone.value.startsWith('8') && !phone.value.startsWith('+7')) {
            phone.value = '+7' + phone.value
        }
        validNumber.hidden = false
        phone.value = '7' + phone.value.split('').reverse().slice(0, 10).reverse().join('')

        console.log([
            ['phone', phone.value]
        ])
    }
}

document.addEventListener("DOMContentLoaded", ready)
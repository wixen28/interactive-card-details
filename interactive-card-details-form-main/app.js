
const confirmBtn = document.querySelector('.button-confirm')
const continueBtn = document.querySelector('#continue-btn')
const form = document.querySelector('form')

const inputs = document.querySelectorAll('input')
const thankPart = document.querySelector('.thank-part')
const startPart = document.querySelector('.start-part')


//card elements
const cardNum = document.querySelector('#card-number')
const cardVal = document.getElementById('fcardNumber')
let errorCard = document.querySelector('#error-card')

//exp date elemenents
const expMonth = document.querySelector('#expDateM')
const expYear = document.querySelector('#expDateY')
const expError = document.querySelector('#error-date')
const dateElM = document.querySelector('#dateM')
const dateElY = document.querySelector('#dateY')

//cvc elements
const cvcEl = document.querySelector('#cvc')
const cvcNum = document.querySelector('#cvcNum')
const cvcError = document.querySelector('#error-cvc')

//name elements 
const nameInput = document.querySelector('#fname')
const nameEl = document.querySelector('#name')


form.addEventListener('click', function(e){
    e.preventDefault()
    validation()
})


continueBtn.addEventListener('click', (e) => {
    startPart.style.display = 'block'
    thankPart.style.display = 'none'
    nameInput.value = ''
    cardVal.value = ''
    cvcNum.value = ''
    expMonth.value = ''
    expYear.value = ''
    cardNum.textContent = '0000 0000 0000 0000'
    nameEl.textContent = 'JANE APPLESEED'
    dateElM.textContent = '00'
    dateElY.textContent = '00'
    cvcEl.textContent = '000'
})



let isValid = false
//VISA credit card validation
function validation() {
    let regex = /^[0-9\s]*$/
    inputs.forEach(function(input){
        if(!input.value) {
            input.style.borderColor = 'red'     
    
        }

    })
    let cardValue = cardVal.value
    if (cardValue.length === 19 && cardValue.match(regex)) {  
      cardNum.innerHTML = cardValue
      isValid = true
      errorCard.style.display = 'none'
      cardVal.style.borderColor = 'rgb(212, 207, 207)'
 

    } else if(!cardVal.value ) {
        errorCard.style.display = 'block'
        errorCard.innerHTML = 'Credit card number required'
        isValid = false
    } else if(!cardValue.match(regex)) {
        errorCard.innerHTML = 'Wrong format, numbers only!'
        errorCard.style.display = 'block'
        cardVal.style.borderColor = 'red'
        isValid = false
    } 

    

    if(!nameInput.value) {
        nameInput.style.borderColor = 'red'
    } else {
        nameInput.style.borderColor = 'rgb(212, 207, 207)'
        nameEl.textContent = nameInput.value
    }

    cvcValidation()
    expirationDateVal()

  

    if(isValid && nameInput.value && expMonth.value && expYear.value && cvcNum.value ) {
        startPart.style.display = 'none'
  thankPart.style.display = 'block'  
}


  }
   
  cardVal.addEventListener('keyup', function(e) {
    if(e.keyCode !==8) {                                                        /// POZRIET keyCode JS
        if(this.value.length === 4 || this.value.length === 9 || this.value.length === 14){
            this.value = this.value += " "
        }
    }


})




// Expiration Date Validation 
function expirationDateVal() {

    if(!expMonth.value && !expYear.value) {
        expError.style.display = 'block'
        expMonth.style.borderColor = 'red'
        expYear.style.borderColor = 'red'
     } else if (expMonth.value && expYear.value) {
        expError.style.display = 'none'
        expMonth.style.borderColor = 'rgb(212, 207, 207)'
        expYear.style.borderColor = 'rgb(212, 207, 207)'
        dateElM.innerHTML = expMonth.value
        dateElY.innerHTML = expYear.value
    }

}

// CVC Validation 
function cvcValidation() {
    let cvcRegex = /^[0-9]{3}$/

      if(!cvcNum.value) {
        cvcError.style.display = 'block'
        cvcError.textContent = "cant be blank"
    } else if(!cvcNum.value.match(cvcRegex)) {
        cvcError.style.display = 'block'
        cvcError.textContent = 'Wrong format'
    } else if( cvcNum.value.match(cvcRegex)) {
        cvcEl.textContent = cvcNum.value
        cvcError.style.display = 'none'
        cvcNum.style.borderColor = 'rgb(212, 207, 207)'
    }
}







  //Luhn algorithm
// const validateLuhnAlgorithm = (cardNumber = 4539689887705798) => {
//     let cardNumbers = cardNumber.toString().split("");
//     cardNumbers = cardNumbers.map(Number);
//     let sum = 0;
//     for (let i = 0; i < cardNumbers.length; i++) {
//         let digit = cardNumbers[i];
//         if (i % 2 === 0) {
//             digit *= 2;
//             if(digit > 9) digit -= 9;
//         }
//         sum = sum + digit;
//     }
//     return sum % 10 === 0;
// }


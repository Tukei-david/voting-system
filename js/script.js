const btnSubmit = document.getElementById('seat-submit')
const seatName = document.getElementById('seat-name')
const viedRole = document.getElementById('seats')
const speechDescription = document.getElementById('speech')
const showError = document.querySelector('.error')

btnSubmit.addEventListener('click', (e) => {
    e.preventDefault()

    // const profileUpload = document.getElementById('profile-upload')
    // TODO Checking if the values are empty
    // validateForm(seatName, speechDescription)

    displaySeatInfo(seatName.value, viedRole.value, speechDescription.value)
})

// TODO Minimize the code used.... Simmplicity

/**
 * * Will clear all inputs when the form is submittted
 */
function clearInputs() {

    seatName.value = ''
    viedRole.value = ''
    speechDescription.value = ''
    showError.classList.add('hide')
}

// * Will store values the user input from the form
const officalVying = []

/*
* * This function will display the user input to the browser
*/
function displaySeatInfo(name, role, speech) {

    if (name == '') {
        showError.innerText = 'Please input your full names'
        showError.classList.remove('hide')
    }else if (speech == '') {
        showError.innerText = 'Please input your speech, Why your deserve the role'
        showError.classList.remove('hide')
    }else {
        // Appending the values
        storeData(name, role, speech)
        clearInputs()
    }


}


/**
 * * This function will store and display in the html document
 */
function storeData(name, role, speech) {
    var displayViedSeats = document.querySelector('.display-seats')

    // TODO add image tag and select the uploaded image
    // TODO Validating the file uploaded and size
    // TODO displaying the seat info depending on the seat vied by the user
    var wrapperDiv = document.createElement('div')
    wrapperDiv.classList.add('elect-seat')

    var showName = document.createElement('h3')
    showName.classList.add('elect-name')
    showName.innerText = name
    wrapperDiv.appendChild(showName)

    var showRole = document.createElement('p')
    showRole.classList.add('vied-seat')
    showRole.innerText = role
    wrapperDiv.appendChild(showRole)

    var showSpeech = document.createElement('p')
    showSpeech.classList.add('seat-des')
    showSpeech.innerText = speech
    wrapperDiv.appendChild(showSpeech)

    console.log(wrapperDiv)

    // Append the wrapper div
    displayViedSeats.appendChild(wrapperDiv)
}

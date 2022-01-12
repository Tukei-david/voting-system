const btnSubmit = document.getElementById('seat-submit')

btnSubmit.addEventListener('click', (e) => {
    e.preventDefault()

    const seatName = document.getElementById('seat-name')
    const viedRole = document.getElementById('seats')
    const speechDescription = document.getElementById('speech')
    // const profileUpload = document.getElementById('profile-upload')
    // TODO Checking if the values are empty
    // validateForm(seatName, speechDescription)

    var showError = document.querySelector('.error')

    if (seatName.value == '') {
        showError.innerText = 'Please input your full names'
        showError.classList.remove('hide')
    }else if (speechDescription.value == '') {
        showError.innerText = 'Please input your speech, Why your deserve the role'
        showError.classList.remove('hide')
    }else {
        // Appending the values
        displaySeatInfo(seatName, viedRole, speechDescription)
    }

    
    
})

// TODO Minimize the code used.... Simmplicity


function clearInputs() {
    const seatName = document.getElementById('seat-name')
    const viedRole = document.getElementById('seats')
    const speechDescription = document.getElementById('speech')

    var showError = document.querySelector('.error')
}

function displaySeatInfo(name, role, speech) {

    var displayViedSeats = document.querySelector('.display-seats')

    // TODO add image tag and select the uploaded image
    // TODO Validating the file uploaded and size
    // TODO displaying the seat info depending on the seat vied by the user
    var wrapperDiv = document.createElement('div')
    wrapperDiv.classList.add('elect-seat')

    var showName = document.createElement('h3')
    showName.classList.add('elect-name')
    showName.innerText = name.value
    wrapperDiv.appendChild(showName)

    var showRole = document.createElement('p')
    showRole.classList.add('vied-seat')
    showRole.innerText = role.value
    wrapperDiv.appendChild(showRole)

    var showSpeech = document.createElement('p')
    showSpeech.classList.add('seat-des')
    showSpeech.innerText = speech.value
    wrapperDiv.appendChild(showSpeech)

    console.log(wrapperDiv)

    // Append the wrapper div
    displayViedSeats.appendChild(wrapperDiv)

}


// function validateForm(name, speech) {

//     var showError = document.querySelector('.error')

//     if (name.value == '') {
//         showError.innerText = 'Please input your full names'
//         showError.classList.remove('hide')
//     }else if (speech.value == '') {
//         showError.innerText = 'Please input your speech, Why your deserve the role'
//         showError.classList.remove('hide')
//     }

// }
function getPin() {
    const random = Math.random() * 10000;
    const pin = (random + " ").split('.')[0];

    if (pin.length === 4) {
        return pin;
    } else {
        return getPin();
    }
}

// displayed Pin

function generatePin() {
    const pinInput = document.getElementById("pin");
    pinInput.value = getPin();
}

// handle calculator button

const buttonContainer = document.getElementById("digits-container");
buttonContainer.addEventListener('click', function(event) {
    const digit = event.target.innerText;
    if (isNaN(digit)) {
        if (digit === 'C') {
            const typedInput = document.getElementById("typePin");
            typedInput.value = " ";
        }
    } else {
        const typedInput = document.getElementById("typePin");
        typedInput.value = typedInput.value + digit;
    }
})

// verifyPin


function verifyPin() {

    let pin = document.getElementById("pin").value;
    let typedPin = document.getElementById("typePin").value;


    if (pin === typedPin) {
        displayMatchResult('block', 'none');
    } else {
        displayMatchResult('none', 'block')
    }

    function displayMatchResult(correctStatus, incorrectStatus) {
        const correct = document.getElementById("correct-pin");
        correct.style.display = correctStatus;
        const incorrect = document.getElementById("incorrect-pin");
        incorrect.style.display = incorrectStatus;
    }
}
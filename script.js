const targetText = document.getElementById('text')
const inputText = document.getElementById('inputText')


window.addEventListener('keyup', (e) => {
    const textArray = targetText.querySelectorAll('span')
    const inputArray = inputText.value.split("")
    if (c == 0) timer = setInterval(counter, 1000)

    textArray.forEach((characterSpan, index) => {
        const char = inputArray[index]
        if (char == null) {
            characterSpan.classList.remove('correct')
            characterSpan.classList.remove('incorrect')
        } else if (char === characterSpan.innerText) {
            characterSpan.classList.add('correct')
            characterSpan.classList.remove('incorrect')
        } else {
            characterSpan.classList.remove('correct')
            characterSpan.classList.add('incorrect')
        }
    })


})


let c = 0;

function counter() {
    document.getElementById("timer").innerHTML = ++c;
}

var text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
var splitText = text.split("")
splitText.forEach(character => {
    const charecterSpan = document.createElement('span')
    charecterSpan.innerText = character
    targetText.appendChild(charecterSpan)

})
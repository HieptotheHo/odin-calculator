
// OPERATORS
const operationSection = document.querySelector("#operation-buttons");
console.log(operationSection)

const operatorsChar= ['/','*','-','+','=']
const functionChar = ['AC','+/-','%']
const numberChar = [[7,8,9],[4,5,6],[1,2,3]]
for(let i = 0; i < 5;i++) {
    const operationButton = document.createElement("div")
    operationButton.setAttribute("class","operator button")
    const operatorSign = document.createElement('h1');
    operatorSign.textContent = operatorsChar[i]
    operationButton.appendChild(operatorSign)
    operationSection.appendChild(operationButton)
}

// FUNCTIONS
const functionSection = document.querySelector('#function-buttons')
for(let i = 0;i<3;i++) {
    const functionButton = document.createElement("div")
    functionButton.setAttribute('class','function button')

    functionButton.innerHTML = `
        <h1>${functionChar[i]}</h1>
    `
    functionSection.appendChild(functionButton)
}

//NUMBERS
const numberSection = document.querySelector('#number-buttons')


for(let i = 0;i<3;i++) {
    const line = document.getElementsByClassName(`line`)[i]

    for(let j = 0;j<3;j++) {
        const number = document.createElement('div')
        number.setAttribute('class','number button')
        number.innerHTML = `
            <h1>${numberChar[i][j]}</h1>
        `
        line.appendChild(number)
    }
}

document.querySelectorAll('.button').forEach(button => {
    button.classList.add('hover-button')
})



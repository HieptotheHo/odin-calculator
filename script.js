
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
    button.addEventListener('click',(e)=>{
        
        updateDisplay(button);
    })
})


var initialState = true;
var operation = 0;
var negation = false;
var a='',previousOp,b='';
const text = document.querySelector('.text')

var numMode = true;
var stack = []
var secondOperand = false;
const updateDisplay = (button) => {
    let input = button.querySelector('h1').textContent;
    //NEGATION
    if(input === '+/-') {
        text.textContent = -(+text.textContent);
    }

    //PERCENTAGE
    if(input === '%') {
        text.textContent = +text.textContent/100;
    }
    //AC
    if(input ==='AC') {
        text.textContent = '0';
        initialState=true;
        secondOperand = false;
    }
    if(button.classList.contains('number')) {
        if(initialState) {
            initialState=false;
            text.textContent=''
        }
        if((stack[stack.length-1] === '+'||stack[stack.length-1] === '-'||stack[stack.length-1] === '/'||stack[stack.length-1] === '*')) {
            if(secondOperand) {
                text.textContent='';
                secondOperand = false;
            }
            
            
        } else if(typeof stack[stack.length-1] == 'number'){
            text.textContent ='';
            stack = []
        }
        text.textContent+=input;
    }
    if(button.classList.contains('operator') && input) {
        if(!initialState) {
            if(stack.length>=2) {
                b = +text.textContent
                op = stack.pop()
                a= stack.pop()
                text.textContent = operate(a,b,op)
                
                stack.push(+text.textContent);
                
            } else {
                stack = []
                stack.push(+text.textContent);
            }
            if(input != '=') {
                stack.push(input);
                secondOperand = true;
            }
        }

    }
    console.log(stack)
        
}

    


function operate(a,b,op) {
    
    switch(op) {
        case '+':
            return add(a,b);
            break;
        case '-':
            return sub(a,b);
            break;
        case '/':
            return div(a,b);
            break;
        case '*':
            return mul(a,b);
            break;
    }
}

const add = (a,b) =>{
    return a+b;
}

const sub = (a,b) =>{
    return a-b;
}

const mul = (a,b) =>{
    return a*b;
}

const div = (a,b) => {
    return a/b;
}

const percent = (a) => {
    return a/100
}

let num1 = ""
let num2 = ""
let operation = ""
display = document.querySelector("#display")

const press = num => {
    num1 += num
    display.innerText = num1
}

const setOP = op => {
    operation = op
    num2 = num1
    num1 = ""
}

const clr = () => {
    num1 = ""
    num2 = ""
    operation = ""
    display.innerText = 0
}

const calculate = () => {
    let a = parseFloat(num2)
    let b = parseFloat(num1)
    let res = 0
    switch(operation) {
        case "+":
            res = a + b
            break
        case "-":
            res = a - b
            break
        case "/":
            res = a / b
            break
        case "*":
            res = a * b
            break
    }
    num1 = res
    operation = ""
    display.innerText = res
}

var result = 0
var numeros = ""

const todosBotoes = [...document.querySelectorAll(".botoes")]
const ac = document.getElementById('ac')
const igual = document.getElementById('igual')
const info = document.getElementById('info')

todosBotoes.forEach((elemento) =>{
    if(elemento.textContent == 'AC') return 
    elemento.addEventListener("click", () =>{
        numeros = numeros + elemento.textContent
        console.log(typeof(elemento.textContent))
        info.innerHTML = numeros
        addList(elemento.textContent)
    })
})

function addList(numero) {
    if (!isNaN(Number(numero))) {
        result = result + Number(numero);
    }
}

igual.addEventListener("click", () => {
    var temp1 = ""
    let i = 0
    for(  ; i < numeros.length ; i++ ) {
        
        console.log(numeros[i])
        if(numeros[i] >= '0' && numeros[i] <= '9') {
            temp1 += numeros[i]
        } else {
            break;
        }
    }
    if (!isNaN(Number(temp1))) {
        result = Number(temp1)
    }

    while(i < numeros.length) {
        let temp  = ""
        let j = i+1
        for( ; j < numeros.length ; j++ ) {
            if(numeros[j] >= '0' && numeros[j] <= '9') 
                temp += numeros[j]
            else 
                break;
        }
        if(numeros[i] == '+') {
            if (!isNaN(Number(temp))) {
                result += Number(temp)
            }        
        }
        if(numeros[i] == '-') {
            if (!isNaN(Number(temp))) {
                result -= Number(temp)
            }        
        }
        if(numeros[i] == 'x') {
            if (!isNaN(Number(temp))) {
                result *= Number(temp)
            } 
        }
        if(numeros[i] == '÷') {
            if (!isNaN(Number(temp))) {
                result /= Number(temp)
            } 
        }
        i = j
    }
    numeros = result.toString()
    info.innerHTML = numeros
})

ac.addEventListener("click", () => {
    result = 0
    numeros = "0"
    info.innerHTML = numeros
    console.log("opa")
})



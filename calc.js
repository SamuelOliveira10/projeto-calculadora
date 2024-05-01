function insert(num){
    let result = document.getElementById('conteudo')
    let numero = document.getElementById('conteudo').innerHTML

    if (numero == '' && num == '0'){
        result.innerHTML += '0.'
    } else if (numero == '' && num == '00'){
        result.innerHTML += '0.0'
    } else if (numero.length < 11) {
        result.innerHTML += num
    }
}


function insertOperator(sin){
    let result = document.getElementById('conteudo')
    let conteudo = document.getElementById('conteudo').innerHTML
    let ultCar = conteudo.slice(-1)
    let sins = '+-*/'
    if (conteudo.length > 0){
        if (sins.indexOf(ultCar) == -1){
            result.innerHTML += sin
        }
    }
    
}


function insertPoint(){
    let result = document.getElementById('conteudo')
    let numero = document.getElementById('conteudo').innerHTML

    let keys = []
    let sins = {mais: '+', menos: '-', mult: '*', divs: '/'}
    let mais = numero.indexOf(sins.mais)

    while(mais != -1){
        keys.push(mais)
        mais = numero.indexOf(sins.mais, mais+1) 
    }

    let menos = numero.indexOf(sins.menos)

    while(menos != -1){
        keys.push(menos)
        menos = numero.indexOf(sins.menos, menos + 1) 
    }

    let mult = numero.indexOf(sins.mult)

    while(mult != -1){
        keys.push(mult)
        mult = numero.indexOf(sins.mult, mult + 1) 
    }

    let divs = numero.indexOf(sins.divs)

    while(divs != -1){
        keys.push(divs)
        divs = numero.indexOf(sins.divs, divs + 1) 
    }

    let lorak = keys.sort((a, b) => a - b)
    let separate = [] 
    let n = 0

    for(let c = 0; c < lorak.length + 1; c++){
        separate.push(numero.slice(n, lorak[c]))
        n = lorak[c] + 1
    }
 
    let sep = separate.slice(-1).join()

    if (numero == ''){
        result.innerHTML += '0.'
    } else if (sep.indexOf('.') == -1) {
        result.innerHTML += '.'
    } 
}


function clean(){
    const result = document.getElementById('conteudo')
    result.innerHTML = ''
}


function backSpace(){
    let result = document.getElementById('conteudo').innerHTML 
    if (result == '0.'){
        document.getElementById('conteudo').innerHTML = result.substring(0, result.length -2)
    } else {
        document.getElementById('conteudo').innerHTML = result.substring(0, result.length -1)
    }
}


function count(){
    let result = document.getElementById('conteudo').innerHTML
    let conteudo
    if (result) {
        conteudo = eval(result)
        document.getElementById('conteudo').innerHTML = conteudo/100
    }

}

function result(){
    let result = document.getElementById('conteudo').innerHTML
    if (result) {
        document.getElementById('conteudo').innerHTML = eval(result)
    }
}
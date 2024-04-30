function insert(num){
    let result = document.getElementById('conteudo')
    let conteudo = document.getElementById('conteudo').innerHTML
    if (conteudo == '' && num == '0'){
        result.innerHTML += '0.'
    } else if (conteudo == '' && num == '00'){
        result.innerHTML += '0.0'
    } else if (conteudo.length < 11) {
        result.innerHTML += num
    }
}


function insertOperator(sin){
    let result = document.getElementById('conteudo')
    let conteudo = document.getElementById('conteudo').innerHTML
    let ultCar = conteudo.slice(-1)
    let sins = '+-*/'
    if (conteudo.length > 0 && sins.indexOf(ultCar) == -1){
        result.innerHTML += sin
    }
}


function insertPoint(){
    let result = document.getElementById('conteudo')
    let conteudo = document.getElementById('conteudo').innerHTML
    let sins = [conteudo.indexOf('+'), conteudo.indexOf('-'), conteudo.indexOf('*'), conteudo.indexOf('/')]
    if (conteudo == ''){
        result.innerHTML += '0.'
    } else if (conteudo.indexOf('.') == -1) {
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
// const numero = '475+8575*875*875-574/874'

// let keys = []
// let sins = {mais: '+', menos: '-', mult: '*', divs: '/'}
// let mais = numero.indexOf(sins.mais)

// while(mais != -1){
//     keys.push(mais)
//     mais = numero.indexOf(sins.mais, mais+1) 
// }

// let menos = numero.indexOf(sins.menos)

// while(menos != -1){
//     keys.push(menos)
//     menos = numero.indexOf(sins.menos, menos + 1) 
// }

// let mult = numero.indexOf(sins.mult)

// while(mult != -1){
//     keys.push(mult)
//     mult = numero.indexOf(sins.mult, mult + 1) 
// }

// let divs = numero.indexOf(sins.divs)

// while(divs != -1){
//     keys.push(divs)
//     divs = numero.indexOf(sins.divs, divs + 1) 
// }

// let lorak = keys.sort()
// let separate = []
// let n = 0

// for(let c = 0; c < lorak.length + 1; c++){
//     separate.push(numero.slice(n, lorak[c]))
//     n = lorak[c] + 1
// }

// console.log(lorak)
// console.log(separate)

let numero = [ 32, 45, 5, 17, 2 ]
console.log(numero.sort())









// let s = 0
// let p = 0
// for (let c of numero) if (c ==='+' || c ==='-' || c==='*' || c==='/' ) s++
// for (let c of numero) if (c === '.') p++

// console.log(s)
// console.log(p)

// if (p <= s+1) console.log(true)
// else console.log(false)



// var indices = [];
// var array = ["a", "b", "a", "c", "a", "d"];
// var elemento = "a";
// var idx = array.indexOf(elemento);
// while (idx != -1) {
//   indices.push(idx);
//   idx = array.indexOf(elemento, idx + 1);
// }
// console.log(indices);
// // [0, 2, 4]
function somar(){
               
    let s1 = document.getElementById('soma1')
    let s2 = document.getElementById('soma2')
    let res1 = document.getElementById('res1')

    let n1 = Number(s1.value)
    let n2 = Number(s2.value)
    
    let resultado = n1 + n2

    res1.innerHTML = `O resultado da soma entre ${n1} + ${n2} = <strong>${resultado}</strong>`
} 

function subtrair(){
               
    let s1 = document.getElementById('sub1')
    let s2 = document.getElementById('sub2')
    let res2 = document.getElementById('res2')

    let n1 = Number(s1.value)
    let n2 = Number(s2.value)
    
    let resultado = n1 - n2

    res2.innerHTML = `O resultado da subitração entre ${n1} - ${n2} = <strong>${resultado}</strong>`
} 

function multiplicar(){
               
    let s1 = document.getElementById('mult1')
    let s2 = document.getElementById('mult2')
    let res3 = document.getElementById('res3')

    let n1 = Number(s1.value)
    let n2 = Number(s2.value)
    
    let resultado = n1 * n2

    res3.innerHTML = `O resultado da multiplicação entre ${n1} * ${n2} = <strong>${resultado}</strong>`
} 

function dividir(){
               
    let s1 = document.getElementById('div1')
    let s2 = document.getElementById('div2')
    let res3 = document.getElementById('res4')

    let n1 = Number(s1.value)
    let n2 = Number(s2.value)
    
    let resultado = n1 / n2

    res4.innerHTML = `O resultado da divisão entre ${n1} / ${n2} = <strong>${resultado}</strong>`
} 
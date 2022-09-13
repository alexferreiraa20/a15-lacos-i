let ask = prompt("Deseja pedir uma coxinha ? \n Responda sim ou não !")
let conta = null
let qntcx = null

while ( ask === "sim" ){
conta += 2.50
qntcx++
ask = prompt("Deseja pedir mais uma coxinha ? \n Responda sim ou não !")
} 
console.log(`Você pediu ${qntcx++} coxinhas, o valor final é ${conta++}`)


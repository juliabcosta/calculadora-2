const visor = document.querySelector ("#visor")

let operacao
let valor1
let valor2

document.addEventListener("click", (event) =>{
    switch(event.target.innerText){
        case "0":
        atualizaVisor(event.target.innerText)
        atualizaValor(event.target.innerText)
        break;
        case "1":
        atualizaVisor(event.target.innerText)
        atualizaValor(event.target.innerText)
        break;
        case "2":
        atualizaVisor(event.target.innerText)
        atualizaValor(event.target.innerText)
        break;
        case "3":
        atualizaVisor(event.target.innerText)
        atualizaValor(event.target.innerText)
        break;
        case "4":
        atualizaVisor(event.target.innerText)
        atualizaValor(event.target.innerText)
        break;
        case "5":
        atualizaVisor(event.target.innerText)
        atualizaValor(event.target.innerText)
        break;
        case "6":
        atualizaVisor(event.target.innerText)
        atualizaValor(event.target.innerText)
        break;
        case "7":
        atualizaVisor(event.target.innerText)
        atualizaValor(event.target.innerText)
        break;
        case "8":
        atualizaVisor(event.target.innerText)
        atualizaValor(event.target.innerText)
        break;
        case "9":
        atualizaVisor(event.target.innerText)
        atualizaValor(event.target.innerText)
        break;
        case "+":
        escolheOperacao(event.target.innerText)
        break;
        case "−":
        escolheOperacao(event.target.innerText)
        break;
        case "÷":
        escolheOperacao(event.target.innerText)
        break;
        case "×":
        escolheOperacao(event.target.innerText)
        break;
        case "C":
        visor.innerText = "0"
        operacao = undefined
        valor1 = undefined
        valor2 = undefined
        break;
        case "=":
          visor.innerText = calcular(operacao, valor1, valor2)
          break;

    }
})

function atualizaVisor(novotexto){
  if(visor.innerText == "0"){
    visor.innerText = novotexto
  } else {
    visor.innerText += novotexto
  }
}

function escolheOperacao(novaOperacao){
    if(operacao || visor.innerText == "0") {
        return
    } else {
        operacao = novaOperacao
        atualizaVisor(novaOperacao)
    }
}

function atualizaValor(numero){
    if (operacao){
      if(valor2){
        valor2 += numero
      } else {
        valor2 = numero
      }
    } else {
      if(valor1){
        valor1 += numero
      } else {
        valor1 = numero
      }
    }
}

function calcular(operacao, n1, n2){
    switch(operacao){
      case "+":
        return +n1 + +n2
        break;
        case "−":
       return +n1 - +n2
        break;
        case "÷":
         return +n1 / +n2
        break;
        case "×":
         return +n1 * +n2
        break;

    }
}

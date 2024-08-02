function enviar_mensagem(event) {
    event.preventDefault();
    let x= contador[contador.length-1]
    let entrada = document.querySelector(".enter");
    if (entrada.value===''){
        alert("Por favor, insira uma nota")
    }
    else if(isNaN(entrada.value)){
        alert("A nota digitada é inválida, por favor, insira uma nota válida")
   }
   else if(entrada.value<0||entrada.value>10){
        alert("A nota digitada é inválida, por favor, insira uma nota válida")
        entrada.value=''
   }
   else{
    let texto = document.createElement("p");
    texto.innerText = "A nota "+x+ " foi: "+ entrada.value;
    let tela = document.querySelector(".Tela");
    tela.append(texto);
    notas.push(parseFloat(entrada.value))
    entrada.value = '';
    contador.push(x+1)
   }
}

function sum(){
    let soma= 0
    for (let i =0; i<notas.length; i++){
        soma+= notas[i]
    }
    return soma
}

function dar_media(){
    let total= sum()
    let media= total/notas.length
    let arredondado= media.toFixed(2)
    let resultado_final= document.querySelector(".final")
    resultado_final.innerText= "A média é: " + arredondado
}
var contador=[1]
var notas=[]
let btn_enviar = document.querySelector(".add");
btn_enviar.addEventListener("click", enviar_mensagem);
let btn_calcular= document.querySelector(".calcular_media")
btn_calcular.addEventListener("click", dar_media)
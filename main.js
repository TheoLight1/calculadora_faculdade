function adicionar (number) {
    
    var numero = document.querySelector('.resultado').innerHTML;

    document.querySelector(".resultado").innerHTML = numero + number

}

const apagar = document.querySelector(".ac");

apagar.addEventListener("click", () => {
    document.querySelector(".resultado").innerHTML = ""
})

function calcular() {
    var resultado = document.querySelector('.resultado').innerHTML;
    if(resultado) {
        document.querySelector(".resultado").innerHTML = eval(resultado)

    }
}



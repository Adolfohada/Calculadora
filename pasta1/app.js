var resultado = document.getElementById('resultado')

function mais(){
    //Entrada
    var n1 = parseFloat(document.getElementById('numero1').value);
    var n2 = parseFloat(document.getElementById('numero2').value);
    

    //Processamento
    var soma = n1+ n2



    //Saída
    resultado.innerText = `O resultado da soma é ${soma}`
}
function menos(){
    //Entrada
    var n1 = parseFloat(document.getElementById('numero1').value);
    var n2 = parseFloat(document.getElementById('numero2').value);
    

    //Processamento
    var soma = n1 - n2



    //Saída
    resultado.innerText = `O resultado da soma é ${soma}`
}
function divisao(){
    //Entrada
    var n1 = parseFloat(document.getElementById('numero1').value);
    var n2 = parseFloat(document.getElementById('numero2').value);
    

    //Processamento
    var soma = n1 / n2



    //Saída
    resultado.innerText = `O resultado da soma é ${soma}`
}
function multiplicacao(){
    //Entrada
    var n1 = parseFloat(document.getElementById('numero1').value);
    var n2 = parseFloat(document.getElementById('numero2').value);
    

    //Processamento
    var soma = n1 * n2



    //Saída
    resultado.innerText = `O resultado da soma é ${soma}`
}

function calcularDesconto(){

    //Entrada de dados
    let valorOriginal = document.getElementById("Valor").value;
    let desconto = document.getElementById("desconto").value;

    //Processamento
    let valorDesconto = (valorOriginal * desconto) / 100;
    let valorFinal = (valorOriginal - valorDesconto);

    //Saída
    document.getElementById("resultado").textContent = "Valor Final: " + valorFinal;

}


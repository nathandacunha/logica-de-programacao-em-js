const valorProduto = parseFloat(prompt("Digite o valor do produto: "))
let valorDesconto = valorProduto*0.10;
let valorAvista = valorProduto-valorDesconto;
let valorParcelado = valorProduto/3;

alert("Preço: " + valorProduto)
alert("Valor a vista: " + valorAvista)
alert("Ou valor em 3x de R$: " + valorParcelado);

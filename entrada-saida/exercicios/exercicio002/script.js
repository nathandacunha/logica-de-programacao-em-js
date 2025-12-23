const valorCompra = parseFloat(prompt("Digite o valor da compra: "))
const numeroClientes = parseInt(prompt("Digite o numero de clientes"))
let valorPorCliente = valorCompra/numeroClientes;

alert("O valor da conta por cliente é de: " + valorPorCliente);
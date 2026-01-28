// cria a referência ao form e ao um elemento h1(onde será exibida a resposta)

const formulario = document.querySelector('form');
const resposta = document.querySelector('h1');

// criar um "ouvinte" de evento, acionado quando o botão submit for clicado
formulario.addEventListener("submit", (e) => {
    const nome = formulario.inNome.value;
    resposta.innerText = `Ola ${nome}`;
    e.preventDefault();
});

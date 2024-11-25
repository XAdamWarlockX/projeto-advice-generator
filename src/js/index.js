// Criando o gerador de conselhos com tratamento de erro caso o API não responda ou tenha algo de errado no código.-+
async function geradorDeConselhos () {
    try{
        const url = "https://api.adviceslip.com/advice";
        const respostaDoApi = await fetch(url);
        return await respostaDoApi.json();
    } catch (error) {
        console.error("Infelizmente o API não esta respondendo ou tem algo de errado no código.")
    }
}

// Gerando um conselho
async function gerandoConselhoAleatorio () {
    const gerarConselho = await geradorDeConselhos();
    const textoDoConselho = gerarConselho.slip.advice;
    document.getElementById('conselho').innerText = textoDoConselho;
}

// Chamando um conselho para abrir junto com a página
gerandoConselhoAleatorio()

// Pedindo um novo conselho ao clicar no botão
document.getElementById('btn').addEventListener('click', () => {
    gerandoConselhoAleatorio();
});
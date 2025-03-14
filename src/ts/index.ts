interface ApiResponse {
    slip: {
        id: number
        advice: string
    }
}

// Criando o gerador de conselhos com tratamento de erro caso o API não responda ou tenha algo de errado no código.
async function geradorDeConselhos (): Promise<ApiResponse> {
    try{
        const url: string = "https://api.adviceslip.com/advice";
        const respostaDoApi: Response = await fetch(url);
        return respostaDoApi.json();
    } catch (error: unknown) {
        console.error("Infelizmente o API não esta respondendo ou tem algo de errado no código.")
    }
}

// Gerando um conselho
async function gerandoConselhoAleatorio (): Promise<void> {
    const gerarConselho = await geradorDeConselhos();
    const textoDoConselho: string = gerarConselho.slip.advice;
    const idDoParagrafo = document.getElementById('conselho') as HTMLParagraphElement
    
    idDoParagrafo.innerText = textoDoConselho;
}

// Chamando um conselho para abrir junto com a página
gerandoConselhoAleatorio()

// Pedindo um novo conselho ao clicar no botão
const btn = document.getElementById('btn') as HTMLButtonElement

btn.addEventListener('click', () => {
    gerandoConselhoAleatorio();
});
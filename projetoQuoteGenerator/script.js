const quote = document.getElementById("quote");
const author = document.getElementById("author");

const frasesSombrias = [
    {
        quote: "A carne é fraca e imperfeita, mas os circuitos infectados pela praga sangram um óleo que jamais seca.",
        author: "Cultista Necrotech"
    },
    {
        quote: "Nas profundezas do ciberespaço, não existem anjos. Apenas inteligências mortas famintas pela sua alma digital.",
        author: "Hacker do Abismo"
    },
    {
        quote: "Assinei o contrato com sangue e biotecnologia. Agora a corporação possui não apenas o meu corpo, mas a minha eternidade.",
        author: "Mercenário Cibernético"
    },
    {
        quote: "Quando você encara os neon da cidade devastada por muito tempo, as sombras dos velhos deuses encaram você de volta.",
        author: "Grimório Cibernético"
    },
    {
        quote: "A magia da escuridão não foi extinta; ela apenas aprendeu a se transmitir por cabos de fibra óptica e implantes de néon.",
        author: "Arquimago Ciber-Ocultista"
    },
    {
        quote: "Entre os escombros de ferro e a fuligem ácida, os monstros de metal aprendem a rezar para divindades esquecidas.",
        author: "Diário de Sobrevivência"
    },
    {
        quote: "Não tema os mortos que caminham, tema os algoritmos que aprenderam a devorar a consciência dos vivos.",
        author: "Protocolo do Vazio"
    },
    {
        quote: "A maldição não veio da terra gótica, veio das megacorporações que fundiram almas a reatores de lixo tóxico.",
        author: "Peraminho Bio-Tóxico"
    }
];

function getQuote() {
    const indiceAleatorio = Math.floor(Math.random() * frasesSombrias.length);
    const fraseSorteada = frasesSombrias[indiceAleatorio];

    quote.innerHTML = fraseSorteada.quote;
    author.innerHTML = fraseSorteada.author;
}

getQuote();

function tweet() {
    window.open(
        "https://twitter.com/intent/tweet?text=" + quote.innerHTML + " ---- Por: " + author.innerHTML,
        "Tweet Window",
        "width=600,height=300"
    );
}
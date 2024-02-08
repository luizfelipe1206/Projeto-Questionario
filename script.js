const perguntas = [
    {
        pergunta: "O que significa a sigla DOM em JavaScript?",
        respostas: [
            "Document Object Model",
            "Data Object Model",
            "Dynamic Output Management",
        ],
        correta: 0
    },
    {
        pergunta: "Qual é a forma correta de declarar uma variável em JavaScript?",
        respostas: [
            "var nomeVariavel;",
            "variable nomeVariavel;",
            "let nomeVariavel;",
        ],
        correta: 2
    },
    {
        pergunta: "O que é um closure em JavaScript?",
        respostas: [
            "Um tipo de loop",
            "Uma função que tem acesso às variáveis de seu escopo externo, mesmo após a função ter terminado de ser executada",
            "Um tipo de operador lógico",
        ],
        correta: 1
    },
    {
        pergunta: "Qual é o operador de igualdade estrita em JavaScript?",
        respostas: [
            "==",
            "===",
            "=",
        ],
        correta: 1
    },
    {
        pergunta: "Como se chama a função utilizada para imprimir algo no console em JavaScript?",
        respostas: [
            "print()",
            "log()",
            "console.log()",
        ],
        correta: 2
    },
    {
        pergunta: "O que é JSON em JavaScript?",
        respostas: [
            "Java Script Object Notation",
            "Just Some Other Notation",
            "JavaScript On-demand Notation",
        ],
        correta: 0
    },
    {
        pergunta: "Qual é o método em JavaScript utilizado para remover o último elemento de um array?",
        respostas: [
            "removeLast()",
            "pop()",
            "deleteLast()",
        ],
        correta: 1
    },
    {
        pergunta: "Qual é a função do operador 'typeof' em JavaScript?",
        respostas: [
            "Retorna o tipo de dado de uma variável",
            "Realiza uma comparação de igualdade",
            "Define o tipo de uma variável",
        ],
        correta: 0
    },
    {
        pergunta: "O que é o evento 'click' em JavaScript?",
        respostas: [
            "Um tipo de operador de comparação",
            "Um evento que é acionado quando um elemento é clicado",
            "Uma função nativa do JavaScript",
        ],
        correta: 1
    },
    {
        pergunta: "Qual é a diferença entre 'null' e 'undefined' em JavaScript?",
        respostas: [
            "'null' representa a ausência de valor atribuído, enquanto 'undefined' é um valor atribuído automaticamente pelo JavaScript",
            "'undefined' representa a ausência de valor atribuído, enquanto 'null' é um valor atribuído automaticamente pelo JavaScript",
            "Não há diferença, ambos representam a ausência de valor",
        ],
        correta: 0
    },
];

const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')

const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal =document.querySelector('#acertos span')

for(const item of perguntas){
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
    
    

    for(let resposta of item.respostas){
        const dt = quizItem.querySelector('dl dt').cloneNode(true)
        dt.querySelector('span').textContent = resposta
        dt.querySelector('input').setAttribute('name' , 'pergunta-' + perguntas.indexOf(item))
        dt.querySelector('input').value = item.respostas.indexOf(resposta)

        dt.querySelector('input').onchange = (event) => {
            const estaCorreta = event.target.value == item.correta

            corretas.delete(item)
            if(estaCorreta) {
                corretas.add(item)
            }
            
        }




        quizItem.querySelector('dl').appendChild(dt)
    }

    quizItem.querySelector('dl dt').remove()

    quiz.appendChild(quizItem)
}

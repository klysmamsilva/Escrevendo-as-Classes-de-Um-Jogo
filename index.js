// Definindo a classe Heroi
class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    // Método atacar que exibe a mensagem de ataque conforme o tipo do herói
    atacar() {
        let ataque;

        // Estrutura de decisão para definir o tipo de ataque
        if (this.tipo === "mago") {
            ataque = "magia";
        } else if (this.tipo === "guerreiro") {
            ataque = "espada";
        } else if (this.tipo === "monge") {
            ataque = "artes marciais";
        } else if (this.tipo === "ninja") {
            ataque = "shuriken";
        } else {
            ataque = "ataque desconhecido";
        }

        // Exibe a mensagem de ataque
        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}

// Função para criar vários heróis e atacar
function testarHerois() {
    // Array de objetos com dados dos heróis
    const listaHerois = [
        { nome: "Merlin", idade: 60, tipo: "mago" },
        { nome: "Arthur", idade: 30, tipo: "guerreiro" },
        { nome: "Shaolin", idade: 40, tipo: "monge" },
        { nome: "Ryu", idade: 25, tipo: "ninja" }
    ];

    // Laço de repetição para criar cada herói e chamar o método atacar
    for (let i = 0; i < listaHerois.length; i++) {
        const dados = listaHerois[i];
        const heroi = new Heroi(dados.nome, dados.idade, dados.tipo);
        heroi.atacar();
    }
}

// Executa o teste
testarHerois();
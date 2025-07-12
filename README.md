# Escrevendo as Classes de Um Jogo

Este código está em JavaScript e tem como objetivo demonstrar o uso de classes para representar personagens em um jogo, especificamente heróis de diferentes tipos.


# Explicação do funcionamento:


## Classe Heroi

Define um herói com os atributos nome, idade e tipo.
Possui um método chamado atacar() que imprime uma mensagem diferente dependendo do tipo do herói:
Se for "mago", o ataque é "magia".
Se for "guerreiro", o ataque é "espada".
Se for "monge", o ataque é "artes marciais".
Se for "ninja", o ataque é "shuriken".
Qualquer outro tipo, aparece "ataque desconhecido".

## Função testarHerois

Cria uma lista de heróis, cada um com seu nome, idade e tipo.
Para cada herói na lista, instancia um objeto da classe Heroi e chama o método atacar(), que exibe no console a frase informando o tipo do herói e a forma de ataque.

## Execução

Ao rodar o código, são criados quatro heróis (Merlin, Arthur, Shaolin e Ryu) e para cada um será exibida uma mensagem do tipo:

O mago atacou usando magia.

O guerreiro atacou usando espada.

O monge atacou usando artes marciais.

O ninja atacou usando shuriken.


## 1. Estrutura da Classe Heroi

A classe Heroi é um exemplo clássico de orientação a objetos (OO), que permite criar objetos com características e comportamentos próprios.

Atributos: nome, idade, tipo são definidos no construtor, tornando cada instância única.

Método: O método atacar() é responsável por definir a lógica de ataque conforme o tipo do herói.

Vantagens de usar classe:

Reutilização de código: Facilita a criação de múltiplos heróis sem repetir lógica.

Organização: Agrupa dados e funções relacionadas a herói em um único lugar

## 2. Decisão de Ataque

O método atacar() utiliza uma estrutura condicional (if/else) para decidir o tipo de ataque.

Se o tipo do herói não estiver entre mago, guerreiro, monge ou ninja, o ataque será "ataque desconhecido".

Sugestão de melhoria:

Se os tipos de herói aumentarem, o uso de um objeto (mapa) pode deixar o código mais limpo:

### JavaScript

const ataques = {

    mago: "magia",
    
    guerreiro: "espada",
    
    monge: "artes marciais",
    
    ninja: "shuriken"
};

ataque = ataques[this.tipo] || "ataque desconhecido";

## 3. Função testarHerois

Essa função serve para simular uma partida ou teste, criando heróis e demonstrando seus ataques.

Array de Objetos: Permite organizar múltiplos dados de heróis facilmente.

Laço for: Percorre cada herói, instancia e chama o método de ataque.

Boas práticas alternativas:

Poderia ser usado um forEach para maior legibilidade:

### JavaScript

listaHerois.forEach(dados => {

    const heroi = new Heroi(dados.nome, dados.idade, dados.tipo);
    
    heroi.atacar();
    
});

## 4. Saída do Código

O console exibirá:

### Code

O mago atacou usando magia.

O guerreiro atacou usando espada.

O monge atacou usando artes marciais.

O ninja atacou usando shuriken.

Cada linha mostra o tipo do herói e a ação correspondente.

# 📊 Calculadora de Média

Uma aplicação web simples e responsiva para calcular a média de três notas e classificar o desempenho do aluno.

O projeto foi desenvolvido com **HTML, CSS e JavaScript**, com foco na prática de lógica de programação, funções, arrays, validação de dados e manipulação do DOM.

## 🎯 Objetivo

Criar uma calculadora capaz de:

* Receber três notas entre 0 e 10;
* Validar os valores informados;
* Calcular a média das notas;
* Exibir a média com uma casa decimal;
* Classificar o resultado como **Ruim, Bom ou Ótimo**;
* Apresentar mensagens de erro quando os dados forem inválidos.

## 🛠️ Tecnologias utilizadas

* **HTML5**
* **CSS3**
* **JavaScript**

## ⚙️ Como funciona

O usuário informa três notas e clica em **"Calcular média"**.

O JavaScript armazena as notas em um array e utiliza uma função para calcular a média:

```javascript
function calcularMedia(notas) {
    let soma = 0;

    for (const nota of notas) {
        soma += nota;
    }

    return soma / notas.length;
}
```

Depois, outra função classifica o resultado:

```javascript
function classificarMedia(media) {
    if (media < 5) {
        return "Ruim";
    }

    if (media < 8) {
        return "Bom";
    }

    return "Ótimo";
}
```

### 📌 Classificação

| Média       | Resultado |
| ----------- | --------- |
| Abaixo de 5 | Ruim      |
| 5 até 7,9   | Bom       |
| 8 até 10    | Ótimo     |

## ✅ Validação

O formulário verifica se:

* As três notas foram preenchidas;
* Os valores estão dentro do intervalo de **0 a 10**;
* Os campos possuem valores válidos.

Caso alguma informação esteja incorreta, uma mensagem de erro é apresentada e o campo correspondente recebe o foco.

## 📱 Responsividade

O projeto possui uma adaptação para telas menores utilizando **CSS Media Queries**, permitindo que a calculadora seja utilizada também em dispositivos móveis.

## 📂 Estrutura do projeto

```text
calculadora-de-media/
│
├── index.html
├── style.css
└── script.js
```

## 🧠 Conceitos praticados

Durante o desenvolvimento foram praticados conceitos importantes de JavaScript, como:

* Funções;
* Arrays;
* Laço `for...of`;
* Condicionais `if`;
* Validação de formulários;
* Eventos de formulário;
* Manipulação do DOM;
* `querySelector` e `querySelectorAll`;
* `valueAsNumber`;
* `toLocaleString()`;
* Template de classificação de resultados.

## 🚀 Como executar

1. Clone este repositório:

```bash
git clone https://github.com/cassiano25Ubc/-Landing-Page.git
```

2. Abra a pasta do projeto.

3. Execute o arquivo `index.html` no navegador.

Não é necessário instalar nenhuma dependência.

## 📚 Próximos passos

Algumas melhorias que podem ser implementadas futuramente:

* Permitir adicionar uma quantidade maior de notas;
* Calcular diferentes tipos de média;
* Criar histórico de resultados;
* Adicionar opção para limpar os campos;
* Melhorar as animações e interações da interface;
* Evoluir a aplicação utilizando JavaScript de forma mais avançada.

---

## 👨‍💻 Autor

**Cassiano Maia**

Estudante de Ciência da Computação, desenvolvendo projetos para praticar programação e construir seu portfólio.

🔗 GitHub: [cassiano25Ubc](https://github.com/cassiano25Ubc)

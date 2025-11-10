<h1 align="center"> JORNADA JAVASCRIPT  <img width="100px" align="center" src="./assets/to-readme/javascript-svgrepo-com.svg"> </h1>
<div align="center" display="flex">
<div>
  <strong>"Oi eu sou o João"</strong>
  <img width="200px" align="center" src="./assets/to-readme/pixelart-eu.png">
  <img width="260px" align="center" src="./assets/to-readme/mew - Editado.png">
  <strong>"Oi eu sou o Nan"</strong>
</div>
  
</div>


<h2>O que é Jornada JavaScript?</h2>
<p>
  Jornada JavaScript nada mais é que uma forma pensada por mim para que eu possa aprender essa linguagem, mas também uma forma de ajudar outras pessoas que estão na mesma posição em que eu estou, um estudante de tecnologia que quer evoluir nesse seguimento.
</p>
<br>
<br>
<br>
<div>
<h2 align="center">Boas práticas</h2>
<p align="center"><img width="250px" src="./assets/to-readme/gengar-boaspraticas.gif"></p>
<h3>Quando usar const e let?</h3>
<ul>
  <li>Use const por padrão. Indica intenção de não reatribuir a referência. Isso ajuda o motor e quem lê o código.</li>
  <li>Use let apenas quando a variável será reatribuída (contador de loop, acumuladores, flags).</li>
</ul>
  <img width="600px" src="./assets/to-readme/code-print/const-let.png">
<h3>Nomes de variáveis claros (sem adivinhação)</h3>
  <ul>
    <li>Os nomes devem fazer sentido com o contexto</li>
    <li>Booleanos como perguntas (valido , aErro)</li>
    <li>Evite abreviações internas (a não ser padrões amplos como id, url)</li>
  </ul>
  <img width="700px"  src="./assets/to-readme/code-print/nome-claro.png">
  <h3>Declarar o TIPO da variável</h3>
  <p>JavaScript puro é uma linguagem de tipagem dinâmica e fraca, o que significa que não exige a declaração explícita do tipo da variável. O tipo é inferido e pode mudar durante a execução do código, todavia, declarar o tipo da variável tem uma série de benefícios:</p>
  <ul>
    <li>Reduz drasticamente a chance de bugs inesperados em produção, que são mais difíceis de rastrear.</li>
    <li>Outros desenvolvedores (ou você mesmo no futuro) podem entender imediatamente qual tipo de dado é esperado para aquela variável ou parâmetro de função.</li>
    <li>Facilita a colaboração em projetos grandes, onde muitos membros trabalham no mesmo código.</li>
  </ul>
</div>

<br>
<h2 align="center">Sintaxe básica</h2>

<h3>Caracteres:</h3>
  <ul>
    <li>O JavaScript utiliza o conjunto de caracteres <b>Unicode</b>;</li>
    <li>É uma linguagem <b>case-sensitive</b>, ou seja, diferencia caracteres maiúsculos e minúsculos.</li>
  </ul>

<h3>Comentários:</h3>
  <p>
    No JavaScript, comentários podem ser adicionados ao longo do código das seguintes maneiras:
  </p>

```javascript
// - Para comentários em uma única linha de código

/* - Para comentários em múltiplas linhas */
```

<h3>"Hello, World!"</h3>
  <p>
    Ao aprender uma nova linguagem de programação, o "Hello, World!", ou "Olá, Mundo!" é um primeiro passo extremamente importante!<br><br>
    O "Hello, World!" se refere a um programa que possui a simples função de exibir uma mensagem para o usuário, e pode ser feito no JavaScript de algumas formas, como por exemplo:
  </p>

  ```javascript
console.log("Hello, World!")

alert("Hello, World!")
```

<h2 align="center">Declarações</h2>
  <h3>Tipos de declarações</h3>
    <p>
      Existem três tipos de declarações no JavaScript, sendo elas:
    </p>
    <ul>
      <li><b>var</b>: Forma tradicional de se declarar uma variável, mas não recomendada nos dias atuais por questões de otimização;</li>
      <li><b>let</b>: Forma mais utilizada para a declaração de uma variável nos dias de hoje;</li>
      <li><b>const</b>: Declara uma constante, ou seja, seu valor não pode ser alterado após a primeira atribuição.</li>
    </ul>

```javascript
// - Exemplos de declarações utilizando os três tipos:

var exemplo_var=0;
let exemplo_let="Exemplo";
const EXEMPLO_CONST=true;
```

<h2>Tipos Primitivos e de referência</h2>
<h3>O que são tipos primitivos?</h3>
<p>Os tipos primitivos em JavaScript são os valores mais básicos e fundamentais que não são objetos. Eles são imutáveis, o que significa que uma vez criados, seu valor não pode ser alterado.

Em JavaScript, existem sete tipos primitivos:</p>
<ol>
  <li>
  <b>STRING</b> (Cadeia de Caracteres) 📝 <br>
  Representa dados textuais.
  São criados usando aspas simples (' '), aspas duplas (" ") ou template literals (crases `).

Exemplo:
```javascript
  let variavelQualquer = "Tudo dentro de aspas simples ou duplas será considerada uma STRING";
```
  </li>
    <li>
  <b>NUMBER</b> (Número) 🔢<br>
  Representa tanto números inteiros quanto números de ponto flutuante (decimais).
  Diferente de outras linguagens, não há distinção entre inteiros e decimais; todos são tratados como number.
  Inclui valores especiais como Infinity, -Infinity e NaN (Not a Number).

Exemplo:
```javascript
  let value = 20 ;
```
  </li>
  <li>
  <b>BIGINT</b> (Número Grande) 🐘<br>
  Introduzido mais recentemente, é usado para representar números inteiros com precisão arbitrária, que são muito grandes para serem representados com segurança pelo tipo number.
  São criados adicionando um n no final do número inteiro.

  Exemplo:
```javascript
  let value = 20123456789012345678901234567890n ;
```
  </li>
  <li>
  <b>BOOLEAN</b> (Booleano) ✅<br>
  Representa um valor lógico, podendo ser apenas true (verdadeiro) ou false (falso).
  Usado principalmente em estruturas de controle de fluxo (como if e while).

  Exemplo:
  ```javascript
      let joaoEstaCalvo = false
      if(joaoEstaCalvo == true){
        console.log("Chegou a hora de usar MANUAL");
      }else{
        console.log("Parece que ainda não chegou a hora de João");
      }
      
  ```
  </li>
  <b>UNDEFINED</b> (Indefinido) ❓<br>
  É o valor que uma variável tem por padrão quando ela é declarada, mas não recebe um valor explicitamente.
  Significa que a variável existe, mas ainda não foi inicializada.
  
  Exemplo:
  ```javascript
      let quandoVouFicarCalvo = undefined;
      
  ```
  </li>
  </li>
  <b>NULL</b> (Nulo) 🕳️<br>
  Representa a ausência intencional de qualquer valor de objeto ou valor.
  Diferente de undefined, é um valor que precisa ser atribuído explicitamente pelo programador para indicar que algo deve ser vazio.

  ```javascript
      let backAccount = null;
      
  ```
  </li>
  </li>
  <b>SYMBOL</b> (Símbolo) ⚛️<br>
  Introduzido no ES6, é um tipo primitivo imutável e único.
  Geralmente usado como chaves de propriedades de objetos para garantir que a chave não entre em conflito com outras chaves (propriedades ocultas).
  
  Exemplo:
   ```javascript
      // 1. Criação do Symbol
      // Cada chamada a Symbol() cria um símbolo único, mesmo que a descrição (string) seja a mesma.
      const ID_SECRETO = Symbol('id'); 
      const ID_SECRETO_DUPLICADO = Symbol('id'); 

      // 2. Uso em um Objeto
      const usuario = {
        nome: "Alice",
        idade: 30,
        [ID_SECRETO]: 12345 // Usando o Symbol como chave
        };
      // 3. Tentando acessar e comparar
        console.log(usuario.nome); // Saída: Alice

      // Acessando via chave Symbol
        console.log(usuario[ID_SECRETO]); // Saída: 12345

      // Tentando acessar com o outro Symbol (apesar de terem a mesma descrição 'id')
        console.log(usuario[ID_SECRETO_DUPLICADO]); // Saída: undefined

      // Comparação de Symbols: Symbols com descrições iguais não são iguais
        console.log(ID_SECRETO === ID_SECRETO_DUPLICADO); // Saída: false
              
  ```
  </li>



</ol>

  


// Boas práticas
/*
✅ const / let
✅ Nomes claros
✅ Funções curtas e específicas
✅ === em vez de ==
✅ Evitar variáveis globais
✅ Código modular
✅ Linters + testes
✅ Segurança básica no DOM
✅ Performance e limpeza
*/
// Case sensitive
/*
✅JavaScript é case sensitive, ou seja, diferencia maiúsculas de minúsculas.
Exemplo: nome, Nome e NOME são variáveis diferentes.
Isso vale para variáveis, funções, classes, objetos e palavras-chave — por isso, mantenha padrões consistentes de escrita (ex: camelCase para variáveis, PascalCase para classes).
*/
console.log("Olá");
// Sintaxe básica e comentário
/*
✅Sintaxe básica:
✅É o conjunto de regras que define como o código deve ser escrito.
 
✅Cada instrução termina com ; (opcional, mas recomendado).
 
✅Blocos de código usam { }.
 
✅Parênteses () definem parâmetros ou condições.
 
✅JavaScript diferencia maiúsculas e minúsculas (case sensitive).
 
  ✅  EXEMPLO ✅
 
    let nome = "Ana";
if (nome === "Ana") {
  console.log("Olá, Ana!");
}
 
 
*/
// Declaração de variáveis(var, let, const)
/*
 ✅var → Antiga forma de declarar variáveis.
 ✅Tem escopo de função e pode ser reatribuída e redeclarada.
⚠️ Evite usar — pode causar erros de escopo.
 
 ✅let → Forma moderna e mais segura.
 ✅Tem escopo de bloco ({ }) e pode ser reatribuída, mas não redeclarada.
 
 ✅const → Usada para valores constantes (que não mudam).
 ✅Também tem escopo de bloco, mas não pode ser reatribuída.
 */
let nome = "guto";
const idade = 20;
const idades = 20;
console.log("Olá " + nome);
console.log(idade + idades);
// Console e Debug
/*
 ✅console é um objeto usado para exibir informações no console (geralmente do navegador ou do VS Code).
Serve para testar, inspecionar e depurar o código.
✅Debug (depuração):
É o processo de identificar e corrigir erros no código.
Use console.log() para verificar valores.
Ou adicione o comando debugger; no código:
*/
console.warn("atenção")
console.info("Informações")
console.error("Erro")
//Tipos de dados
/*
✅JavaScript tem tipos primitivos e tipos de referência:
Primitivos: String, Number, Boolean, Undefined, Null, Symbol, BigInt.
Referência: Object, Array, Function, entre outros.
inteiro - int
real - float
booleano - bool
texto - string
 */
//STRING
 let cidade = "Americana";
 //number
 let salario = 2000;
 //bool
 let fumante = false;
 
 console.log (typeof cidade + "\n" + typeof salario + "\n" + typeof fumante + "\n");
// Operadores
//     Operador Atribuição
/*
✅O operador de atribuição é usado para definir ou atualizar valores em variáveis.
Básico:
*/
salario = 2500
//     Operadores aritméticos
/*
✅Usados para fazer cálculos matemáticos com números.
*/
let n1 = 10 , n2 = 20;
console.log(n1+n2);//soma
console.log(n1-n2);//subtração
console.log(n1/n2);//divisão
console.log(n1*n2);//multiplicação
console.log(10%2);//modulo
//     Operadores relacionais
//✅Servem para comparar valores e retornar true ou false. ✅
console.log(n1 == n2);
console.log(n1 != n2);
console.log(n1 > n2);
console.log(n1 < n2);
console.log(n1 >= n2);
console.log(n1 <= n2);
//     Operadores lógicos
/*✅Usados para combinar condições e retornar true ou false.
let idade = 20;
if (idade >= 18 && idade < 60) {
  console.log("Adulto");
}
✅
*/
let altura = 1.2;
let peso = 80;
let tipo = "criança";
console.log(altura > 1.5 && peso < 150 && tipo != "criança");
console.log(altura > 1.5 || peso < 150 || tipo != "criança");
console.log(!altura > 1.5 || peso < 150 || tipo != "criança");
// Estrutura
//     Estrutura de controle/decisão
/*
✅Usadas para tomar decisões no código com base em condições (verdadeiras ou falsas).
if / else if / else
 
    let idade = 18;
 
if (idade < 18) {
  console.log("Menor de idade");
} else if (idade === 18) {
  console.log("Tem 18 anos");
} else {
  console.log("Maior de idade");
}
 
✅switch
 
Usado quando há muitas comparações possíveis.
 
let cor = "azul";
 
switch (cor) {
  case "vermelho":
    console.log("Cor quente");
    break;
  case "azul":
    console.log("Cor fria");
    break;
  default:
    console.log("Cor não identificada");
}
 
*/
let idadeAluno = 20;
if(idadeAluno >= 18){
  console.log("Maior de idade");
}else{
  console.log("Menor de idade")
}
//     Laços de repetição
/*
✅Usados para executar um bloco de código várias vezes.
✅for — Repetição com contador
✅while — Repete enquanto a condição for verdadeira
✅do...while — Executa pelo menos uma vez, depois testa
✅for...of — Percorre valores de arrays ou strings
✅for...in — Percorre chaves de objetos
*/
let controle = 1
while(controle <=10){
  console.log(controle);
  controle++
}
console.log("----------------------------------------")
controle = 1
while(controle <= 10);{
  console.log(7*controle);
  controle++;
}

// Arrays --> vetor
/*
✅Um array (ou vetor) é uma lista de valores armazenados em uma única variável.
✅Cada valor tem um índice numérico, começando em 0.
*/
let animal = "leão";
animal = "Elefante";
 let zoologico =['leão' , 'elefante' , 'zebra' , 'ariranha' , 'lobo-guará']
// Funções personalizadas
//✅Uma função personalizada é um bloco de código criado pelo programador para executar uma tarefa específica sempre que for chamada.
 
 
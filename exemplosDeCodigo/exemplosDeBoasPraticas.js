// UTILZIAR CONST APENAS QUANDO O VALOR NÃO SERÁ REATRIBUIDO
const API_URL = '/v1/users';
let retries = 0;
while (retries < 3) { retries++; }
//Regra prática: comece com const. Se precisar reatribuir, troque para let. Evite var.


//Nomes de variáveis claros (sem adivinhação)
//Exemplo BOM
let idade = 20;
const diaDoAniversario = 7;
console.log ("João tem"+idade+" Anos e faz aniversário no dia"+diaDoAniversario)

//Exemplo RUIM
let i = 20;
const d = 7;
console.log ("João tem"+i+" Anos e faz aniversário no dia"+d)
//Apenas o dono do código conseguirá entender oq seria essa variavel I e D, 
// em contexto pequenos como esse, não é visto um grande problema, mas em contexto maiores um variavel PRECISA ter um nome que faça sentido.


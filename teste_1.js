var soma, num;
//requisita valor para num
num = Number.parseInt(prompt("Digite um numero: "));
soma = 0;
//define y como 0 e incrementa + 1, repetirá o for enquanto y for menor que num
for (var y = 0; y < num; y ++) {
//verifica se y é divisivel por 3 ou 5, e soma os valores divisiveis
  if (y % 3 === 0 || y % 5 === 0) {
    soma += y;
  }
}

console.log("A soma dos números menores que " + num + " divisiveis por 3 ou 5 é " + soma);
/*
Crie um array com 5 items (tipos variados).
*/
var arr = [
	'Douglas',
	null,
	function() {
		return 'Opa!';
	},
	{
		pessoa: {
			nome: 'Douglas',
			sobrenome: 'Lopes',
			idade: 28,
			peso: 110
		}
	},
	true
];

/*
Crie uma função chamada `addItem`, que irá adicionar itens no array criado.
A função deverá retornar o array atualizado.
*/
function addItem ( addWhere, addWhat ) {
	addWhere.push( addWhat );

	return addWhere;
}

/*
Adicione um novo array ao array criado no início do desafio, com ao menos 3
itens de tipos diferentes, mostrando o resultado no console.
*/

addItem(arr, [ 'a', true, 5 ]); // (6) ["Douglas", null, ƒ, {…}, true, Array(3)]
/*
	(6) ["Douglas", null, ƒ, {…}, true, Array(3)]
	0 : "Douglas"
	1 : null
	2 : ƒ ()
	3 : {pessoa: {…}}
	4 : true
	5 : (3) ["a", true, 5]
*/

/*
Mostre no console o segundo elemento desse último array, criado acima, com a
frase:
"O segundo elemento do segundo array é [ELEMENTO]."
*/
console.log('');

console.log('O segundo elemento do segundo array é "' + arr[5][1] + '".'); // O segundo elemento do segundo array é "true".

/*
Mostre no console quantos itens tem o primeiro array criado, com a frase:
"O primeiro array tem [QUANTIDADE DE ITENS] itens."
*/
console.log('O primeiro array tem ' + arr.length + ' itens.'); // O primeiro array tem 6 itens.

/*
Agora mostre no console quantos itens tem o segundo array criado, com a frase:
"O segundo array tem [QUANTIDADE DE ITENS] itens."
*/
console.log('O segundo array tem ' + arr[5].length + ' itens.'); // O segundo array tem 3 itens.

/*
Utilizando a estrutura de repetição `while`, mostre no console todos os números
pares entre 10 e 20, inclusive esses 2.
*/
console.log( 'Números pares entre 10 e 20:' );

var numerosPares = 10;

while ( numerosPares <= 20 ) {
	if ( numerosPares % 2 === 0 ) {
		console.log( numerosPares );
	}
	numerosPares ++;
}


/*
Na mesma ideia do exercício acima: mostre agora os números ímpares.
*/
console.log( 'Números ímpares entre 10 e 20:' );

var numerosImpares = 10;

while ( numerosImpares < 20 ) {
	if ( numerosImpares % 2 !== 0 ) {
		console.log( numerosImpares );
	}
	numerosImpares ++;
}


/*
Repita os mesmos exercícios feitos acima, mas agora usando o loop "for".
Só vamos mudar o range:
- No primeiro "for", mostre os números pares entre 100 e 120, inclusive eles;
- No segundo "for", mostre os números ímpares entre 111 e 125, inclusive eles.
*/
console.log( 'Números pares entre 100 e 120:' );

for ( var i = 100; i <= 120; i++ ) {
	if ( i % 2 === 0 ) {
		console.log( i );
	}
}

console.log( 'Números ímpares entre 111 e 125:' );

for ( var i = 111; i <= 125; i++ ) {
	if ( i % 2 !== 0 ) {
		console.log( i );
	}
}

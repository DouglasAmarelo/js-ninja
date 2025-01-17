/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/

var qualquer = ['Lorem', 'Ipsum', '$', 6, 'amet', false];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function myFunction( arr ) {
	return arr;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log( myFunction( qualquer )[1] ); // "Ipsum"

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar um índice do array que foi passado
no primeiro parâmetro. O índice a ser retornado, deve ser o número passado no
segundo parâmetro.
*/
function returnArray( arr, index) {
	return arr[index];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var arrValTiposDiferentes = [1, false, 'string', { objPropriedade: 'objValor'}, null];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/

for (var i = 0; i < arrValTiposDiferentes.length; i++) {
	console.log('Valor ' + [i], returnArray(arrValTiposDiferentes, [i]) );
}

console.log( returnArray(arrValTiposDiferentes, 0) );
console.log( returnArray(arrValTiposDiferentes, 1) );
console.log( returnArray(arrValTiposDiferentes, 2) );
console.log( returnArray(arrValTiposDiferentes, 3) );
console.log( returnArray(arrValTiposDiferentes, 4) );


/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
	- `quantidadePaginas` - Number (quantidade de páginas)
	- `autor` - String
	- `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/

function book( livro ) {
	var livros = {
		'Lorem Ipsum 01' : {
			quantidadePaginas: 150,
			autor: 'Douglas',
			editora: 'Lorem Ipsum'
		},
		'Lorem Ipsum 02' : {
			quantidadePaginas: 300,
			autor: 'Lopes',
			editora: 'Lorem Ipsum'
		},
		'Lorem Ipsum 03' : {
			quantidadePaginas: 450,
			autor: 'Nascimento',
			editora: 'Lorem Ipsum'
		}
	}

	return livro !== undefined ? livros[livro] : livros;
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log( book() );

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
console.log( 'O livro Lorem Ipsum 02 tem ' + book('Lorem Ipsum 02').quantidadePaginas + ' páginas!' );

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log( 'O autor do livro Lorem Ipsum 01 é ' + book('Lorem Ipsum 01').autor + '.' );

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log( 'O livro Lorem Ipsum 03 foi publicado pela editora ' + book('Lorem Ipsum 01').editora + '.' );
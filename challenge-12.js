(function(){
	/*
	Envolva todo o conteúdo desse arquivo em uma IIFE.
	*/

	/*
	Crie um objeto chamado `person`, com as propriedades:
		`name`: String
		`lastname`: String
		`age`: Number
	Preencha cada propriedade com os seus dados pessoais, respeitando o tipo
	de valor para cada propriedade.
	*/
	person = {
		name    : 'Douglas',
		lasname : 'Lopes',
		age     : 28
	};
	console.log( 'Propriedades de "person":' );

	/*
	Mostre no console, em um array, todas as propriedades do objeto acima.
	Não use nenhuma estrutura de repetição, nem crie o array manualmente.
	*/
	console.log( Object.keys( person ) );

	/*
	Crie um array vazio chamado `books`.
	*/
	var books = [];

	/*
	Adicione nesse array 3 objetos, que serão 3 livros. Cada livro deve ter a
	seguintes propriedades:
	`name`: String
	`pages`: Number
	*/
	var book1 = {
		name: 'Lorem 01',
		page: 100
	};

	books.push( book1 );

	var book2 = {
		name: 'Lorem 02',
		page: 200
	};

	books.push( book2 );

	var book3 = {
		name: 'Lorem 03',
		page: 300
	};

	books.push( book3 );

	console.log( '\nLista de livros:' );

	/*
	Mostre no console todos os livros.
	*/

	for ( var i = 0; i < books.length; i++) {
		var book = books[i].name;
		console.log(' - Livro : ' + book );
	}

	console.log( '\nLivro que está sendo removido:' );
	/*
	Remova o último livro, e mostre-o no console.
	*/
	console.log( books.pop().name );

	console.log( '\nAgora sobraram somente os livros:' );
	/*
	Mostre no console os livros restantes.
	*/
	for ( var i = 0; i < books.length; i++) {
		var book = books[i].name;
		console.log(' - Livro : ' + book );
	}

	/*
	Converta os objetos que ficaram em `books` para strings.
	*/
	var livros = JSON.stringify( books );
	console.log( '\nLivros em formato string:' );

	/*
	Mostre os livros nesse formato no console:
	*/
	console.log( livros );

	/*
	Converta os livros novamente para objeto.
	*/
	JSON.parse( livros );
	console.log( '\nAgora os livros são objetos novamente:' );

	/*
	Mostre no console todas as propriedades e valores de todos os livros,
	no formato abaixo:
		"[PROPRIEDADE]: [VALOR]"
	*/
	for ( var i = 0; i < books.length; i++ ) {
		var book = books[i];

		for ( var prop in book ) {
			console.log( book + ' : ' + book[prop] );
		}
	}

	/*
	Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
	seu nome. Adicione seu nome completo no array.
	*/
	var myName = ['D', 'o', 'u', 'g', 'l', 'a', 's'];
	console.log( '\nMeu nome é:');

	/*
	Juntando todos os itens do array, mostre no console seu nome.
	*/
	console.log( myName.join('') );

	console.log( '\nMeu nome invertido é:' );

	/*
	Ainda usando o objeto acima, mostre no console seu nome invertido.
	*/
	console.log( myName.reverse().join('') );

	console.log( '\nAgora em ordem alfabética:' );
	/*
	Mostre todos os itens do array acima, odenados alfabéticamente.
	*/
	console.log( myName.sort().join('') );
})();

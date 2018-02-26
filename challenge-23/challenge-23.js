(function( win, doc ) {
	'use strict';

	/*
	Vamos desenvolver mais um projeto. A ideia é fazer uma mini-calculadora.
	As regras são:
	- Deve ter somente 1 input, mas não deve ser possível entrar dados nesse input
	diretamente;
	- O input deve iniciar com valor zero;
	- Deve haver 10 botões para os números de 0 a 9. Cada botão deve ser um número;
	- Deve haver 4 botões para as operações principais: soma (+), subtração(-),
	multiplicação(x) e divisão(÷);
	- Deve haver um botão de "igual" (=) que irá calcular os valores e um botão "CE"
	que irá limpar o input, deixando-o com valor 0;
	- A cada número pressionado, o input deve atualizar concatenando cada valor
	digitado, como em uma calculadora real;
	- Ao pressionar um botão com uma das 4 operações, deve aparecer o símbolo da
	operação no input. Se o último caractere no input já for um símbolo de alguma
	operação, esse caractere deve ser substituído pelo último pressionado.
	Exemplo:
	- Se o input tem os valores: "1+2+", e for pressionado o botão de
	multiplicação (x), então no input deve aparecer "1+2x".
	- Ao pressionar o botão de igual, o resultado do cálculo deve ser mostrado no
	input;
	- Ao pressionar o botão "CE", o input deve ficar zerado.
	*/

	// Screen
	var $screen = doc.querySelector( '[data-js="screen"]' );

	// Numbers
	// var $n1 = doc.querySelector( '[data-js="n1"]' );
	// var $n2 = doc.querySelector( '[data-js="n2"]' );
	// var $n3 = doc.querySelector( '[data-js="n3"]' );
	// var $n4 = doc.querySelector( '[data-js="n4"]' );
	// var $n5 = doc.querySelector( '[data-js="n5"]' );
	// var $n6 = doc.querySelector( '[data-js="n6"]' );
	// var $n7 = doc.querySelector( '[data-js="n7"]' );
	// var $n8 = doc.querySelector( '[data-js="n8"]' );
	// var $n9 = doc.querySelector( '[data-js="n9"]' );
	// var $n0 = doc.querySelector( '[data-js="n0"]' );

	var $buttons = doc.querySelectorAll( '[data-js^="n"], [data-js^="op-"]' );
	// var $buttons = doc.querySelectorAll( 'button' );

	// Symbols
	var $sum   = doc.querySelector( '[data-js="op-sum"]' );
	var $sub   = doc.querySelector( '[data-js="op-subtraction"]' );
	var $mult  = doc.querySelector( '[data-js="op-multiplication"]' );
	var $div   = doc.querySelector( '[data-js="op-division"]' );
	var $equal = doc.querySelector( '[data-js="equal"]' );
	var $clean = doc.querySelector( '[data-js="clean"]' );

	var screenNumbers = [];

	$buttons.forEach(function( item, index ) {
		item.addEventListener('click', function( event ) {
			event.preventDefault();
			updateScreen( this.innerText );

			console.log( screenNumbers );

			console.log( justNumbers( screenNumbers ) );
		}, false);
	});

	$clean.addEventListener('click', function( event ) {
		event.preventDefault();
		clearScreen();
	});

	function updateScreen( content ) {
		screenNumbers.push( content );
		$screen.value = screenNumbers.join( '' );
	}

	function clearScreen() {
		screenNumbers = [];
		$screen.value = 0;
	}

	function justNumbers( arr ) {
		typeof arr;
		typeof arr.join( ', ');
		// arr.replace( /\D+/g, '' );
	}

})( window, document );

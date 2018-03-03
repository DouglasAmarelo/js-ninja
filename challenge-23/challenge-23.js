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

	// Buttons
	var $numButtons = doc.querySelectorAll( '[data-js^="n"]' );
	var $opButtons  = doc.querySelectorAll( '[data-js^="op-"]' );
	var $equal      = doc.querySelector( '[data-js="equal"]' );
	var $clean      = doc.querySelector( '[data-js="clean"]' );

	var screenNumbers = [];
	var screenLength;

	// Click events
	$numButtons.forEach(function( button ) {
		button.addEventListener('click', numButtonsClick, false);
	});

	$opButtons.forEach(function( button ) {
		button.addEventListener('click', opButtonsClick, false);
	});

	$clean.addEventListener('click', clearScreen, false);

	function numButtonsClick() {
		updateScreen( this.innerText );
	}

	function opButtonsClick() {
		removeLastItemIfItIsAnOperator();
		updateScreen( this.innerText );
	}


	$equal.addEventListener('click', function( event ) {
		event.preventDefault();

		removeLastItemIfItIsAnOperator();

		var allValues = $screen.value.match(/\d+[+x÷-]?/g);

		var result = allValues.reduce(function( accumulated, actual ) {
			var firstValue = accumulated.slice(0, -1);
			var operator   = accumulated.split( '' ).pop();
			var lastValue  = actual;

			switch ( operator ) {
				case '+':
					return Number( firstValue ) + Number( lastValue );
				case '-':
					return Number( firstValue ) - Number( lastValue );
				case 'x':
					return Number( firstValue ) * Number( lastValue );
				case '÷':
					return Number( firstValue ) / Number( lastValue );
			}
		});

		screenNumbers = [];
		updateScreen( result );

	}, false);

	function updateScreen( str ) {
		if ( str !== undefined ) {
			screenNumbers.push( str );
		}

		$screen.value = screenNumbers.join( '' );
		screenLength = screenNumbers.length - 1;
	}

	function clearScreen() {
		screenNumbers = [];
		$screen.value = 0;
	}

	function isLastItemAnOperator( str ) {
		var regex = /\D+/gim;
		return regex.test( str );
	}

	function removeLastItemIfItIsAnOperator() {
		if ( isLastItemAnOperator( screenNumbers[ screenLength ] ) ) {
			screenNumbers.pop();
		}
	}

})( window, document );

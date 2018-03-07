(function( win, doc ) {
	'use strict';

	function DOM( elements ) {
		this.element = doc.querySelectorAll( elements );
	}

	// Extensão da função DOM
	DOM.prototype.on = function on( listenerEvent, callbackFunction ) {
		Array.prototype.map.call(this.element, function( element ) {
			element.addEventListener( listenerEvent, callbackFunction );
		});
	};

	DOM.prototype.off = function off( listenerEvent, callbackFunction ) {
		Array.prototype.map.call(this.element, function( element ) {
			element.removeEventListener( listenerEvent, callbackFunction );
		});
	}

	DOM.prototype.get = function get() {
		return this.element;
	}

	/*
	Aproveitando a lib DOM que fizemos na semana anterior, crie agora para ela
	métodos semelhantes aos que existem no array, mas que sirvam para os
	elementos do DOM selecionados.
	Crie os seguintes métodos:
	- forEach, map, filter, reduce, reduceRight, every e some.
	Crie também métodos que verificam o tipo do objeto passado por parâmetro.
	Esses métodos não precisam depender de criar um novo elmento do DOM, podem
	ser métodos estáticos.
	Métodos estáticos não obrigam o uso do `new`, podendo ser usados diretamente
	no objeto, como nos exemplos abaixo:
	DOM.isArray([1, 2, 3]); // true
	DOM.isFunction(function() {}); // true
	DOM.isNumber('numero'); // false
	Crie os seguintes métodos para verificação de tipo:
	- isArray, isObject, isFunction, isNumber, isString, isBoolean, isNull.
	O método isNull deve retornar `true` se o valor for null ou undefined.
	*/

	DOM.prototype.DOMForEach = function( element, callbackFunction ) {
		Array.prototype.forEach.call( element, callbackFunction );
	}

	var teste = new DOM();
	console.log( teste.DOMForEach([1, 2, 3, 4, 5], function( item, index ) {
		console.log( 'item ' + index, ( item * item ) );
	}) );

	DOM.isArray = function isArray() {
		return Object.prototype.toString() === [Object Array] ? true : false;
	}

	console.log( DOM.isArray( [1,2,3,4,5] ) );


})( window, document );

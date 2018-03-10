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
	};

	DOM.prototype.get = function get() {
		return this.element;
	};

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

	DOM.prototype.forEach = function forEach() {

		console.log(this);
		return Array.prototype.forEach.apply( this.element, arguments );
	};

	DOM.prototype.map = function map() {
		return Array.prototype.map.apply( this.element, arguments );
	};

	DOM.prototype.filter = function filter() {
		return Array.prototype.filter.apply( this.element, arguments );
	};

	DOM.prototype.reduce = function reduce() {
		return Array.prototype.reduce.apply( this.element, arguments );
	};

	DOM.prototype.reduceRight = function reduceRight() {
		return Array.prototype.reduceRight.apply( this.element, arguments );
	};

	DOM.prototype.every = function every() {
		return Array.prototype.every.apply( this.element, arguments );
	};

	DOM.prototype.some = function some() {
		return Array.prototype.some.apply( this.element, arguments );
	};


	DOM.prototype.isArray = function isArray( param ) {
		return returnParam( param ) === '[object Array]';
	}

	DOM.prototype.isObject = function isObject( param ) {
		return returnParam( param ) === '[object Object]';
	}

	DOM.prototype.isFunction = function isFunction( param ) {
		return returnParam( param ) === '[object Function]';
	}

	DOM.prototype.isNumber = function isNumber( param ) {
		return returnParam( param ) === '[object Number]';
	}

	DOM.prototype.isString = function isString( param ) {
		return returnParam( param ) === '[object String]';
	}

	DOM.prototype.isBoolean = function isBoolean( param ) {
		return returnParam( param ) === '[object Boolean]';
	}

	DOM.prototype.isNull = function isNull( param ) {
		return returnParam( param ) === '[object Null]' || returnParam( param ) === '[object Undefined]';
	}

	function returnParam( param ) {
		return Object.prototype.toString.call( param );
	}

})( window, document );

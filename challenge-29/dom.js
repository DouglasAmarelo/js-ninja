(function( win, doc ) {
	'use strict';

	function DOM( elements ) {
		this.element = doc.querySelectorAll( elements );
	}

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

	win.DOM = DOM;
})( window, document);
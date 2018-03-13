(function( win, doc ) {
	'use strict';

	/*
	No HTML:
	- Crie um formulário com um input de texto que receberá um CEP e um botão
	de submit;
	- Crie uma estrutura HTML para receber informações de endereço:
	"Logradouro, Bairro, Estado, Cidade e CEP." Essas informações serão
	preenchidas com os dados da requisição feita no JS.
	- Crie uma área que receberá mensagens com o status da requisição:
	"Carregando, sucesso ou erro."
	No JS:
	- O CEP pode ser entrado pelo usuário com qualquer tipo de caractere, mas
	deve ser limpo e enviado somente os números para a requisição abaixo;
	- Ao submeter esse formulário, deve ser feito um request Ajax para a URL:
	"https://viacep.com.br/ws/[CEP]/json/", onde [CEP] será o CEP passado
	no input criado no HTML;
	- Essa requisição trará dados de um CEP em JSON. Preencha campos na tela
	com os dados recebidos.
	- Enquanto os dados são buscados, na área de mensagens de status, deve mostrar
	a mensagem: "Buscando informações para o CEP [CEP]..."
	- Se não houver dados para o CEP entrado, mostrar a mensagem:
	"Não encontramos o endereço para o CEP [CEP]."
	- Se houver endereço para o CEP digitado, mostre a mensagem:
	"Endereço referente ao CEP [CEP]:"
	- Utilize a lib DOM criada anteriormente para facilitar a manipulação e
	adicionar as informações em tela.
	*/

	function app() {
		var $formCep     = new DOM('[data-js="form-cep"]');
		var $campoCep    = doc.querySelector('#cep');
		var btnSubmit    = doc.querySelector('[type="submit"]');
		var campoMessage = doc.querySelector('.messages');
		var ajax         = new XMLHttpRequest();
		var data;

		$formCep.on('submit', handleSubmitFormCep);

		function handleSubmitFormCep( event ) {
			event.preventDefault();

			getDados('GET', 'https://viacep.com.br/ws/' + justNumber( $campoCep.value ) + '/json/');
		}

		function justNumber( text ) {
			var numbers = text.replace(/\D+/gmi, '');
			return numbers;
		}

		function isRequestOk( ) {
			return ajax.readyState === 4 && ajax.status === 200;
		}

		function getDados( method, url ) {
			ajax.open(method, url);
			ajax.send();

			getMessages('loading');

			ajax.addEventListener('readystatechange', readystatechange, false );
		}

		function readystatechange() {
			if ( isRequestOk() ) {
				getMessages('ok');
				updateTable();
			}
		}

		function parseData() {
			var result;

			try {
				result = JSON.parse( ajax.responseText );
			}
			catch(e) {
				result = null;
			}

			return result;
		}

		function updateTable() {
			var data = parseData();

			if( !data ) {
				getMessages('error');

				doc.querySelector('.td-logradouro').innerText = '-';
				doc.querySelector('.td-bairro').innerText     = '-';
				doc.querySelector('.td-uf').innerText         = '-';
				doc.querySelector('.td-localidade').innerText = '-';
				doc.querySelector('.td-cep').innerText        = '-';
			}

			doc.querySelector('.td-logradouro').innerText = data.logradouro;
			doc.querySelector('.td-bairro').innerText     = data.bairro;
			doc.querySelector('.td-uf').innerText         = data.uf;
			doc.querySelector('.td-localidade').innerText = data.localidade;
			doc.querySelector('.td-cep').innerText        = data.cep;
		}

		function getMessages( type ) {
			var messages = {
				loading : 'Buscando informações para o CEP ' + $campoCep.value + '...',
				ok      : 'Endereço referente ao CEP ' + $campoCep.value,
				error   : 'Não encontramos o endereço para o CEP ' + $campoCep.value + '.'
			};

			campoMessage.textContent = messages[type];
		}
	}

	app();

})( window, document, window.DOM );

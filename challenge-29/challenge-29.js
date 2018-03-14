(function( win, doc ) {
	'use strict';

	/*
	Vamos estruturar um pequeno app utilizando módulos.
	Nosso APP vai ser um cadastro de carros. Vamos fazê-lo por partes.
	A primeira etapa vai ser o cadastro de veículos, de deverá funcionar da
	seguinte forma:
	- No início do arquivo, deverá ter as informações da sua empresa - nome e
	telefone (já vamos ver como isso vai ser feito)
	- Ao abrir a tela, ainda não teremos carros cadastrados. Então deverá ter
	um formulário para cadastro do carro, com os seguintes campos:
	  - Imagem do carro (deverá aceitar uma URL)
	  - Marca / Modelo
	  - Ano
	  - Placa
	  - Cor
	  - e um botão "Cadastrar"
	Logo abaixo do formulário, deverá ter uma tabela que irá mostrar todos os
	carros cadastrados. Ao clicar no botão de cadastrar, o novo carro deverá
	aparecer no final da tabela.
	Agora você precisa dar um nome para o seu app. Imagine que ele seja uma
	empresa que vende carros. Esse nosso app será só um catálogo, por enquanto.
	Dê um nome para a empresa e um telefone fictício, preechendo essas informações
	no arquivo company.json que já está criado.
	Essas informações devem ser adicionadas no HTML via Ajax.
	Parte técnica:
	Separe o nosso módulo de DOM criado nas últimas aulas em
	um arquivo DOM.js.
	E aqui nesse arquivo, faça a lógica para cadastrar os carros, em um módulo
	que será nomeado de "app".
	*/

	function app() {
		var $nomeEmpresa = doc.querySelector('.nome-empresa');
		var $telEmpresa = doc.querySelector('.telefone-empresa');

		var $formCarros = doc.querySelector('[data-js="form-carros"]');
		var $imagem     = doc.querySelector('[data-js="imagem"]');
		var $marca      = doc.querySelector('[data-js="marca-modelo"]');
		var $ano        = doc.querySelector('[data-js="ano"]');
		var $placa      = doc.querySelector('[data-js="placa"]');
		var $cor        = doc.querySelector('[data-js="cor"]');
		var $cadastrar  = doc.querySelector('[data-js="cadastrar"]');

		var tdImagem      = doc.querySelector('.td-imagem');
		var tdMarcaModelo = doc.querySelector('.td-marca-modelo');
		var tdAno         = doc.querySelector('.td-ano');
		var tdPlaca       = doc.querySelector('.td-placa');
		var tdCor         = doc.querySelector('.td-cor');

		var ajax = new XMLHttpRequest();

		$formCarros.addEventListener('submit', handleSubmit, false);

		function getData() {
			ajax.open('GET', 'data/company.json');
			ajax.send();

			ajax.addEventListener('readystatechange', updateCompantInfo, false);
		}
		getData();

		function parseData() {
			var result;

			if ( ajax.readyState === 4 && ajax.status === 200 ) {
				try {
					result = JSON.parse( ajax.responseText );
				}
				catch(e) {
					result = null;
				}
			}

			return result;
		}

		function updateCompantInfo() {
			var data = parseData();
			$nomeEmpresa.textContent = data.name;
			$telEmpresa.textContent = data.phone;
		}

		function handleSubmit( event ) {
			event.preventDefault();
			updateTable();
		}

		function updateTable() {
			tdImagem.textContent = $imagem.value;
			tdMarcaModelo.textContent = $marca.value;
			tdAno.textContent = $ano.value;
			tdPlaca.textContent = $placa.value;
			tdCor.textContent = $cor.value;
		}

	}

	app();

})( window, document );
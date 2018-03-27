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
		var $telEmpresa  = doc.querySelector('.telefone-empresa');

		var $formCarros = doc.querySelector('[data-js="form-carros"]');
		var $imagem     = doc.querySelector('[data-js="imagem"]');
		var $marca      = doc.querySelector('[data-js="marca-modelo"]');
		var $ano        = doc.querySelector('[data-js="ano"]');
		var $placa      = doc.querySelector('[data-js="placa"]');
		var $cor        = doc.querySelector('[data-js="cor"]');
		var $cadastrar  = doc.querySelector('[data-js="cadastrar"]');

		var $table        = doc.querySelector('.table');
		var tdImagem      = doc.querySelector('.td-imagem');
		var tdMarcaModelo = doc.querySelector('.td-marca-modelo');
		var tdAno         = doc.querySelector('.td-ano');
		var tdPlaca       = doc.querySelector('.td-placa');
		var tdCor         = doc.querySelector('.td-cor');

		var ajax = new XMLHttpRequest();

		var self;

		return {
			init: function() {
				self = this;
				$formCarros.addEventListener('submit', self.handleSubmit, false);

				this.getData();
			},

			getData: function() {
				ajax.open('GET', 'data/company.json');
				ajax.send();
				ajax.addEventListener('readystatechange', self.updateCompantInfo, false);
			},

			parseData: function() {
				var result = '';

				if ( ajax.readyState === 4 && ajax.status === 200 ) {
					try {
						result = JSON.parse( ajax.responseText );
					}
					catch(e) {
						console.log('Errooooo: ' + e);
					}
				}

				return result;
			},

			updateCompantInfo: function() {
				var data = self.parseData();
				$nomeEmpresa.textContent = data.name;
				$telEmpresa.textContent = data.phone;
			},

			handleSubmit: function( event ) {
				event.preventDefault();

				if ( $imagem.value === '' || $marca.value === '' || $ano.value === '' || $placa.value === '' || $cor.value === '' ) {
					alert('Favor preencher todos os campos');
					return;
				}

				self.updateTable();
			},

			randomImage: function() {
				var images = [
					'http://images.e-konomista.pt/repo/mclaren-mp4.jpg',
					'https://blog.instacarro.com/wp-content/uploads/2017/11/carros-luxuosos.jpg',
					'https://www.clickgratis.com.br/fotos-imagens/carros/aHR0cHM6Ly9pY2RuMS5kaWdpdGFsdHJlbmRzLmNvbS9pbWFnZS9kaWdpdGFsdHJlbmRzX2VzLzIwMTctY2hldnJvbGV0LWNvcnZldHRlLWdyYW5kLXNwb3J0XzA4LTcyMHg3MjAtNzIweDQ4MC5qcGc=.jpg',
					'http://fotos.jornaldocarro.estadao.com.br/uploads/2017/09/30172748/Hennessey-Venom_GT-2011-1280-05-1160x709.jpg'
				];
				var imageLength = images.length;

				return '<img src="' + images[ Math.floor( Math.random() * imageLength) ] + '" width="200" />';
			},

			updateTable: function() {
				var template = `
					<td>${ this.randomImage() }</td>
					<td>${ $marca.value }</td>
					<td>${ $ano.value }</td>
					<td>${ $placa.value }</td>
					<td>${ $cor.value }</td>
					<td>${ $cor.value }</td>
				`;
				var $tr = doc.createElement('tr');

				$tr.innerHTML = template;
				$table.appendChild( $tr );
			}
		}
	}

	app().init();

})( window, document );
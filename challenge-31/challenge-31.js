(function( win, doc ) {
	'use strict';

	/*
	Agora vamos criar a funcionalidade de "remover" um carro. Adicione uma nova
	coluna na tabela, com um botão de remover.
	Ao clicar nesse botão, a linha da tabela deve ser removida.
	Faça um pull request no seu repositório, na branch `challenge-31`, e cole
	o link do pull request no `console.log` abaixo.
	Faça um pull request, também com a branch `challenge-31`, mas no repositório
	do curso, para colar o link do pull request do seu repo.
	*/

	// console.log('Link do pull request do seu projeto');

	function app() {
		var $nomeEmpresa = doc.querySelector('.nome-empresa');
		var $telEmpresa  = doc.querySelector('.telefone-empresa');

		var $formCarros = doc.querySelector('[data-js="form-carros"]');
		var $imagem     = $formCarros.querySelector('[data-js="imagem"]');
		var $marca      = $formCarros.querySelector('[data-js="marca-modelo"]');
		var $ano        = $formCarros.querySelector('[data-js="ano"]');
		var $placa      = $formCarros.querySelector('[data-js="placa"]');
		var $cor        = $formCarros.querySelector('[data-js="cor"]');
		var $cadastrar  = $formCarros.querySelector('[data-js="cadastrar"]');

		var $table        = doc.querySelector('.table');
		var tdImagem      = $table.querySelector('.td-imagem');
		var tdMarcaModelo = $table.querySelector('.td-marca-modelo');
		var tdAno         = $table.querySelector('.td-ano');
		var tdPlaca       = $table.querySelector('.td-placa');
		var tdCor         = $table.querySelector('.td-cor');

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

			handleSubmit: function(e) {
				e.preventDefault();

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
					<td>${ self.randomImage() }</td>
					<td>${ $marca.value }</td>
					<td>${ $ano.value }</td>
					<td>${ $placa.value }</td>
					<td>${ $cor.value }</td>
					<td><button class="remover" data-js="remover">remover</button></td>
				`;
				var $tr = doc.createElement('tr');

				$tr.innerHTML = template;
				$table.appendChild( $tr );

				self.removeItem();
			},

			removeItem: function() {
				var btnRemove = doc.querySelectorAll('[data-js="remover"]');

				btnRemove.forEach(function(btn) {
					btn.addEventListener('click', function(e) {
						e.preventDefault();

						this.parentNode.parentNode.remove();
					}, false);
				});
			}
		}
	}

	app().init();

})( window, document );
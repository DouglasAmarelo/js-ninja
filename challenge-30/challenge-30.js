(function( win, doc ) {
	'use strict';

	/*
	A loja de carros será nosso desafio final. Na aula anterior, você fez a parte
	do cadastro dos carros. Agora nós vamos começar a deixar ele com cara de
	projeto mesmo.
	Crie um novo repositório na sua conta do GitHub, com o nome do seu projeto.
	Na hora de criar, o GitHub te dá a opção de criar o repositório com um
	README. Use essa opção.
	Após criar o repositório, clone ele na sua máquina.
	Crie uma nova branch chamada `challenge-30`, e copie tudo o que foi feito no
	desafio da aula anterior para esse novo repositório, nessa branch
	`challenge-30`.
	Adicione um arquivo na raiz desse novo repositório chamado `.gitignore`.
	O conteúdeo desse arquivo deve ser somente as duas linhas abaixo:
	node_modules
	npm-debug.log
	Faça as melhorias que você achar que são necessárias no seu código, removendo
	duplicações, deixando-o o mais legível possível, e então suba essa alteração
	para o repositório do seu projeto.
	Envie um pull request da branch `challenge-30` para a `master` e cole aqui
	nesse arquivo, dentro do `console.log`, o link para o pull request no seu
	projeto.
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
				`;
				var $tr = doc.createElement('tr');

				$tr.innerHTML = template;
				$table.appendChild( $tr );
			}
		}
	}

	app().init();

})( window, document );
(function(win, doc){
	'use strict';

	/*
	Hora de finalizar nosso projeto!

	Já temos o cadastro funcionando e persistindo em memória;
	Já estamos deletando o carro da tabela (no frontend).

	Mas se você perceber, se você recarregar a tela, o carro ainda vai estar lá.
	Agora você precisa fazer com que, ao clicar no botão de deletar, o carro seja
	removido da tabela e também seja deletado do servidor.

	Para fazer isso, você precisa enviar o verbo HTTP "DELETE" para a mesma URL
	que você faz o POST para cadastrar o carro:
	`http://localhost:3000/car`, só que, ao invés de enviar todas as informações
	do carro, como você faz para cadastrar, você deve enviar somente a placa
	do carro.

	Fazendo isso, ao recarregar a tela, a tabela deve mostrar os carros atualizados.

	A lógica do servidor que está criada nesso diretório desse desafio é o mesmo
	do desafio anterior, com a diferença que, nesse desafio, nós temos a
	implementação da regra para a deleção do carro =)

	A regra é a mesma das anteriores: crie uma branch `challenge-33` no seu
	repositório do GitHub, e envie o pull request para lá.

	Depois, envie um pull request no repositório do curso, colocando no console.log
	abaixo a URL do pull request no seu repositório.
	*/
	// console.log('Link do pull request do seu projeto');

	function app() {
		var $formCarros = doc.querySelector('[data-js="form-carros"]');
		var $imagem     = $formCarros.querySelector('[data-js="imagem"]');
		var $marca      = $formCarros.querySelector('[data-js="marca-modelo"]');
		var $ano        = $formCarros.querySelector('[data-js="ano"]');
		var $placa      = $formCarros.querySelector('[data-js="placa"]');
		var $cor        = $formCarros.querySelector('[data-js="cor"]');
		var $btnCadastrar  = $formCarros.querySelector('[data-js="cadastrar"]');

		var $table        = doc.querySelector('.table');

		var ajaxGet = new XMLHttpRequest();
		var ajaxPost = new XMLHttpRequest();
		var ajaxDelete = new XMLHttpRequest();

		var self;

		return {
			init: function() {
				self = this;
				$formCarros.addEventListener('submit', self.handleSubmit, false);
				self.getCars();
			},

			// Get all cars from database
			getCars: function() {
				ajaxGet.open('GET', 'http://localhost:3000/car');
				ajaxGet.send();

				ajaxGet.onreadystatechange = function() {
					if ( ajaxGet.readyState === 4 && ajaxGet.status === 200 ) {
						self.updateTable( JSON.parse( ajaxGet.responseText ) );
					}
				}
			},

			// Send a new car to the database
			postCars: function( data ) {
				ajaxPost.open('POST', 'http://localhost:3000/car');
				ajaxPost.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
				ajaxPost.send( data );

				ajaxPost.onreadystatechange = function() {
					if ( ajaxPost.readyState === 4 && ajaxPost.status === 200 ) {
						console.log( JSON.parse( ajaxPost.responseText ).message );
					}
				}
			},

			// Delete one car at the database
			deleteCars: function( plate ) {
				ajaxDelete.open('DELETE', 'http://localhost:3000/car');
				ajaxDelete.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
				ajaxDelete.send( plate );

				ajaxDelete.onreadystatechange = function() {
					if ( ajaxDelete.readyState === 4 && ajaxDelete.status === 200 ) {
						console.log( JSON.parse( ajaxDelete.responseText ).message );
					}
				}
			},

			// Send the form register
			handleSubmit: function(e) {
				var formData = `image=${$imagem.value}&brandModel=${$marca.value}&year=${$ano.value}&plate=${$placa.value}&color=${$cor.value}`;

				e.preventDefault();

				if ( $imagem.value === '' || $marca.value === '' || $ano.value === '' || $placa.value === '' || $cor.value === '' ) {
					alert('Favor preencher todos os campos');
					return;
				}

				self.postCars( formData );
				self.getCars();
			},

			// Ipdate all the table on the page
			updateTable: function( data ) {
				var $tBody = $table.querySelector('tbody');

				$tBody.innerHTML = '';

				data.map(function( carro ) {
					var $tr = doc.createElement('tr');
					var template = `
						<td data-js="image">${ carro.image }</td>
						<td data-js="brand-model">${ carro.brandModel }</td>
						<td data-js="year">${ carro.year }</td>
						<td data-js="plate">${ carro.plate }</td>
						<td data-js="color">${ carro.color }</td>
						<td data-js="btn-remove"><button class="remover" data-js="remover">remover</button></td>
					`;

					$tr.innerHTML = template;
					$tBody.prepend( $tr );
				});

				self.removeItem();
			},

			// Button remove cars
			removeItem: function() {
				var btnRemove = doc.querySelectorAll('[data-js="remover"]');

				btnRemove.forEach(function(btn) {
					btn.addEventListener('click', function(e) {
						var $tr = this.parentNode.parentNode;
						var plate = $tr.querySelector('[data-js="plate"]').textContent;

						e.preventDefault();

						self.deleteCars( plate );
						self.getCars();
					}, false);
				});
			}
		}
	}

	app().init();

})(window, document);


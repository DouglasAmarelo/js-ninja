(function( win, doc ){
	'use strict';
	/*
	Já temos as funcionalidades de adicionar e remover um carro. Agora, vamos persistir esses dados,
	salvando-os temporariamente na memória de um servidor.

	Nesse diretório do `challenge-32` tem uma pasta `server`. É um servidor simples, em NodeJS, para
	que possamos utilizar para salvar as informações dos nossos carros.

	Para utilizá-lo, você vai precisar fazer o seguinte:

	- Via terminal, acesse o diretório `server`;
	- execute o comando `npm install` para instalar as dependências;
	- execute `node app.js` para iniciar o servidor.

	Ele irá ser executado na porta 3000, que pode ser acessada via browser no endereço:
	`http://localhost:3000`

	O seu projeto não precisa estar rodando junto com o servidor. Ele pode estar em outra porta.
	As mudanças que você irá precisar fazer no seu projeto são:

	- Para listar os carros cadastrados ao carregar o seu projeto, faça um request GET no endereço
	`http://localhost:3000/car`
	- Para cadastrar um novo carro, faça um POST no endereço `http://localhost:3000/car`, enviando
	os seguintes campos:
		- `image` com a URL da imagem do carro;
		- `brandModel`, com a marca e modelo do carro;
		- `year`, com o ano do carro;
		- `plate`, com a placa do carro;
		- `color`, com a cor do carro.

	Após enviar o POST, faça um GET no `server` e atualize a tabela para mostrar o novo carro cadastrado.

	Crie uma branch `challenge-32` no seu projeto, envie um pull request lá e cole nesse arquivo a URL
	do pull request.
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
		var tdImagem      = $table.querySelector('.td-imagem');
		var tdMarcaModelo = $table.querySelector('.td-marca-modelo');
		var tdAno         = $table.querySelector('.td-ano');
		var tdPlaca       = $table.querySelector('.td-placa');
		var tdCor         = $table.querySelector('.td-cor');

		var ajaxGet = new XMLHttpRequest();
		var ajaxPost = new XMLHttpRequest();

		var self;

		return {
			init: function() {
				self = this;
				$formCarros.addEventListener('submit', self.handleSubmit, false);
				self.getCars();
			},

			getCars: function() {
				ajaxGet.open('GET', 'http://localhost:3000/car');
				ajaxGet.send();

				ajaxGet.onreadystatechange = function() {
					if ( ajaxGet.readyState === 4 && ajaxGet.status === 200 ) {
						self.updateTable( JSON.parse( ajaxGet.responseText ) );
					}
				}
			},

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

			handleSubmit: function(e) {
				e.preventDefault();

				if ( $imagem.value === '' || $marca.value === '' || $ano.value === '' || $placa.value === '' || $cor.value === '' ) {
					alert('Favor preencher todos os campos');
					return;
				}

				var formData = `image=${$imagem.value}&brandModel=${$marca.value}&year=${$ano.value}&plate=${$placa.value}&color${$cor.value}`;

				self.postCars( formData );

				self.getCars();
			},

			updateTable: function( data ) {

				data.map(function( carro ) {

					var template = `
						<td>${ carro.image }</td>
						<td>${ carro.brandModel }</td>
						<td>${ carro.year }</td>
						<td>${ carro.plate }</td>
						<td>${ carro.color }</td>
						<td><button class="remover" data-js="remover">remover</button></td>
					`;
					var $tr = doc.createElement('tr');

					$tr.innerHTML = template;
					$table.querySelector('tbody').prepend( $tr );
				});

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


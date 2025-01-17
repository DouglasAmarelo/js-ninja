(function(){
	/*
	Envolva todo o código desse desafio em uma IIFE.
	*/

	/*
	Crie um array e mostre no console a representação em String desse array,
	usando o método visto na aula 13.
	*/
	console.log( 'O array em formato de string é:' );
	var arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

	console.log( arr.toString() );

	/*
	Crie 2 arrays `sul` e `sudeste`, que serão as regiões do Brasil.
	Cada array deve conter os estados dessa região.
	*/
	var arrSul = ['Paraná', 'Santa Catarina', 'Rio Grande do Sul'];
	var arrSudeste = [ 'Espírito Santo', 'Minas Gerais', 'Rio de Janeiro', 'São Paulo' ];

	/*
	Crie uma variável chamada `brasil`, que irá receber as duas regiões
	concatenadas. Mostre o `brasil` no console.
	*/
	console.log( '\nAlguns Estados do Brasil:' );
	var brasil = arrSul.concat( arrSudeste );

	console.log( brasil );

	/*
	Adicione 3 novos estados da região Norte no início do array e mostre no console.
	*/
	console.log( '\nMais estados adicionados:' );
	var arrNorte = [ 'Acre', 'Amapá', 'Amazonas', 'Pará', 'Rondônia', 'Roraima', 'Tocantins' ];

	var i = 0;
	while ( i < 3 ) {
		brasil.unshift( arrNorte[i] );
		i++
	}

	console.log( brasil );

	/*
	Remova o primeiro estado do array `brasil` e mostre-o no console.
	*/
	console.log( '\nEstado removido:' );
	console.log( brasil.shift() );

	/*
	Crie um novo array chamado `newSul`, que receba somente os estados do sul,
	pegando do array `brasil`. Não remova esses itens de `brasil`.
	*/
	var newSul = brasil.slice(2, 5);

	/*
	Mostre no console os estados que estão em `newSul`.
	*/
	console.log( '\nEstados do Sul do Brasil:' );
	console.log( newSul );

	/*
	Mostre no console todos os estados que estão em `brasil`.
	*/
	console.log( '\nAlguns Estados do Brasil:' );
	console.log( brasil );

	/*
	Crie um novo array chamado `nordeste`, que tenha os estados do nordeste.
	*/
	var arrNordeste = [ 'Alagoas', 'Bahia', 'Ceará', 'Maranhão', 'Paraíba', 'Pernambuco', 'Piauí', 'Rio Grande do Norte', 'Sergipe' ];

	/*
	Mostre no console os estados do nordeste.
	*/
	console.log( '\nEstados do Nordeste:' );
	console.log( arrNordeste );

	/*
	Remova de `brasil` os estados do `sudeste`, colocando-os em uma variável
	chamada `newSudeste`.
	*/
	var newSudeste = brasil.splice( 5 );

	/*
	Adicione os estados do `nordeste` ao array `brasil`. Esses estados devem
	ficar no mesmo nível que os estados já existentes, não em um array separado.
	*/
	brasil = brasil.concat( arrNordeste );

	/*
	Mostre no console os estados em `newSudeste`.
	*/
	console.log( '\nEstados em newSudeste:' );
	console.log( newSudeste );

	/*
	Mostre no console os estados do `brasil`.
	*/
	console.log( '\nAlguns estados do Brasil:' );
	console.log( brasil );

	/*
	usando forEach, percorra o array `brasil` e gere um novo array chamado
	`newBrasil`. Esse array deve ter cada item como um objeto, com as
	propriedades:
	- `id`: que será o índice do array `brasil`,
	- `estado`: que será o estado do array `brasil`.
	*/
	var newBrasil = [];
	brasil.forEach(function( item, index ){
		newBrasil.push({
			id: index,
			estado: item
		});
	});

	/*
	Mostre o array `newBrasil` no console
	*/
	console.log( '\nnewBrasil:' );
	console.log( newBrasil );

	/*
	Percorra o array `brasil` e verifique se os estados tem mais de 7 letras cada,
	atribuindo o resultado à uma variável. Se tiver, mostre no console a frase:
	- "Sim, todos os estados tem mais de 7 letras!"
	Senão, mostre no console:
	- "Nem todos os estados tem mais de 7 letras!"
	*/
	console.log( '\nTodos os estados de `brasil` tem mais de 7 letras?' );
	var brasilSete = brasil.every(function( item ){
		return item.length > 7;
	});

	var resposta = brasilSete ? 'Sim' : 'Nem';

	console.log( resposta + ', todos os estados tem mais de 7 letras!' );

	/*
	Percorra o array `brasil` e verifique se o Ceará está incluído, atribuindo o
	resultado à uma variável. Se esse estado existir no array, mostrar a frase no
	console:
	- "Ceará está incluído!"
	Senão, mostrar a frase:
	- "Ceará não foi incluído :("
	*/
	console.log( '\nCeará está incluído em `brasil`?' );
	var ceara = brasil.some(function( item ){
		return item === 'Ceará';
	});

	var respostaCeara = ceara ? 'está': 'não foi';

	console.log( 'Ceará ' + respostaCeara + ' incluído' );

	/*
	Percorra o array `newBrasil` e crie um novo array que some 1 no ID de cada
	objeto desse array, e adicione a frase abaixo na propriedade `estado`:
	- "[ESTADO] pertence ao Brasil."
	Atribua o novo array a uma variável chamada `map`.
	*/
	var map = newBrasil.map(function( item, index ){
		// item.id++;
		// item.estado += ' pertence ao Brasil';
		// return item;

		return {
			id: (index + 1),
			estado: item.estado + ' pertence ao Brasil'
		};
	});

	/*
	Mostre no console o array criado acima:
	*/
	console.log( '\nnewBrasil agora com mais informações:' );
	console.log( map );

	/*
	Filtre o array criado acima, retornando somente os estados que tiverem
	ID par. Atribua o valor à uma variável chamada `filter`.
	*/
	var filter = map.filter(function( item, index ){
		return item.id % 2 === 0;
	});

	/*
	Mostre o array filtrado acima no console.
	*/
	console.log( '\nEstados com ID par:' );
	console.log( filter );
})();

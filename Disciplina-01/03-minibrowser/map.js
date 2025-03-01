// TDD - Test Driven Development
var novoMapa = new Map();

class HistoryMap {
  
}

novoMapa.set('11/111/11/2011 - 23:30 - URL', { title: 'Titulo do site', url: 'url' });
novoMapa.set('11/111/11/2011 - 23:30 - URL', {}); // não deve adicionar 
novoMapa.set('11/111/11/2011 - 23:31 - URL', {});

var resultado = novoMapa.get('11/111/11/2011 - 23:31 - URL');
console.log(resultado);

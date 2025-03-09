class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

// Lista encadeada
// Os seguintes métodos devem ser suportados:
// •add(e): insere um elemento no final da lista
// •add(index, e): insere um elemento em determinada posição (index) da lista
// •get(index)/set(index, e): get/set o elemento na posição index
// •remove(e): remove o elemento da lista
// •isEmpty(): retorna truese a lista está vazia
// •size(): retorna o número de elementos armazenados na lista
// •contains(e): retorna truese a lista contém o elemento
// •indexOf(e): retorna a posição onde o elemento está na lista
// •clear(): remove todos os elementos da lista

// https://github.com/loiane/javascript-datastructures-algorithms/blob/main/src/js/data-structures/linked-list.js


class LinkedList {
  constructor() {
    this.count = 0;
    this.head = null;
    this.tail = null;    
  }

  add(element) {
    if (this.count == 0) {
        this.head = this.tail = element;
    } else {
        this.tail.next = element;
        this.tail = element;
    }
    this.count++;
  }

  print() {
    var aux = this.head;
    while (aux != null) {   
      console.log(aux.element);
      aux = aux.next;
    }
    console.log("---------");
  }
}

var list = new LinkedList();

list.add(new Node(1));
list.print();

list.add(new Node(2));
list.print();

list.add(new Node(4)); 
list.print();

list.add(new Node(3));
list.print();

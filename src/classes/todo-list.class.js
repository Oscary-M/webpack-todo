export class TodoList {
  constructor() {
    this.todos = [];
    this.cargarLocalStorage();
  }

  nuevoTodo(todo) {
    this.todos.push(todo);
    this.guardarLocalStorage();
  }

  eliminarTodo(id) {
    this.todos = this.todos.filter((todo) => todo.id != id);
    this.guardarLocalStorage();
  }

  marcarCompletado(id) {
    for (const todo of this.todos) {
      if (todo.id == id) {
        todo.completado = !todo.completado;
        this.guardarLocalStorage();
        break;
      }
    }
  }
  eliminarCompletados() {
    this.todos = this.todos.filter((todo) => !todo.completado);
    this.guardarLocalStorage();
  }
  guardarLocalStorage() {
    localStorage.setItem('todo', JSON.stringify(this.todos)); //JSON y el metodo stringify me convertira o hara ver mis dos metodos dentro del parentesis como un string, para que el localStorage los reconozca y guarde
  }
  cargarLocalStorage() {
    if (localStorage.getItem('todo')) {
      this.todos = JSON.parse(localStorage.getItem('todo'));
      console.log('cargar local Storage', this.todos);
    } else {
      this.todos = [];
    }
  }
}

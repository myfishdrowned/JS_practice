import Todo from './todo.js';

class Project {
  constructor(name) {
    this.name = name;
    this.todos = [];
  }

  // Add a new todo to the project
  addTodo(todo) {
    this.todos.push(todo);
  }

  // Remove a todo by its index
  removeTodo(index) {
    if (index >= 0 && index < this.todos.length) {
      this.todos.splice(index, 1);
    }
  }

  // Get all todos
  getTodos() {
    return this.todos;
  }

  // Find a todo by title (example utility)
  findTodoByTitle(title) {
    return this.todos.find(todo => todo.title === title);
  }
}

// Default project setup
const defaultProject = new Project('Default Project');

export { Project, defaultProject };

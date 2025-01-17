class Todo {
    constructor(title, description, dueDate, priority, notes = '', checklist = [], completed = false) {
      this.title = title;
      this.description = description;
      this.dueDate = dueDate;
      this.priority = priority;
      this.notes = notes;
      this.checklist = checklist;
      this.completed = completed; // Tracks completion status
    }
  
    // Toggle completion status
    toggleComplete() {
      this.completed = !this.completed;
    }
  
    // Edit todo details
    editTodo({ title, description, dueDate, priority, notes, checklist }) {
      if (title !== undefined) this.title = title;
      if (description !== undefined) this.description = description;
      if (dueDate !== undefined) this.dueDate = dueDate;
      if (priority !== undefined) this.priority = priority;
      if (notes !== undefined) this.notes = notes;
      if (checklist !== undefined) this.checklist = checklist;
    }
  }
  
  export default Todo;
  
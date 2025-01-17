function renderProjects(projects) {
    const projectsContainer = document.getElementById('projects-container');
    projectsContainer.innerHTML = ''; // Clear previous content
  
    projects.forEach((project, index) => {
      const projectElement = document.createElement('div');
      projectElement.classList.add('project');
      projectElement.innerHTML = `
        <h3>${project.name}</h3>
        <button data-index="${index}" class="delete-project">Delete Project</button>
      `;
  
      const todosContainer = document.createElement('div');
      todosContainer.classList.add('todos-container');
  
      project.todos.forEach((todo, todoIndex) => {
        const todoElement = renderTodo(todo, index, todoIndex);
        todosContainer.appendChild(todoElement);
      });
  
      projectElement.appendChild(todosContainer);
      projectsContainer.appendChild(projectElement);
    });
  }
  function renderTodo(todo, projectIndex, todoIndex) {
    const todoElement = document.createElement('div');
    todoElement.classList.add('todo');
    todoElement.innerHTML = `
      <h5>${todo.title}</h5>
      <p>Description: ${todo.description}</p>
      <p>Due Date: ${todo.dueDate}</p>
      <p>Priority: ${todo.priority}</p>
      <button data-project-index="${projectIndex}" data-todo-index="${todoIndex}" class="edit-todo">Edit</button>
      <button data-project-index="${projectIndex}" data-todo-index="${todoIndex}" class="delete-todo">Delete</button>
    `;
    return todoElement;
  }
  function renderTodoForm(projectIndex) {
    const formContainer = document.getElementById('form-container');
    formContainer.innerHTML = `
      <h3>Add/Edit Todo</h3>
      <form id="todo-form">
        <input type="text" id="todo-title" placeholder="Title" required>
        <textarea id="todo-description" placeholder="Description"></textarea>
        <input type="date" id="todo-due-date" required>
        <select id="todo-priority">
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
        <button type="submit" data-project-index="${projectIndex}">Save Todo</button>
      </form>
    `;
  }
  function addProjectListener(callback) {
    const addProjectButton = document.getElementById('add-project');
    addProjectButton.addEventListener('click', () => {
      const projectName = prompt('Enter project name:');
      if (projectName) {
        callback(projectName);
      }
    });
  }
  function addTodoListener(callback) {
    const form = document.getElementById('todo-form');
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const projectIndex = event.target.querySelector('button').dataset.projectIndex;
      const title = document.getElementById('todo-title').value;
      const description = document.getElementById('todo-description').value;
      const dueDate = document.getElementById('todo-due-date').value;
      const priority = document.getElementById('todo-priority').value;
  
      callback(projectIndex, { title, description, dueDate, priority });
      form.reset(); // Clear the form after submission
    });
  }
  function addDeleteListeners(projectCallback, todoCallback) {
    document.addEventListener('click', (event) => {
      if (event.target.classList.contains('delete-project')) {
        const index = event.target.dataset.index;
        projectCallback(index);
      }
  
      if (event.target.classList.contains('delete-todo')) {
        const projectIndex = event.target.dataset.projectIndex;
        const todoIndex = event.target.dataset.todoIndex;
        todoCallback(projectIndex, todoIndex);
      }
    });
  }
          
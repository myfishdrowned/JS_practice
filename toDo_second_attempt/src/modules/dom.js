// Function to render a single todo
export function renderTodo(todo, projectIndex, todoIndex) {
    const todoElement = document.createElement('div');
    todoElement.classList.add('todo', todo.priority.toLowerCase()); // Add priority as a CSS class
  
    todoElement.innerHTML = `
      <h5>${todo.title}</h5>
      <p>Description: ${todo.description}</p>
      <p>Due Date: ${todo.dueDate}</p>
      <p>Priority: ${todo.priority}</p>
      <button class="edit-todo" data-project-index="${projectIndex}" data-todo-index="${todoIndex}">Edit</button>
      <button class="delete-todo" data-project-index="${projectIndex}" data-todo-index="${todoIndex}">Delete</button>
    `;
  
    return todoElement;
  }
  
  // Function to render a project
  export function renderProject(project, projectIndex) {
    const projectElement = document.createElement('div');
    projectElement.classList.add('project', 'mb-5');
  
    projectElement.innerHTML = `
      <h3>${project.name}</h3>
      <button class="delete-project" data-project-index="${projectIndex}">Delete Project</button>
    `;
  
    const todosContainer = document.createElement('div');
    todosContainer.classList.add('todos-container');
  
    // Render all todos in the project
    project.todos.forEach((todo, todoIndex) => {
      const todoElement = renderTodo(todo, projectIndex, todoIndex);
      todosContainer.appendChild(todoElement);
    });
  
    projectElement.appendChild(todosContainer);
    return projectElement;
  }
  
  // Function to render all projects
  export function renderProjects(projects) {
    const projectsContainer = document.getElementById('projects-container');
  
    if (!projectsContainer) {
      console.error("Error: Couldn't find element with id 'projects-container'.");
      return;
    }
  
    projectsContainer.innerHTML = ''; // Clear previous content
  
    projects.forEach((project, index) => {
      const projectElement = renderProject(project, index);
      projectsContainer.appendChild(projectElement);
    });
  }
  
  // Event listener for adding a project
  export function addProjectListener(callback) {
    const addProjectButton = document.getElementById('add-project');
  
    if (!addProjectButton) {
      console.error("Error: Couldn't find element with id 'add-project'.");
      return;
    }
  
    addProjectButton.addEventListener('click', () => {
      const projectName = prompt('Enter project name:'); // Prompt user for project name
      if (projectName && projectName.trim()) {
        callback(projectName.trim()); // Callback to handle project creation
      }
    });
  }
  // dom.js
export function renderTodoForm(projectIndex, todo = null) {
    const formContainer = document.getElementById('form-container');
    formContainer.innerHTML = `
      <h3>${todo ? 'Edit Todo' : 'Add Todo'}</h3>
      <form id="todo-form">
        <input type="text" id="todo-title" placeholder="Title" value="${todo?.title || ''}" required>
        <textarea id="todo-description" placeholder="Description">${todo?.description || ''}"></textarea>
        <input type="date" id="todo-due-date" value="${todo?.dueDate || ''}" required>
        <select id="todo-priority">
          <option value="Low" ${todo?.priority === 'Low' ? 'selected' : ''}>Low</option>
          <option value="Medium" ${todo?.priority === 'Medium' ? 'selected' : ''}>Medium</option>
          <option value="High" ${todo?.priority === 'High' ? 'selected' : ''}>High</option>
        </select>
        <button type="submit" data-project-index="${projectIndex}">${todo ? 'Save Changes' : 'Add Todo'}</button>
      </form>
    `;
  }

  
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import Todo from './modules/todo.js';
import { Project, defaultProject } from './modules/project.js';

const app = document.getElementById('app');

// Simple check to ensure the app container exists
if (app) {
  app.textContent = 'Hello, World!'; // Adds basic content to the page for testing
} else {
  console.error('App container not found.');
}

// Create a new project
const workProject = new Project('Work');

// Create todos
const todo1 = new Todo('Finish report', 'Complete the sales report by Friday', '2025-01-20', 'High');
const todo2 = new Todo('Team meeting', 'Prepare notes for the team meeting', '2025-01-19', 'Medium');

// Add todos to the default project
defaultProject.addTodo(todo1);
defaultProject.addTodo(todo2);

// Add another project
workProject.addTodo(new Todo('Client call', 'Call client about the new proposal', '2025-01-18', 'High'));

// Function to render a single todo
function renderTodo(todo) {
    const todoElement = document.createElement('div');
    todoElement.classList.add('todo', todo.priority.toLowerCase()); // Add priority class
    todoElement.innerHTML = `
      <h5>${todo.title}</h5>
      <p>Description: ${todo.description}</p>
      <p>Due Date: ${todo.dueDate}</p>
      <p>Priority: ${todo.priority}</p>
    `;
    return todoElement;
  }
  

// Function to render a project
function renderProject(project) {
  const projectElement = document.createElement('div');
  projectElement.classList.add('project', 'mb-5');
  
  const projectHeader = document.createElement('h3');
  projectHeader.textContent = project.name;
  projectElement.appendChild(projectHeader);

  const todosContainer = document.createElement('div');
  todosContainer.classList.add('todos-container');
  project.todos.forEach(todo => {
    const todoElement = renderTodo(todo);
    todosContainer.appendChild(todoElement);
  });

  projectElement.appendChild(todosContainer);
  return projectElement;
}

// Render projects into the DOM
function renderApp() {
  const app = document.getElementById('app');
  app.innerHTML = ''; // Clear any existing content

  // Render the default project
  const defaultProjectElement = renderProject(defaultProject);
  app.appendChild(defaultProjectElement);

  // Render the work project
  const workProjectElement = renderProject(workProject);
  app.appendChild(workProjectElement);
}

// Call the `renderApp` function to display the projects and todos
renderApp();

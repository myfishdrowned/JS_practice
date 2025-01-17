import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import { defaultProject, Project } from './modules/project.js';
import { addProjectListener, renderProjects } from './modules/dom.js';
import Todo from './modules/todo.js';

// Save projects to localStorage
function saveProjectsToLocalStorage() {
  localStorage.setItem('projects', JSON.stringify(projects));
}

// Load projects from localStorage or initialize defaults
function loadProjectsFromLocalStorage() {
  const storedProjects = JSON.parse(localStorage.getItem('projects'));
  if (storedProjects) {
    return storedProjects.map(projectData => {
      const project = new Project(projectData.name);
      project.todos = projectData.todos.map(todoData => new Todo(
        todoData.title,
        todoData.description,
        todoData.dueDate,
        todoData.priority,
        todoData.notes,
        todoData.checklist,
        todoData.completed
      ));
      return project;
    });
  }
  return initializeProjects();
}

// Initialize default projects
function initializeProjects() {
  const defaultProject = new Project('Default Project');
  defaultProject.addTodo(new Todo('Finish report', 'Complete the sales report by Friday', '2025-01-20', 'High'));
  defaultProject.addTodo(new Todo('Team meeting', 'Prepare notes for the team meeting', '2025-01-19', 'Medium'));

  const workProject = new Project('Work');
  workProject.addTodo(new Todo('Client call', 'Call client about the new proposal', '2025-01-18', 'High'));

  return [defaultProject, workProject];
}

// Initialize projects
const projects = loadProjectsFromLocalStorage();
renderProjects(projects);

// Add event listener for adding projects
addProjectListener((projectName) => {
  const newProject = new Project(projectName);
  projects.push(newProject);
  saveProjectsToLocalStorage();
  renderProjects(projects);
});

// Listener for editing and deleting todos and projects
document.addEventListener('click', (event) => {
  const target = event.target;

  if (target.classList.contains('edit-todo')) {
    const projectIndex = target.dataset.projectIndex;
    const todoIndex = target.dataset.todoIndex;
    const todo = projects[projectIndex].todos[todoIndex];

    const updatedTitle = prompt('Edit Title:', todo.title);
    if (updatedTitle) {
      todo.title = updatedTitle;
      saveProjectsToLocalStorage();
      renderProjects(projects);
    }
  }

  if (target.classList.contains('delete-todo')) {
    const projectIndex = target.dataset.projectIndex;
    const todoIndex = target.dataset.todoIndex;

    projects[projectIndex].removeTodo(todoIndex);
    saveProjectsToLocalStorage();
    renderProjects(projects);
  }

  if (target.classList.contains('delete-project')) {
    const projectIndex = target.dataset.projectIndex;

    projects.splice(projectIndex, 1);
    saveProjectsToLocalStorage();
    renderProjects(projects);
  }
});

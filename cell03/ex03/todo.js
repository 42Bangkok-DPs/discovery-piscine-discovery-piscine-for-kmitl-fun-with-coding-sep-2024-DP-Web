const ftList = document.getElementById('ft_list');
const newBtn = document.getElementById('new');

// Load todos from cookies
function loadTodos() {
    const todos = getCookie('todos');
    if (todos) {
        const todoArray = JSON.parse(todos);
        todoArray.forEach(todo => createTodoElement(todo));
    }
}

// Create a todo element and add to DOM
function createTodoElement(task) {
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    todoDiv.textContent = task;
    todoDiv.addEventListener('click', () => {
        if (confirm('Do you want to delete this item?')) {
            todoDiv.remove();
            saveTodos();
        }
    });
    ftList.prepend(todoDiv);
}

// Save todos to cookies
function saveTodos() {
    const todoElements = document.querySelectorAll('.todo');
    const todos = Array.from(todoElements).map(el => el.textContent);
    setCookie('todos', JSON.stringify(todos), 7); // Save for 7 days
}

// Set a cookie
function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

// Get a cookie by name
function getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

// Handle new task creation
newBtn.addEventListener('click', () => {
    const task = prompt('Enter a new TO DO:');
    if (task) {
        createTodoElement(task);
        saveTodos();
    }
});

// Load existing todos when the page loads
window.onload = loadTodos;

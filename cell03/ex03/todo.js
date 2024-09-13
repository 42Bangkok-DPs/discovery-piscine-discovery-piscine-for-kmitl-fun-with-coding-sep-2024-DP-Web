document.addEventListener('DOMContentLoaded', function() {
    const todoList = document.getElementById('ft_list');
    const newTodoInput = document.getElementById('new-todo');
    const addButton = document.getElementById('new-btn');

    function saveTodos() {
        const todos = [];
        todoList.querySelectorAll('li').forEach(li => {
            todos.push(li.firstChild.textContent.trim());
        });
        localStorage.setItem('todos', JSON.stringify(todos));
    }

    function loadTodos() {
        const savedTodos = localStorage.getItem('todos');
        if (savedTodos) {
            const todos = JSON.parse(savedTodos);
            todos.forEach(todoText => {
                const li = document.createElement('li');
                li.innerHTML = `
                    ${todoText}
                    <button onclick="this.parentElement.remove(); saveTodos();">Delete</button>
                `;
                todoList.insertBefore(li, todoList.firstChild);
            });
        }
    }

    function addTodo() {
        const todoText = newTodoInput.value.trim();
        if (todoText) {
            const li = document.createElement('li');
            li.innerHTML = `
                ${todoText}
                <button onclick="this.parentElement.remove(); saveTodos();">Delete</button>
            `;
            todoList.insertBefore(li, todoList.firstChild);
            newTodoInput.value = '';
            saveTodos(); // Save after adding a new todo
        }
    }

    addButton.addEventListener('click', addTodo);

    newTodoInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            addTodo();
        }
    });

    loadTodos();
});

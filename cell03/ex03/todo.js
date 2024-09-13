document.addEventListener('DOMContentLoaded', function() {
    const todoList = document.getElementById('ft_list');
    const newTodoInput = document.getElementById('new-todo');
    const addButton = document.getElementById('new-btn');

    function addTodo() {
        const todoText = newTodoInput.value.trim();
        if (todoText) {
            const li = document.createElement('li');
            li.innerHTML = `
                ${todoText}
                <button onclick="this.parentElement.remove()">Delete</button>
            `;
            todoList.insertBefore(li, todoList.firstChild);
            newTodoInput.value = '';
        }
    }

    addButton.addEventListener('click', addTodo);

    newTodoInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            addTodo();
        }
    });
});
$(document).ready(function() {
    // Load saved todos from localStorage and render them
    const loadTodos = () => {
        const todos = JSON.parse(localStorage.getItem('todos')) || [];
        $('#ft_list').empty(); // Clear the list first
        todos.forEach(todo => {
            $('#ft_list').append(`<div class="todo">${todo}</div>`); // Append to the bottom
        });
    };

    // Save todos to localStorage
    const saveTodos = () => {
        const todos = [];
        $('.todo').each(function() {
            todos.push($(this).text());
        });
        localStorage.setItem('todos', JSON.stringify(todos));
    };

    // Add new todo
    $('#new').click(function() {
        const todo = prompt('Enter a new task:');
        if (todo) {
            $('#ft_list').append(`<div class="todo">${todo}</div>`); // Append to the bottom
            saveTodos(); // Save after adding a new todo
        }
    });

    // Remove todo on click
    $('#ft_list').on('click', '.todo', function() {
        if (confirm('Do you want to remove this task?')) {
            $(this).remove();
            saveTodos(); // Save after removing a todo
        }
    });

    // Load todos when the page loads
    loadTodos();
});

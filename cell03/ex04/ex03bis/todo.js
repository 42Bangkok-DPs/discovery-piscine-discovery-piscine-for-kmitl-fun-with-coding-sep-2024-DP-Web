$(document).ready(function() {
    // Set a cookie
    const setCookie = (name, value, days) => {
        let expires = "";
        if (days) {
            const date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "") + expires + "; path=/";
    };

    // Get a cookie by name
    const getCookie = (name) => {
        const nameEQ = name + "=";
        const ca = document.cookie.split(';');
        for(let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    };

    // Load saved todos from cookies and render them
    const loadTodos = () => {
        const todos = JSON.parse(getCookie('todos')) || [];
        $('#ft_list').empty(); // Clear the list first
        todos.forEach(todo => {
            $('#ft_list').append(`<div class="todo">${todo}</div>`); // Append to the bottom
        });
    };

    // Save todos to cookies
    const saveTodos = () => {
        const todos = [];
        $('.todo').each(function() {
            todos.push($(this).text());
        });
        setCookie('todos', JSON.stringify(todos), 7); // Save cookies for 7 days
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
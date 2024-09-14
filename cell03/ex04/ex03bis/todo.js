$(document).ready(function() {
    const $todoList = $('#ft_list');
    const $newTodoInput = $('#new-todo');
    const $addButton = $('#new-btn');

    function saveTodos() {
        const todos = $todoList.children().map(function() {
            return $(this).contents().first().text().trim();
        }).get();
        localStorage.setItem('todos', JSON.stringify(todos));
    }

    function loadTodos() {
        const savedTodos = localStorage.getItem('todos');
        if (savedTodos) {
            const todos = JSON.parse(savedTodos);
            todos.forEach(todos.reverse(), function(index, todoText) {
                addTodoToList(todoText);
            });
        }
    }

    function addTodoToList(todoText) {
        const $li = $('<li>').text(todoText);
        const $deleteButton = $('<button>').text('Delete');
        $deleteButton.on('click', function() {
            $(this).parent().remove();
            saveTodos();
        });
        $li.append($deleteButton);
        $todoList.prepend($li);
    }

    function addTodo() {
        const todoText = $newTodoInput.val().trim();
        if (todoText) {
            addTodoToList(todoText);
            $newTodoInput.val('');
            saveTodos();
        }
    }

    $addButton.on('click', addTodo);

    $newTodoInput.on('keypress', function(e) {
        if (e.which === 13) {
            addTodo();
        }
    });

    loadTodos();
});

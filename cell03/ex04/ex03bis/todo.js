$(document).ready(function() {
        const $todoList = $('#ft_list');
        const $newTodoInput = $('#new-todo');
        const $addButton = $('#new-btn');

        function addTodo() {
            const todoText = $newTodoInput.val().trim();
            if (todoText) {
                const $li = $('<li>').html(`
                    ${todoText}
                    <button>Delete</button>
                `);
                $li.find('button').on('click', function() {
                    $(this).parent().remove();
                });
                $todoList.prepend($li);
                $newTodoInput.val('');
            }
        }

        $addButton.on('click', addTodo);

        $newTodoInput.on('keypress', function(e) {
            if (e.which === 13) {
                addTodo();
            }
        });
    });

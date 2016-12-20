(function() {

    var todoForm = document.getElementById('todo-form');
    var todoText = document.getElementById('todo-text');
    var todoList = document.getElementById('todo-list');

    // Add new todo
    todoForm.addEventListener('submit', function(e) {
        e.preventDefault();

        if (todoText.value) {
            var newTodo = document.createElement('li');
            newTodo.textContent = todoText.value;
            newTodo.title = 'Usuń';

            todoList.appendChild(newTodo);

            todoText.value = '';
            todoText.focus();
        }
    }, false);

    // Remove todo
    todoList.addEventListener('click', function (e) {
        this.removeChild(e.target);
    }, false);

})();

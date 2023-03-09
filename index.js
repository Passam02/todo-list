var mainButton = document.querySelector('#mainButton');
var todoLists = document.querySelector('.todoLists');
mainButton.addEventListener('click', function () {
    var div = document.createElement('div');
    var heading = document.createElement('h3');
    heading.innerText = 'List Name';
    heading.className = 'text-center';
    var a = document.createElement('a');
    a.innerHTML = '<a class="todoList text-center listButton"><div><svg class="m-2" xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-plus-circle-fill" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/></svg></div></a>';
    a.addEventListener('click', function () {
        var _a;
        var inp = document.createElement('input');
        inp.addEventListener('change', function () {
            var _a;
            var text = inp.value;
            var li = document.createElement('li');
            li.innerText = text;
            (_a = inp.parentElement) === null || _a === void 0 ? void 0 : _a.insertBefore(li, inp);
            inp.remove();
        });
        (_a = a.parentElement) === null || _a === void 0 ? void 0 : _a.insertBefore(inp, a);
    });
    div.append(heading);
    div.append(a);
    div.className = 'todoList d-flex flex-column';
    console.log(div);
    console.dir(div);
    console.log(todoLists);
    todoLists.insertBefore(div, mainButton);
});

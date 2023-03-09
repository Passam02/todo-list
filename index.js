var mainButton = document.querySelector('#mainButton');
var todoLists = document.querySelector('.todoLists');
mainButton.addEventListener('click', function () {
    var div = document.createElement('div');
    var heading = document.createElement('h3');
    heading.innerText = 'List Name';
    heading.className = 'text-center';
    var button = document.createElement('button');
    div.append(heading);
    div.append(button);
    div.className = 'todoList d-flex';
    console.log(div);
    console.dir(div);
    console.log(todoLists);
    todoLists.insertBefore(div, mainButton);
});

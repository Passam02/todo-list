const mainButton = document.querySelector('#mainButton')!
const todoLists = document.querySelector('.todoLists')!

mainButton.addEventListener('click', function () {
    const div = document.createElement('div')
    const heading = document.createElement('h3')
    heading.innerText = 'List Name'
    heading.className = 'text-center'
    const button = document.createElement('button')
    div.append(heading)
    div.append(button)
    div.className = 'todoList d-flex'
    console.log(div)
    console.dir(div)
    console.log(todoLists)
    todoLists.insertBefore(div, mainButton)
})


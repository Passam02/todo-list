const mainButton = document.querySelector('#mainButton')!
const todoLists = document.querySelector('.todoLists')!


mainButton.addEventListener('click', function () {
    const div = document.createElement('div')
    const heading = document.createElement('h3')
    heading.innerText = 'List Name'
    heading.className = 'text-center mt-2 border-bottom border-dark'
    const a = document.createElement('a')
    a.innerHTML = '<a class="todoList text-center listButton"><div><svg class="m-2" xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-plus-circle-fill" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/></svg></div></a>'
    a.addEventListener('click', function () {
        const inp = document.createElement('input')
        inp.placeholder = 'Type Here...'
        inp.addEventListener('change', function () {
            let text = inp.value
            const li = document.createElement('li')
            li.innerText = text
            li.style = 'overflow-wrap: anywhere'
            li.className = 'm-2'
            inp.parentElement?.insertBefore(li, inp)
            inp.remove()
        })
        a.parentElement?.insertBefore(inp, a)
    })
    div.append(heading)
    div.append(a)
    div.className = 'todoList d-flex flex-column'
    todoLists.insertBefore(div, mainButton)
})
const mainButton = document.querySelector('#mainButton')!
const todoLists = document.querySelector('.todoLists')!


mainButton.addEventListener('click', function () {
    const div = document.createElement('div')
    const divHead = document.createElement('div')
    divHead.className = 'border-bottom border-dark d-flex align-items-center justify-content-around'
    const heading = document.createElement('h3')
    heading.innerText = 'List Name'
    heading.className = 'text-center mt-2'
    divHead.append(heading)
    const a = document.createElement('a')
    const aDelete = document.createElement('a')
    aDelete.innerHTML = '<svg style="color: red" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16"><path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/></svg>'
    aDelete.addEventListener('click', () => {
        aDelete.parentElement?.parentElement?.remove()
    })
    divHead.append(aDelete)
    a.innerHTML = '<a class="todoList text-center listButton"><div><svg class="m-2" xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-plus-circle-fill" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/></svg></div></a>'
    a.addEventListener('click', function () {
        const inp = document.createElement('input')
        inp.placeholder = 'Type Here...'
        inp.addEventListener('change', function () {
            const div = document.createElement('div')
            div.className = 'border-bottom border-dark d-flex align-items-center m-2'
            const aDelete = document.createElement('a')
            aDelete.innerHTML = '<svg style="color: red" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16"><path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/></svg>'
            aDelete.addEventListener('click', () => {
                aDelete.parentElement?.remove()
            })
            let text = inp.value
            const li = document.createElement('li')
            li.innerText = text
            li.style = 'overflow-wrap: anywhere'
            li.className = 'flex-grow-1'
            div.append(li)
            div.append(aDelete)
            inp.parentElement?.insertBefore(div, inp)
            inp.remove()
        })
        a.parentElement?.insertBefore(inp, a)
    })
    div.append(divHead)
    div.append(a)
    div.className = 'todoList d-flex flex-column'
    todoLists.insertBefore(div, mainButton)
})
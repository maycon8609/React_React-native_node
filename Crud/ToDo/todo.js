const list = document.getElementById('listTodo')
const input = document.getElementById('inputTodo')
const add = document.getElementById('addTodo')
input.focus()

const todos = JSON.parse(localStorage.getItem('list_todo')) || []

function removeTodo(pos) {
    todos.splice(pos, 1)
    renderTodo()
    saveStorage()
}

function addTodo() {
    todos.push(input.value)
    saveStorage()
}

function saveStorage() {
    localStorage.setItem('list_todo', JSON.stringify(todos))
}

function renderTodo() {
    list.innerHTML = ''

    for (todo of todos) {
        //criar li
        let todoElement = document.createElement('li')

        //criar primeira td com os texto
        let primeiraTD = document.createElement('td')
        primeiraTD.setAttribute('id', 'td1')
        let todoText = document.createTextNode(todo)
        primeiraTD.appendChild(todoText)

        //criar segunda td com o link
        let segundaTD = document.createElement('td')
        segundaTD.setAttribute('id', 'td2')
        let todoLink = document.createElement('a')
        todoLink.setAttribute('href', '#')

        let pos = todos.indexOf(todo)
        todoLink.setAttribute('onclick', `removeTodo(${pos})`)
        let linkText = document.createTextNode('Excluir')

        todoLink.appendChild(linkText)
        segundaTD.appendChild(todoLink)
            //todoElement.appendChild(todoText)
            //todoElement.appendChild(todoLink)
        todoElement.appendChild(primeiraTD)
        todoElement.appendChild(segundaTD)

        list.appendChild(todoElement)
    }
}

renderTodo()
add.onclick = () => {
    if (input.value.length == 0) {
        alert(' ToDo invalido ')
    } else {
        addTodo()
        renderTodo()
        console.log(todos)
    }

    input.value = ''
    input.focus()
}
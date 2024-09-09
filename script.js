let inputBox = document.getElementById('inputBox')
let btn = document.getElementById('btn')
let listContainer = document.getElementById('listContainer')

let todos = [];

//Local storage

window.onload = () => {
    todos = JSON.parse(localStorage.getItem('todos')) || []

    todos.forEach(todo => addTodo(todo));
}

btn.addEventListener('click', () => {
    todos.push(inputBox.value)
    localStorage.setItem('todos', JSON.stringify(todos))

    addTodo(inputBox.value)
    inputBox.value = ''

})




function addTodo(todo) {
    let list = document.createElement('li');
    list.innerText = todo
    listContainer.appendChild(list)
    list.addEventListener('click', () => {
        list.style.textDecoration = 'line-through black'
        remove(todo)
    })

    list.addEventListener('dbClick', () => {
        listContainer.removeChild(list)
        remove(todo)
    })
}

function remove(todo) {
    let index = todos.indexOf(todo)
    if (index > -1) {
        todos.splice(index, 1)
    }
    localStorage.setItem('todos', JSON.stringify(todos))

}


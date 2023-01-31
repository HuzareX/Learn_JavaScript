let todoInput
let errorInfo
let addBtn
let ulList
let newTodo

const main = () => {
prepareDOMElements()
prepareDOMEvents()
}

const prepareDOMElements = () => {
    todoInput = document.querySelector('.todo-input')
    errorInfo = document.querySelector('.error-info')
    addBtn = document.querySelector('.btn-add')
    ulList = document.querySelector('.todolist ul')
}

const prepareDOMEvents = () => {
addBtn.addEventListener('click', addNewTask)
}



/* 
1. tworzy nowy element LI
2. dodaje element do listy
3. funkcja odpalana na klika przycisk ADD
4. przechwytuje treśc z inputa i umieszcza go w nowym LI
5. funkcja nie doda do listy pustego todosa
*/


const addNewTask = () => {
    if (todoInput.value !== '') {
        newTodo = document.createElement('li')
        newTodo.textContent = todoInput.value
        ulList.append(newTodo)
        todoInput.value = ''
        errorInfo.textContent = ''
    } else {
        errorInfo.textContent = 'Wpisz treść zadania!'
    }
}



document.addEventListener('DOMContentLoaded', main)
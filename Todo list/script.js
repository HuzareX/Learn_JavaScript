let todoInput
let errorInfo
let addBtn
let ulList
let newTodo
let deleteBtn

let popup
let popupInfo
let todoToEdit
let popupInput
let popupAddBtn
let popupCloseBtn

const main = () => {
	prepareDOMElements()
	prepareDOMEvents()
}

const prepareDOMElements = () => {
	todoInput = document.querySelector('.todo-input')
	errorInfo = document.querySelector('.error-info')
	addBtn = document.querySelector('.btn-add')
	ulList = document.querySelector('.todolist ul')
	deleteBtn = document.querySelector('.delete')

	popup = document.querySelector('.popup')
	popupInfo = document.querySelector('.popup-info')
	popupInput = document.querySelector('.popup-input')
	popupAddBtn = document.querySelector('.accept')
	popupCloseBtn = document.querySelector('.cancel')
}

const prepareDOMEvents = () => {
	addBtn.addEventListener('click', addNewTask, createToolsArea)
	ulList.addEventListener('click', checkClick)
	popupCloseBtn.addEventListener('click', closePopup)
	popupAddBtn.addEventListener('click', changeTodoText)
	deleteBtn.addEventListener('click', deleteTodo)
	todoInput.addEventListener('keyup', enterKeyCheck)
	popupInput.addEventListener('keyup', enterKeyCheckTwo)
}

const addNewTask = () => {
	if (todoInput.value !== '') {
		newTodo = document.createElement('li')
		newTodo.textContent = todoInput.value
		ulList.append(newTodo)
		todoInput.value = ''
		errorInfo.textContent = ''
		createToolsArea()
	} else {
		errorInfo.textContent = 'Wpisz treść zadania!'
	}
}

const createToolsArea = () => {
	const toolsPanel = document.createElement('div')
	toolsPanel.classList.add('tools')

	const completeBtn = document.createElement('button')
	completeBtn.classList.add('complete')
	completeBtn.innerHTML = '<i class="fas fa-check"></i>'

	const editBtn = document.createElement('button')
	editBtn.classList.add('edit')
	editBtn.textContent = 'EDIT'

	const deleteBtn = document.createElement('button')
	deleteBtn.classList.add('delete')
	deleteBtn.innerHTML = '<i class="fas fa-times"></i>'

	toolsPanel.append(completeBtn, editBtn, deleteBtn)
	newTodo.append(toolsPanel)
}

const checkClick = e => {
	if (e.target.matches('.complete')) {
		e.target.closest('li').classList.toggle('completed')
		e.target.classList.toggle('completed')
	} else if (e.target.matches('.edit')) {
		editTodo(e)
	} else if (e.target.matches('.delete')) {
		deleteTodo(e)
	}
}

const editTodo = e => {
	todoToEdit = e.target.closest('li')
	popupInput.value = todoToEdit.firstChild.textContent
	popup.style.display = 'flex'
}

const closePopup = () => {
	popup.style.display = 'none'
}

const changeTodoText = () => {
	if (popupInput.value !== '') {
		todoToEdit.firstChild.textContent = popupInput.value
		popupInfo.textContent = ''
		popup.style.display = 'none'
	} else {
		popupInfo.textContent = 'Musisz podać jakąś treść zadania.'
	}
}

const deleteTodo = e => {
	e.target.closest('li').remove()

	const allTodos = ulList.querySelectorAll('li')
	if (allTodos.length === 0) {
		errorInfo.textContent = "Brak zadań na liście."
	}
}

const enterKeyCheck = e => {
	if(e.key === 'Enter') {
		addNewTask()
	}

}



document.addEventListener('DOMContentLoaded', main)
const inputText = document.querySelector('.input')
const button = document.getElementById('button')

const todoList = document.querySelector('.todo-list')
let finalArray = JSON.parse(localStorage.getItem('todolist'))
let todoListArray = finalArray || []
let count = 0

function renderOrderSummary() {
    let finalListHtml = ''

    todoListArray.forEach((el) => {
        finalListHtml += `<span class='item'><div class='text'>${el.text}</div> <button id='remove'class='remove-btn' data-id=${el.id} >Remove</button></span>`
    })
    todoList.innerHTML = finalListHtml
    if (finalListHtml) {

        console.log('17', todoListArray)
        const Removebutton = document.querySelectorAll('.remove-btn')
        Removebutton.forEach(btn => {
            btn.addEventListener('click', () => {
                const Id = btn.dataset.id
                console.log(Id, 'ghk')
                removeTodo(Id)
                console.log('yes')
            })
        })

    }


    console.log(todoListArray)

}
button.addEventListener('click', () => {
    count++
    todoListArray.push({ text: inputText.value, id: `${count}` })
    localStorage.setItem('todolist', JSON.stringify(todoListArray))
    inputText.value=''
    renderOrderSummary()
});
document.addEventListener('keydown', (event) => {
    if (event.key == 'Enter') {
        count++
        if(inputText.value){
            todoListArray.push({ text: inputText.value, id: `${count}` })
            localStorage.setItem('todolist', JSON.stringify(todoListArray))
             inputText.value=''
            renderOrderSummary() 
        }
      
    }
})

function removeTodo(Id) {
    let newArray = []
    todoListArray.filter((todo) => todo.id !== Id ?
        newArray.push(todo) : null)
    todoListArray = newArray
    localStorage.setItem('todolist', JSON.stringify(todoListArray))

    renderOrderSummary()
}
renderOrderSummary()
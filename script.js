document.addEventListener('DOMContentLoaded', init)

function init() {
  const input = document.querySelector('#input')
  const addButton = document.querySelector('#add')
  const list = document.querySelector('#addList')

  addButton.addEventListener('click', addTodo)
  input.addEventListener('keydown', function(event) {
    if(event.key === 'Enter') {
      addTodo()
    }
  })

  function addTodo() {
    const taskText = input.value.trim()
    if(taskText !== '') {
      const li = document.createElement('li')

      const now = new Date()
      const month = now.getMonth() + 1
      const day = now.getDate()
      const dateText = `${month}월 ${day}일`
      
      ///항목을 올린 날짜
      const dateSpan = document.createElement('span')
      dateSpan.className = 'date'
      dateSpan.textContent = dateText


      ///할 일
      const taskSpan = document.createElement('span')
      taskSpan.className = 'task_text'
      taskSpan.textContent = taskText

      ///수정 버튼
      const editButton = document.createElement('button')
      editButton.className = 'edit_button'
      editButton.textContent = '수정'
      editButton.addEventListener('click', function() {
        const newTaskText = prompt('새로운 할 일을 입력하세요', taskSpan.textContent)
        if(newTaskText !== null && newTaskText.trim() !== '') {
          taskSpan.textContent = newTaskText.trim()
        }
      })

      ///삭제버튼
      const delButton = document.createElement('button')
      delButton.className = 'del_button'
      delButton.textContent = '일정 완료'
      delButton.addEventListener('click', function() {
        list.removeChild(li)
      })

      const buttons = document.createElement('div')
      buttons.className = 'buttons'
      buttons.appendChild(editButton)
      buttons.appendChild(delButton)

      li.appendChild(dateSpan)
      li.appendChild(taskSpan)
      li.appendChild(buttons)
      list.appendChild(li)
      input.value = ''
    }
  }
}
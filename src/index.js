document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector('#create-task-form')
  form.addEventListener('submit', (event) => {
      event.preventDefault()
      addToDo(event.target.querySelector("#new-task-description").value)
  })
  
  
});


function addToDo(todo){
  let p = document.createElement('li')
  let btn = document.createElement('button')
  btn.textContent = 'x'
  p.textContent = `${todo} `
  p.appendChild(btn)
  document.querySelector('#tasks').appendChild(p)
  p.addEventListener('click', event => p.remove())
}

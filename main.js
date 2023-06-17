
const tasks=[]

const form=document.querySelector('.todolist__top form')
const target=document.querySelector('.todolist__bottom')
const span=document.querySelector('.error')


function createItem(task){
    const div=document.createElement('div')
    const p=document.createElement('p')
    const label=document.createTextNode(task)
    p.appendChild(label)
    const button=document.createElement('button')
    const btnLabel=document.createTextNode('delete')
    button.appendChild(btnLabel)
    button.onclick=()=>removeItem(task)
    div.appendChild(p)
    div.appendChild(button)
    div.className='item'
    target.appendChild(div)
    
}

function handelError(err){
    span.textContent=err
    window.setTimeout(()=>{
        span.textContent=''
    },4000)
}

function addTask(task){
    console.log('value',task)
    if(!tasks.includes(task)) {
        tasks.push(task)
        initTasks()
    }else handelError('task already exist')
}

function initTasks(){
    removeChildrens()
    tasks.forEach(task=>{
        return createItem(task)
    }
    )
}

form.onsubmit=function(e){
    
    e.preventDefault()    
    if(!e.target[0].value) {        
        handelError('task is empty!!')
        return
    }
    addTask(e.target[0].value)
}

function removeChildrens(){
 const items=document.querySelectorAll('.item')   
 if(items){
    items.forEach(item=>item.parentElement.removeChild(item))
 }
}

function removeItem(task){
    tasks.splice(tasks.indexOf(task),1)
    initTasks()
}
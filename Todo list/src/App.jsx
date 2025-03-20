import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { v4 as uuidv4 } from 'uuid';


function App() {
  const [todo, setTodo] = useState("")
const [todos, setTodos] = useState([])
const [showFinished, setshowFinished] = useState(true)

const toggleFinished =(e) => {
  setshowFinished(!showFinished)
}


useEffect(() => {
  let todoString=JSON.parse(localStorage.getItem("todos"))
  if(todoString){
 let todos=JSON.parse(localStorage.getItem("todos"))
 setTodos(todos)
  }
}, [])


const savToLS=(params)=>{
  localStorage.setItem("todos",JSON.stringify(todos))

}

  const handleEdit=(e, id)=>{
    let t=todos.filter(i=>i.id===id)
    setTodo(t[0].todo)
    let newTodos=todos.filter(item=>{
      return item.id!==id
    })
    setTodos(newTodos)
    savToLS()

  }
  const handleDelete=(e,id)=>{
   
    let newTodos=todos.filter(item=>{
      return item.id!==id
    })
    setTodos(newTodos)
    savToLS()
  }


  const handleAdd=()=>{
    setTodos([...todos, {id: uuidv4() ,todo,isCompleted: false}])
    setTodo("")
    savToLS()
  }

  const handleChange=(e)=>{
    setTodo(e.target.value)
  }

  const handleCheckbox=(e)=>{
    let id=e.target.name
    let index=todos.findIndex(item=>{
      return item.id===id;
    })
    let newTodos=[...todos];
    newTodos[index].isCompleted=! newTodos[index].isCompleted;
    setTodos(newTodos)
    savToLS()
  }
  return (
    <>
    <Navbar/>
    <div className="container mx-auto my-5 rounded-xl bg-violet-100 p-5 min-h-[80vh]">
      <div className="addTodo my-5">
        <h2 className='text-lg font-bold'>Add a Todo</h2>
       <input onChange={handleChange} value={todo} className='bg-white w-80' type="text" />
        <button onClick={handleAdd} disabled={todo.length<=3} className='bg-violet-800 disabled:bg-gray-600 hover:bg-violet-950 p-2 py-1 text-white rounded-md mx-6 text-sm font-bold'>Add</button>
      </div>
      <input onChange={toggleFinished} type="checkbox" checked={showFinished} />Show Finished
      <h2 className='text-lg font-bold'>Your Todos</h2>
      <div className="todos">
        {todos.length===0 && <div className='m-5'>No Todos to display </div>}
        {todos.map(item=>{

        
       return (showFinished || !item.isCompleted) &&<div key={item.id} className="todo flex w-1/4 justify-between my-3">
          <input name={item.id} onChange={handleCheckbox} type="checkbox" checked={todo.isCompleted} />
          <div className={item.isCompleted?"line-through":""}>{item.todo}</div>
          <div className="buttons">
            <button onClick={(e)=>{handleEdit(e, item.id)}} className='bg-violet-800 hover:bg-violet-950 p-2 py-1 text-white rounded-md mx-1 text-sm font-bold'>Edit</button>
            <button onClick={(e)=>{handleDelete(e,item.id)}} className='bg-violet-800 hover:bg-violet-950 p-2 py-1 text-white rounded-md mx-1 text-sm font-bold'>Delete</button>
          </div>
        </div>
        })}
      </div>
    </div>  
   
    </>
  )
}

export default App

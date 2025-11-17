import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  
  const[task,setTask]=useState("")
  const [tasks,setTasks]=useState([])

  const addTask=()=>{
    if(task.trim() === "")return;
    setTasks([...tasks,{id:Date.now(),text:task,completed:false}]);
    setTask("")
  }

  const toggleComplete=(id)=>{
    setTasks(
      tasks.map((t)=>
        t.id === id ? {...t ,completed: !t.completed}:t
      )
    )

  }
  const deleteTask=(id)=>{
    setTasks(tasks.filter((t)=>t.id !== id))
  }
  return (
    <div style={styles.container} className='bg-secondary'>
      <h1 className='text-center text-success'>To-Do List</h1>
      <div style={styles.inputArea}>
      <input placeholder='Enter task..' 
      type='text'
       name='task'
       value={task}
       onChange={(e)=>setTask(e.target.value)}
       style={styles.input}/>

       <button onClick={addTask} style={styles.button}>Add task</button>
      </div>
     <ul style={styles.list}>
      {tasks.map((t)=>
       <li key={t.id} style={styles.listItem}>
        <span onClick={()=>{toggleComplete(t.id)}}
          style={{
            textDecoration: t.completed ? "line-through" : "none",
            cursor: "pointer",
          }}>{t.text}</span>
        <button onClick={()=>deleteTask(t.id)} style={styles.delete}>X</button>
       </li>
      )}
     
     </ul>
    </div>
  )
}
// Inline CSS styles
const styles = {
  container: {
    width: "400px",
    margin: "auto",
    marginTop: "50px",
    fontFamily: "Arial",
   
    padding:"10px",
    border:"5px solid blue"
  },
  inputArea: { display: "flex", gap: "10px" },
  input: { flex: 1, padding: "10px", fontSize: "16px" },
  button: { padding: "10px 20px", cursor: "pointer" },
  list: { marginTop: "20px", padding: 0 },
  listItem: {
    display: "flex",
    justifyContent: "space-between",
    padding: "10px",
    background: "#f3f3f3",
    marginBottom: "10px",
    borderRadius: "5px",
  },
  delete: {
    background: "red",
    color: "white",
    border: "none",
    cursor: "pointer",
    padding: "5px 10px",
  },
}

export default App
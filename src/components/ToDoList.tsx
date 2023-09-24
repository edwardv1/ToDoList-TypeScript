import { useState } from "react"
import { ListaTareas } from "./ListaTareas"


export const ToDoList = () => {
    const [nuevaTarea, setNuevaTarea] = useState<string>("")
    const [listaTareas, setListaTareas] = useState<string[]>([])
    
    const hanldeAddTask = () => {
      if(nuevaTarea.trim() === "") return //no me deja guardar si esta vacio
      setListaTareas(tareasAnteriores => [...tareasAnteriores, nuevaTarea])
      setNuevaTarea("")
    }

    const handleBorrarTarea = (index: number)=>{
        setListaTareas(tareas => tareas.filter((_, i) => i !== index))
    }
    return (
    <div className="flex">
        <h1>Lista de Tareas</h1>
        <div>
            <input type="text"
            value={nuevaTarea}
            placeholder="Nueva Tarea" 
            onChange={(e)=> setNuevaTarea(e.target.value)}
            />
        </div>
        <button onClick={hanldeAddTask}>Agregar Tarea</button>
        <ListaTareas listaTareas={listaTareas} borrarTarea={handleBorrarTarea}></ListaTareas>
    </div>
  )
}
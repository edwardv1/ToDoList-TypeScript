import React from 'react'
import ReactDOM from 'react-dom/client'
import "./styles.css"
import { ToDoList } from './components/ToDoList'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ToDoList></ToDoList>
  </React.StrictMode>,
)

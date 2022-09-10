
import './App.css';

import { useState } from "react";
import Button from 'react-bootstrap/Button';
import TodoList from './TodoList'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';


function App() {

  const [input, setInput] = useState('')
  const [todoArr, setTodoArr] = useState([])

  let AddItem = () => {
    { input !== '' ? todoArr.unshift(input) : alert('Please enter something') }
    setInput('')
    console.log(todoArr);
  }

  let deleteAll = () => {
    setTodoArr([])
  }

  let deleteItem = (index) => {
    todoArr.splice(index, 1)
    setTodoArr([...todoArr])
  }

  let editItem = (index) => {
    todoArr[index] = prompt('edit your todo', todoArr[index])
    setTodoArr([...todoArr])
  }

  return (
    <div className='App'>

      <div className='input-container'>
        <input value={input} type="text" placeholder='Enter Your Todos' onChange={(e) => setInput(e.target.value)} />
        <OverlayTrigger placement='top' overlay={<Tooltip > Add Todo </Tooltip>}>
          <Button className='gap' variant="primary" onClick={AddItem}> <i className="fa-solid fa-plus"></i> </Button>
        </OverlayTrigger>
        <OverlayTrigger placement='top' overlay={<Tooltip> Delete All </Tooltip>}>
          <Button className='gap' variant="danger" onClick={deleteAll}><i className="fa-solid fa-trash-can"></i></Button>
        </OverlayTrigger>
      </div>


      <ul>
        {todoArr.map((item, index) => {
          return <li key={index}>
            <TodoList item={item} deleteItem={deleteItem} editItem={editItem} index={index} />
          </li>
        })}
      </ul>

    </div>
  );
}

export default App;

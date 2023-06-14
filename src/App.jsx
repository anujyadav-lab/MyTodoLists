import {  useState} from 'react';
import './App.css';
import Form from './components/Form';
import Header from './components/Header';
import TodosList from './components/TodosList';

const App = () => {

// const initialState = JSON.parse(localStorage.getItem("todos")) || [];

  const [input,setInput] = useState("");
  const [todos,setTodos] = useState([])
 const [editTodo,setEditTodo] = useState(null);

//  useEffect(()=>{
//   localStorage.setItem("todos",JSON.stringify(todos));
//  },[todos])

// useEffect(() => {
//   const storedTodos = JSON.parse(localStorage.getItem('todos'));
//   if (storedTodos) {
//     setTodos(storedTodos);
//   }
// }, []);

// useEffect(() => {
//   localStorage.setItem('todos', JSON.stringify(todos));
// }, [todos]);

  return (
    <div className="container">
      <div className='app-wrapper'>
        <div>
        <Header/>
<Form 
input={input} 
setInput={setInput}
todos = {todos}
setTodos = {setTodos}
editTodo={editTodo}
setEditTodo={setEditTodo}
/>
        </div>
        <div>
          <TodosList todos={todos} setTodos={setTodos} setEditTodo={setEditTodo}/>
        </div>
      </div>
    </div>
  );
}

export default App;




import { useEffect } from "react";
import { v4 as uuidV4 } from "uuid"; //imported this because i wanted to add unique id to my list items.

const Form = ({ input, setInput, todos, setTodos, editTodo, setEditTodo }) => {
  // const [uuid, setUuid] = useState('');

  // const generateUuid = () =>{
  //   const newUuid = uuidV4();
  //   setUuid(newUuid)
  // }

  useEffect(() => {
    if (editTodo) {
      setInput(editTodo.title);
    } else {
      setInput("");
    }
  }, [setInput, editTodo]);

  const onInputChange = (event) => {
    setInput(event.target.value);
  };

  const updateTodo = (title, id, completed) => {
    const newTodo = todos.map((todo) =>
      todo.id === id ? { title, id, completed } : todo
    );
    console.log(newTodo);
    setTodos(newTodo);
    setEditTodo("");
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    if (!editTodo) {
      setTodos([...todos, { id: uuidV4(), title: input, completed: false }]);
      setInput(" ");
    } else {
      updateTodo(input, editTodo.id, editTodo.completed);
    }
  };

  return (
    <form onSubmit={onFormSubmit}>
      <input
        type="text"
        placeholder="Enter a Todo..."
        className="task-input"
        required
        value={input}
        onChange={onInputChange}
      />
      <button className="button-add" type="submit">
        {editTodo ? "Ok" : "Add"}
      </button>
    </form>
  );
};
export default Form;

import React, {useState, useEffect} from 'react'
import { useMutation } from '@apollo/react-hooks'
import { SAVE_TODO } from '../lib/mutations'
export default function Task(props){

    const [inputValue, setInputValue] = useState(props.todo.task);
    const [saveTodo, { loading, error }] = useMutation(SAVE_TODO)

    function handleInput(event){
        setInputValue(event.target.value);
        props.todo.task = inputValue;
        props.setTodos(props.spreadTodos)
    } 
    

    useEffect(() => {
      setInterval(() =>{saveTodo({variables: {...props.todo}})}, 30000)
      // figure out how to stop the interval from firing if the todo is unchanged
    })

       return (
         <div className="flex items-center mt-2">
           <input
             onChange={() => {
               props.todo.completed = !props.todo.completed;
               props.setTodos(props.spreadTodos);
             }}
             type="checkbox"
             checked={props.todo.completed}
             value={props.todo.completed}
           />
           <input
             className="ml-px"
             onChange={handleInput}
             value={inputValue}
             placeholder={"new todo"}
           />
         </div>
       );
}



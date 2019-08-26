import React, {useState, useEffect} from 'react'
import { useMutation } from '@apollo/react-hooks'
import { UPDATE_TODO, SAVE_TODO } from '../lib/mutations'


export default function Task(props){

    const [updateTodo] = useMutation(UPDATE_TODO, { onCompleted: () => props.setAllTodosSaved(prev => prev - 1)})
    const [saveTodo] = useMutation(SAVE_TODO)
    const [showButton, setShowButton] = useState(true)

    async function handleInput(event){
       
        props.todo.task = event.target.value;
        props.setTodos(props.spreadTodos);
    } 

    useEffect(() => {

      let interval;
      if (props.todo.id) {
        interval = setInterval(() => {
          updateTodo({ variables: props.todo });
        }, 20000);

      }
        
      return () =>  {
          if (interval) {
            clearInterval(interval);
          }
      }
    });

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
             value={props.todo.task}
             placeholder={"new todo"}
           />
           {!props.todo.id && showButton && <button onClick={async () => {
             saveTodo({variables: { ...props.todo }})
              console.log(props.todo)
              setShowButton(false)
           }}>Save</button>}
         </div>
       );
}



import React, {useState} from 'react'

export default function Task(props){

    const [inputValue, setInputValue] = useState(props.todo.task);

    function handleInput(event){
        setInputValue(event.target.value);
        props.todo.task = inputValue;
        props.setTodos(props.spreadTodos)
    }
    
       return (
         <div
           onClick={() => {
             props.todo.completed = !props.todo.completed;
             props.setTodos(props.spreadTodos);
           }}
           className="flex items-center mt-2"
         >
           <input type="checkbox" value={props.todo.completed} />
           <input
             className="ml-px"
             onChange={handleInput}
             value={inputValue}
           />
         </div>
       );
}


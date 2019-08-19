import React, {useState} from 'react'
import Task from '../components/Task'


export default function UpcomingAuditionInfo(props){

    const [todos, setTodos] = useState(props.todos  || [{task: '', completed: false}]);

    // const instructions = ['Please arrive at 12am', 'Do not let actors use the bathroom on the first floor', 'Practice rooms are available on the 4th floor']
    const [swap, setSwap] = useState('TODOS')

    function renderTodos() {
      const spreadTodos = [...todos];

      const todoList = spreadTodos.map(todo => {
        return (
            <Task
              key={todo.id}
              todo={todo}
              setTodos={setTodos}
              spreadTodos={spreadTodos}
            />
        );
      });

      // console.log('spreadTodos', spreadTodos)
      return (
        <div>
          {todoList}
          <button onClick={() => setTodos([...spreadTodos, {task: '', completed: false, audition_id: props.id }])} className="border border-m-purple-500 w-full mt-4 rounded">
            <i className="fas fa-plus" />
          </button>
        </div>
      );
    }


    function renderInstructions(){
        return props.instructions.map(instruction => {
            return (
              <div className="mt-2">
                {`• ${instruction.instruction}`}
              </div>
            );
        })
    }

    function renderSwap() {
      if (swap === "INSTRUCTIONS") {
        return renderInstructions();
      } else if (swap === "TODOS") {
        return renderTodos();
      }
    }


       return (
         <div>
           <div className="flex flex-col relative items-start">
             <div className="ml-auto mr-auto">{swap}</div>
             <button
               className="absolute right-0 top-0 mr-2"
               onClick={
                 swap === "INSTRUCTIONS"
                   ? () => setSwap("TODOS")
                   : () => setSwap("INSTRUCTIONS")
               }
             >
               <i className="fas fa-angle-double-right" />
             </button>
             <div className="mt-6 flex flex-col justify-between w-full">
                {renderSwap()}
             </div>
           </div>
         </div>
       );
}


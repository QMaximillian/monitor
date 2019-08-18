import React, {useState} from 'react'
import Task from '../components/Task'


export default function UpcomingAuditionInfo(props){

    const [todos, setTodos] = useState([
      { task: "go to place", completed: false },
      { task: "do thing", completed: false },
      { task: "eat food", completed: false }
    ]);

    // const instructions = ['Please arrive at 12am', 'Do not let actors use the bathroom on the first floor', 'Practice rooms are available on the 4th floor']
    const [swap, setSwap] = useState('INSTRUCTIONS')

    function renderTodos() {
      const spreadTodos = [...todos];

      return spreadTodos.map(todo => {
        return (
          <Task todo={todo} setTodos={setTodos} spreadTodos={spreadTodos}/>
        );
      });
    }
    console.log(props.instructions)

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
             <div className="mt-6 flex flex-col justify-between">
                {renderSwap()}
             </div>
           </div>
         </div>
       );
}


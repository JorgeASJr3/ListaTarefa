import React from 'react';
import { CgBolt,  CgReadme} from "react-icons/cg";
import { useHistory } from 'react-router-dom';


import "./Task.css";

const Task  = ({task, handleTaskClick, handleTaskDeletion, }) => {
   const history = useHistory();
   const handleTaskDetailsClick = () => {
      history.push(`/${task.title}`)
   }
   return (
   <div className='task-container' style={task.completed ? { borderLeft: '7px solid cyan'}:{}}>
      
         <div className="task-title" onClick={() => handleTaskClick(task.id)}>
            {task.title}
         </div>
         <div className="buttons-container">
            <button className='removeTask-button' onClick={() => handleTaskDeletion(task.id)}>
               <CgBolt/>
            </button>
            <button className='detailsTask-button' onClick={handleTaskDetailsClick}>
               < CgReadme/>
            </button>
         </div>
   </div>
   )
};


export default Task ;

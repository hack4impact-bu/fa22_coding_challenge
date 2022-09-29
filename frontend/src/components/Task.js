import React from "react";
import { deleteTask, updateTask } from "../services/taskServices";
import { useState, useEffect } from "react";

const Task = ({ task }) => {
  /* CREATE UPDATE OPERATION */
  const [updateOp, setUpdateOp] = useState({})
  const [deleteOp, setDeleteOp] = useState({})
  /* CREATE DELETE OPERATION*/

  return (
    <div className='pb-3 pt-1'>
      <p className='text-center'>{`${task.task}`}</p>
      <div>
        <button
          >DELETE</button>
        <button>UPDATE</button>
      </div>
    </div>
  );
};

export default Task;


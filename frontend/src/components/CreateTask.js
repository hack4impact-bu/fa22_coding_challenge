import React from "react";
import { addTask } from "../services/taskServices";

const CreateTask = () => {
  /* CREATE 'CreateTask' COMPONENT */
  
  return (
    <p className='d-flex flex-column align-items-center pt-5'>
      Create Task Component
      <textarea className="flex flex-column bg-white h-[300px] mt-5 w-[30%]">
        Enter the task
      </textarea>
    </p>
  );
};

export default CreateTask;

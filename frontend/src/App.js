import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateTask from "./components/CreateTask";
import TaskList from "./components/TaskList";
import Navbar from "./components/Navbar";
import React from 'react';

function App() {
  const [taskTitle, setTaskTitle] = useState(' ');
  const [taskBody, setTaskBody] = useState(' ');

  return (
    <BrowserRouter>
      <div className='App'>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<TaskList />} />
          <Route path='/create' 
            element={
            <CreateTask 
              handleSubmit = {handleSubmit}
              taskTitle = {taskTitle}
              setTaskTitle = {setTaskTitle}
              taskBody = {taskBody}
              setTaskBody ={setTaskBody}/>
            } 
            />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

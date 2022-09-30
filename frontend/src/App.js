import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateTask from "./components/CreateTask";
import TaskList from "./components/TaskList";
import Navbar from "./components/Navbar";
import React from 'react';
import addTask from "./services/taskServices";
import deleteTask  from "./services/taskServices";
import TaskList from "./components/TaskList";
import Task from "./components/Task";

function App() {
  
  const [taskTitle, setTaskTitle] = useState(' ');
  const [taskBody, setTaskBody] = useState(' ');
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const id = posts.length ? posts[posts.length -1].id + 1 : 1;
    const newTask = {id, title: taskTitle, body: taskBody}
    try {
      const response = await addTask(newTask);
      const allTasks = [...tasks, response.data];
      setTasks(allTasks);
      setTaskTitle('');
      setTaskBody('');
      history.push('/');
    } catch (error){
      console.log(`Woops! Error: ${error.message}`)
    }
  }

  const handleDelete = async(id) => {
    try {
      await deleteTask(`task/${id}`)
      const taskList = tasks.filter(task => task.id !== id);
      setTasks(taskList);
      history.push('/');
    }catch (error){
      console.log(`Woops! Error: ${error.message}`)
    }
  }


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
          <Route path='/create/:id'
            element={
              <Task 
              tasks={tasks} 
              handleDelete={handleDelete} />
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

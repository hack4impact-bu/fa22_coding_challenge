import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateTask from "./components/CreateTask";
import TaskList from "./components/TaskList";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<TaskList />} />
          <Route path='/create' element={<CreateTask />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

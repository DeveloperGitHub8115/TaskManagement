import { BrowserRouter, Routes,Route} from 'react-router-dom';
import './App.css';
import { CreateTask } from './Components/CreateTask';
import { Dashboard } from './Components/DashBoard';
import { ViewTask } from './Components/ViewTask';
import { Navigationbar } from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Navigationbar />
            <Routes>
              <Route path='/' element={<Dashboard />}></Route>
              <Route path='/create-task' element={<CreateTask />}></Route>
              <Route path='/view-task' element={<ViewTask />}></Route>
            </Routes>
        </BrowserRouter>
       

    </div>
  );
}

export default App;

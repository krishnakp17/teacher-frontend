import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddTeacher from './components/AddTeacher';
import ViewTeacher from './components/ViewTeacher';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<AddTeacher/>}/>
        <Route path='/view' element={<ViewTeacher/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

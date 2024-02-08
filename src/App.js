import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddTeacher from './components/AddTeacher';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<AddTeacher/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

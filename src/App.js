import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './components/login';
import Main from './pages/main';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/main' element={<Main />} />
          <Route path='*' element={<div>Page NotFound</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

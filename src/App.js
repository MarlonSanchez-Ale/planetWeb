import './App.css';
import ListPlanets from './components/ListPlanets';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<ListPlanets />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;

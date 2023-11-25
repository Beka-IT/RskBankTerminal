import './App.css';
import PinAuth from './PinAuth';
import MainMenu from './MainMenu';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Print from './Print';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
    <Routes>
      <Route path="/" Component={MainMenu}></Route>
      <Route path="/e-queue" Component={PinAuth}></Route>
      <Route path="/print" Component={Print}></Route>
    </Routes>
</BrowserRouter>
    </div>
  );
}

export default App;

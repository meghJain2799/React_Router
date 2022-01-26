import './App.css';
import Navbar from './Components/Navbar';
import { Routes, Route } from "react-router-dom";
import Mounting from './Components/Mounting';
import Updating from './Components/Updating';
import Unmounting from './Components/Unmounting';

function App() {
  return (
    <div className="App text-white">
      <h1 className='heading text-center'> Component Life Cycle</h1>
      <Navbar/>
      <Routes>
        <Route path="/mounting" element={<Mounting />} />
        <Route path="/updating" element={<Updating />} />
        <Route path="/unmounting" element={<Unmounting />} />
      </Routes>
    </div>
  );
}

export default App;

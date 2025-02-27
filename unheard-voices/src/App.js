import './styles/App.css';  // Corrected path
import Navbar from './components/Navbar'; 
import { Outlet } from 'react-router-dom'; 
import RedDot from './components/RedDot';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Outlet />
      <RedDot />
    </div>
);
}
export default App;







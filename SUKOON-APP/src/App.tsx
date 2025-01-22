// App.tsx
import { Route, Routes } from 'react-router-dom'; // Import Routes and Route
import Register from '@/customComponents/login/register.tsx';
import Auth from '@/customComponents/login/auth.tsx';
import Login from '@/customComponents/login/Login.tsx';
import Homepage from '@/customComponents/homepage/Homepage.tsx'
import PinnedMenu from './customComponents/homepage/pinnedMenu';
import Navbar from './customComponents/navBar/Navbar';

const App = () => {
  return (
    <div>
      <Homepage />
      <Navbar />

    </div>
    
  );
};

export default App;




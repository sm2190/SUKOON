// App.tsx
import { Route, Routes } from 'react-router-dom'; // Import Routes and Route
import Register from '@/customComponents/login/register.tsx';
import Auth from '@/customComponents/login/auth.tsx';
import Login from '@/customComponents/login/Login.tsx';
// Ensure the correct path to your Statistics component

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Auth />} />         {/* Home or Auth page */}
      <Route path="/login" element={<Login />} />   {/* Login page */}
      <Route path="/register" element={<Register />} /> {/* Register page */}
      
    </Routes>
  );
};

export default App;



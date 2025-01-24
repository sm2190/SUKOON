// App.tsx
import { Route, Routes } from 'react-router-dom'; // Import Routes and Route
import Register from '@/customComponents/login/register.tsx';
import Auth from '@/customComponents/login/auth.tsx';
import Login from '@/customComponents/login/Login.tsx';
import QRWait from '@/customComponents/login/QRWait.tsx';
import ResetPassword from '@/customComponents/login/ResetPassword.tsx';
import OTP from '@/customComponents/login/OTP.tsx';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Auth />} />         {/* Home or Auth page */}
      <Route path="/login" element={<Login />} />   {/* Login page */}
      <Route path="/register" element={<Register />} /> {/* Register page */}
      <Route path="/QRWait" element={<QRWait />} />
      <Route path="/ResetPassword" element={<ResetPassword />} />
      <Route path="/OTP" element={<OTP />} />
      
    </Routes>
  );
};

export default App;




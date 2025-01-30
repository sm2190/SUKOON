// App.tsx
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes and Route
import Register from '@/customComponents/login/register.tsx';
import Auth from '@/customComponents/login/auth.tsx';
import Login from '@/customComponents/login/Login.tsx';
import AccountsPage from '@/customComponents/login/AccountsPage.tsx'; // Use @ alias
import AccInfo from  '@/customComponents/login/AccInfo.tsx'; // Use @ alias
import Rate from  '@/customComponents/login/Rate'; // Use @ alias
import QRWait from '@/customComponents/login/QRWait.tsx';
import ResetPassword from '@/customComponents/login/ResetPassword.tsx';
import OTP from '@/customComponents/login/OTP.tsx';
import NewPass from '@/customComponents/login/NewPass.tsx';
import Statistics from '@/customComponents/stats/stats_mainpage'; // Ensure the correct path to your Statistics component

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Auth />} />         {/* Home or Auth page */}
      <Route path="/login" element={<Login />} />   {/* Login page */}
      <Route path="/register" element={<Register />} /> {/* Register page */}
      <Route path="/accounts" element={<AccountsPage />} />
      <Route path="/accinfo" element={<AccInfo />} />
      <Route path="/rating" element={<Rate />} />
      <Route path="/QRWait" element={<QRWait />} /> {/* QR Wait page */}
      <Route path="/ResetPassword" element={<ResetPassword />} /> {/* Reset Password page */}
      <Route path="/OTP" element={<OTP />} /> {/* OTP page */}
      <Route path="/NewPass" element={<NewPass />} /> {/* New Password page */}
      <Route path="/stats" element={<Statistics />} /> {/* Statistics page */}
    </Routes>
  );
};

export default App;
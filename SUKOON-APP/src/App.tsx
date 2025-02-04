// App.tsx
import { Route, Routes } from 'react-router-dom'; // Import Routes and Route
import Register from '@/customComponents/login/register.tsx';
import Auth from '@/customComponents/login/auth.tsx';
import Login from '@/customComponents/login/Login.tsx';
import QRWait from '@/customComponents/login/QRWait.tsx';
import ResetPassword from '@/customComponents/login/ResetPassword.tsx';
import OTP from '@/customComponents/login/OTP.tsx';
import NewPass from '@/customComponents/login/NewPass.tsx';
import AccInfo from '@/customComponents/account/AccInfo.tsx';
import AccountsPage from '@/customComponents/account/AccountsPage.tsx';
import Rate from '@/customComponents/account/Rate.tsx';
import SupportCenter from '@/customComponents/account/SupportCenter.tsx';
import ThirdPartyServices from '@/customComponents/account/ThirdPartyServices.tsx';
import MoreTools from '@/customComponents/account/MoreTools.tsx';
import SettingsPage from '@/customComponents/settings/SettingsPage.tsx';
import Security from '@/customComponents/settings/Security.tsx';
import Notifications from '@/customComponents/settings/Notifications.tsx';
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Auth />} />         {/* Home or Auth page */}
      <Route path="/login" element={<Login />} />   {/* Login page */}
      <Route path="/register" element={<Register />} /> {/* Register page */}
      <Route path="/QRWait" element={<QRWait />} /> {/* QR Wait page */}
      <Route path="/ResetPassword" element={<ResetPassword />} /> {/* Reset Password page */}
      <Route path="/OTP" element={<OTP />} /> {/* OTP page */}
      <Route path="/NewPass" element={<NewPass />} /> {/* New Password page */}
      <Route path="/accinfo" element={<AccInfo />} /> {/* Account Info page */}
      <Route path="/accountspage" element={<AccountsPage />} /> {/* Accounts Page */}
      <Route path="/rate" element={<Rate />} /> {/* Rate page */}
      <Route path="/support" element={<SupportCenter />} /> {/* SupportCenter page */}
      <Route path="/services" element={<ThirdPartyServices />} /> {/* ThirdPartyServices page */}
      <Route path="/tools" element={<MoreTools />} /> {/* MoreTools page */}
      <Route path="/settings" element={<SettingsPage />} /> {/* Settings page */}
      <Route path="/security" element={<Security />} /> {/* Security page */}
      <Route path="/notifications" element={<Notifications />} /> {/* Notifications page */}
    </Routes>
  );
};

export default App;
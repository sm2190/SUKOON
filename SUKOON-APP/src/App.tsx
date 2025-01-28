// App.tsx
import {Route, Routes} from 'react-router-dom'; // Import Routes and Route
import Register from '@/customComponents/login/register.tsx';
import Auth from '@/customComponents/login/auth.tsx';
import Login from '@/customComponents/login/Login.tsx';
import AccountsPage from '@/customComponents/login/AccountsPage.tsx'; // Use @ alias
import AccInfo from  '@/customComponents/login/AccInfo.tsx'; // Use @ alias
import Rate from  '@/customComponents/login/Rate'; // Use @ alias

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Auth />} />         {/* Home or Auth page */}
      <Route path="/login" element={<Login />} />   {/* Login page */}
      <Route path="/register" element={<Register />} /> {/* Register page */}
      <Route path="/accounts" element={<AccountsPage />} />
      <Route path="/accinfo" element={<AccInfo />} />
      <Route path="/rating" element={<Rate />} />


    </Routes>
  );
};

export default App;




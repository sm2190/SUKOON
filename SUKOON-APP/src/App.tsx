import { Routes, Route } from 'react-router-dom';
import RoomList from './customComponents/rooms/roomsList'; // Path to RoomList
import Devices from './customComponents/rooms/devices'; // Path to Devices page
//import DeviceDetailPage from './customComponents/rooms/ACControlPage'; // Path to DeviceDetailPage
import ACControlPage from './customComponents/rooms/ACControlPage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<RoomList />} />
      <Route path="/devices/:roomId" element={<Devices />} />
      <Route path="/device/:id" element={<ACControlPage/>} /> {/* Add route for device details */}
    </Routes>
  );
};

export default App;



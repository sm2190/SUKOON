import { Routes, Route } from 'react-router-dom';
import RoomList from './customComponents/rooms/roomsList'; // Path to RoomList
import Devices from './customComponents/rooms/devices'; // Path to Devices page

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<RoomList />} />
      <Route path="/devices/:roomId" element={<Devices />} />
    </Routes>
  );
};

export default App;




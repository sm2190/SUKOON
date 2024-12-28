import { Routes, Route } from 'react-router-dom';
import RoomList from './customComponents/rooms/roomsList.tsx';  // Your import for RoomList

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<RoomList />} />
        {/* Add more routes here if needed */}
      </Routes>
    </div>
  );
};

export default App;



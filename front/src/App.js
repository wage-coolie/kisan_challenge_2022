import './App.css';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
    useNavigate
} from "react-router-dom";



// Importing Pages
import AllContacts from './pages/allContacts/AllContacts'
import NotFound from './pages/404/NotFound'
import SendOTP from './pages/sendOTP/SendOTP'
import History from './pages/history/History'


// Importing Components
import Topbar from './components/topbar/Topbar'

function App() {
  return (
    <Router>
      <Topbar />

      <Routes>
        <Route path='*' element={<NotFound />} />
        <Route path='/' element={<AllContacts />} />
        <Route path='/send_otp/:username' element={<SendOTP />} />
        <Route path='/sent' element={<History />} />

      </Routes>
      
    </Router>
  );
}

export default App;

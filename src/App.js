import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import Register from './pages/Auth/Register';
import Login from './pages/Auth/Login';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UserProfile from './pages/UserProfile/UserProfile';
import UpdateProfile from './pages/UserProfile/UpdateProfile';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ToastContainer
          position="bottom-right"
          closeOnClick
          pauseOnHover
          theme="dark"
        />
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />

          <Route path="/cart" element={<Cart />} />
          <Route path="/register" element={<Register />} />
          <Route exact path="/login" element={<Login />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/profile/:id" element={<UpdateProfile />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

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
import Dashboard from './pages/Admin/Dashboard';
import Products from './pages/Admin/Products';
import Orders from './pages/Admin/Orders';
import Users from './pages/Admin/Users';
import CreateProduct from './pages/Admin/CreateProduct/CreateProduct';
import EditProduct from './pages/Admin/EditProduct/EditProduct';
import EditUser from './pages/Admin/EditUser/EditUser';
import ProductsList from './pages/Admin/lists/ProductsList';
import OrdersList from './pages/Admin/lists/OrdersList';
import UsersList from './pages/Admin/lists/UsersList';
import NotFound from './components/NotFound/NotFound';
import Shipping from './components/CheckoutSuccess/Shipping';
import ConfirmOrder from './components/CheckoutSuccess/ConfirmOrder';
import Payment from './components/CheckoutSuccess/Payment';

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

          <Route path="/shipping" element={<Shipping />} />
          <Route path="/order/confirm" element={<ConfirmOrder />} />
          <Route path="/order/payment" element={<Payment />} />

          <Route path="/profile" element={<UserProfile />} />
          <Route path="/profile/:id" element={<UpdateProfile />} />
          <Route path="/product/:id" element={<ProductDetail />} />

          <Route exact path="/admin" element={<Dashboard />}>
            <Route exact path="products" element={<Products />}>
              <Route index element={<ProductsList />} />
              <Route path="create-product" element={<CreateProduct />} />
              <Route path="edit-product/:id" element={<EditProduct />} />
            </Route>
            <Route path="orders" element={<Orders />}>
              <Route index element={<OrdersList />} />
            </Route>
            <Route path="users" element={<Users />}>
              <Route index element={<UsersList />} />
              <Route path="edit-user/:id" element={<EditUser />} />
            </Route>
          </Route>
          <Route path="/not-found" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

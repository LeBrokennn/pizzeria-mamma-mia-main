import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Cart from "./pages/Cart.jsx";
import Pizza from "./components/Pizza.jsx";
import Profile from "./pages/Profile.jsx";
import NotFound from "./pages/NotFound.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import { CartProvider } from "./context/CartContext.jsx";
import { PizzaProvider } from "./context/PizzaContext.jsx";
import { UserProvider } from "./context/UserContext.jsx";


function App() {
  return (
    <UserProvider>
      <PizzaProvider>
        <CartProvider>
          <div className="d-flex flex-column min-vh-100">
            <Navbar />
            <main className="flex-grow-1">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route 
                  path="/login" 
                  element={
                    <ProtectedRoute requireAuth={false}>
                      <Login />
                    </ProtectedRoute>
                  } 
                />
                <Route 
                  path="/register" 
                  element={
                    <ProtectedRoute requireAuth={false}>
                      <Register />
                    </ProtectedRoute>
                  } 
                />
                <Route path="/cart" element={<Cart />} />
                <Route path="/pizza/:id" element={<Pizza />} />
                <Route 
                  path="/profile" 
                  element={
                    <ProtectedRoute requireAuth={true}>
                      <Profile />
                    </ProtectedRoute>
                  } 
                />
                <Route path="/404" element={<NotFound />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </CartProvider>
      </PizzaProvider>
    </UserProvider>
  );
}
export default App;
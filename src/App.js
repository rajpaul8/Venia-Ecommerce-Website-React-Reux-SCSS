import Home from "./Pages/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Category from "./Pages/Category/Category";
import ProductDetail from "./Pages/ProductDetail";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cart from "./Pages/Cart";
import CheckoutContactPage from "./Pages/Checkout/CheckoutContactPage";
import CheckoutShippingPage from "./Pages/Checkout/CheckoutShippingPage";
import CheckoutPaymentPage from "./Pages/Checkout/CheckoutPaymentPage";
import CheckoutReviewPage from "./Pages/Checkout/CheckoutReviewPage";
import CheckoutOrderPlacedPage from "./Pages/Checkout/CheckoutOrderPlacedPage";
import ScrollToTop from "./hooks/ScrollToTop";

function App() {
  return (
    <>
      <Router>
        <div className="contained">
          <Navbar />
          <ScrollToTop />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Home />
                </>
              }
            ></Route>
            <Route
              path="/products/:id"
              element={
                <>
                  <Category />
                  <Footer />
                </>
              }
            ></Route>
            <Route
              path="/products/:id/:productID"
              element={
                <>
                  <ProductDetail />
                  <Footer />
                </>
              }
            ></Route>
            <Route
              path="/products"
              element={
                <>
                  <Category />
                  <Footer />
                </>
              }
            ></Route>
            <Route
              path="/cart"
              element={
                <>
                  <Cart />
                  <Footer />
                </>
              }
            ></Route>
            <Route
              path="/checkout"
              element={
                <>
                  <CheckoutContactPage />
                  <Footer />
                </>
              }
            ></Route>
            <Route
              path="/checkout/shipping-information"
              element={
                <>
                  <CheckoutShippingPage />
                  <Footer />
                </>
              }
            ></Route>
            <Route
              path="/checkout/payment-information"
              element={
                <>
                  <CheckoutPaymentPage />
                  <Footer />
                </>
              }
            ></Route>
            <Route
              path="checkout/final-review"
              element={
                <>
                  <CheckoutReviewPage />
                  <Footer />
                </>
              }
            ></Route>
            <Route
              path="checkout/order-placed"
              element={
                <>
                  <CheckoutOrderPlacedPage />
                  <Footer />
                </>
              }
            ></Route>
          </Routes>
          <ToastContainer />
        </div>
      </Router>
    </>
  );
}

export default App;

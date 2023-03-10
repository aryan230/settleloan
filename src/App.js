import "./assets/css/bootstrap.min.css";
import "./assets/css/animate.css";
import "./assets/css/custom-animation.css";
import "./assets/css/slick.css";
import "./assets/css/nice-select.css";
import "./assets/css/flaticon.css";
import "./assets/css/swiper-bundle.css";
import "./assets/css/meanmenu.css";
import "./assets/css/font-awesome-pro.css";
import "./assets/css/magnific-popup.css";
import "./assets/css/spacing.css";
import "./assets/css/style.css";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Screens/Home";
import DebtFree from "./Screens/Services/DebtFree";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/debt-free-solutions" element={<DebtFree />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

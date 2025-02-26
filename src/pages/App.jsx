import "../App.css";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Second from "./second";  // Capitalized
import Login from "./login";  // Capitalized
import Signup from "./signup";  // Capitalized

function Home() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h1 className="title">🍴 CookWise 🍴</h1>
      <button className="start-btn" onClick={() => navigate("/second")}>
        Lettuce Begin! 🥬
      </button>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/second" element={<Second />} />  {/* Capitalized */}
        <Route path="/login" element={<Login />} />  {/* Capitalized */}
        <Route path="/signup" element={<Signup />} />  {/* Capitalized */}
      </Routes>
    </Router>
  );
}

export default App;

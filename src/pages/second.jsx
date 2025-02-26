import React from "react";
import { useNavigate } from "react-router-dom";
import "../App.css"; // Ensure styles are applied

function Second() {
  const navigate = useNavigate();

  return (
    <div className="second-container">
      {/* Text that appears after clicking "Lettuce Begin!" */}
      <h2 className="cheese-text">Please Cheese One 🧀</h2>

      {/* Buttons stacked vertically */}
      <div className="button-group">
        <button className="auth-btn" onClick={() => navigate("/login")}>
          Existing User
        </button>
        <button className="auth-btn" onClick={() => navigate("/signup")}>
          New User
        </button>
      </div>
    </div>
  );
}

export default Second;

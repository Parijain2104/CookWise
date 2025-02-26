import React, { useState } from "react";
import "../App.css"; // Ensure styles are applied

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = () => {
    console.log("Email:", email);
    console.log("Password:", password);
    alert("Signup functionality will be added soon!"); // Placeholder action
  };

  return (
    <div className="signup-container">
      <h2 className="signup-title">Whisk your way in ...🥄</h2>

      {/* Email Input */}
      <input
        type="email"
        placeholder="Enter your email"
        className="signup-input"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      {/* Password Input */}
      <input
        type="password"
        placeholder="Enter your password"
        className="signup-input"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      {/* Create Account Button */}
      <button className="signup-btn" onClick={handleSignup}>
        Create Account
      </button>
    </div>
  );
}

export default Signup;

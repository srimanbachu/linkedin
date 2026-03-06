import { useState } from "react";
import "./App.css";

export default function Signup() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log({
      email,
      password
    });
  };

  return (
    <div className="page">
      <div className="card">

        <h1 className="logo">LinkedIn</h1>
        <h5 className="title">Sign up</h5>

        <form onSubmit={handleSubmit} className="form">
          <input
            type="email"
            placeholder="Email"
            className="input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" className="button">
            Agree & Join
          </button>

        </form>

      </div>
    </div>
  );
}
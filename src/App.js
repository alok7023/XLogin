import { useState } from "react";
import "./App.css";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "user" && password === "password") {
      setError("");
      setIsSubmitted(true);
    } else {
      setError("Invalid username or password");
      setIsSubmitted(false);
    }
  };
  return (
    <div className="Container">
      <h1>Login Page</h1>
      {isSubmitted ? (
        <div>
          <p>Welcome, {username}!</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="inputField">
            {error && <p>{error}</p>}
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              placeholder="username"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="inputField">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              placeholder="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="submitBtn">
            Submit
          </button>
        </form>
      )}
    </div>
  );
}

export default App;

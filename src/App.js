import { useState } from "react";
import "./App.css";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if(username==="user" && password==="password"){
      setMessage("Welcome, user!");
    }else{
      setMessage("Invalid username or password");
    }

  };
  return (
    <div className="Container">
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <div className="inputField">
          <label>
            Username:
            <input
              type="text"
              placeholder="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </label>
        </div>
        <div className="inputField">
          <label>
            Password:
            <input
              type="password"
              placeholder="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
        </div>
        <button className="submitBtn">Submit</button>
      </form>
      <p>{message}</p>
    </div>
  );
}

export default App;

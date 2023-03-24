import React, { useEffect, useState, Switch } from "react";
import { Link, Router, Route, useLocation, Navigate } from "react-router-dom";
import AddNew from "../../Book/Add/AddNew";


function Login() {
  const location = useLocation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setLoggedIn(true);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://127.0.0.1:8000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("token", data.token);
        setLoggedIn(true);
        if(data == "HAHA")
        {
          console.log(data);
          alert(data);
          return (
            <Navigate to="/" state={{ from: location }} replace></Navigate>
          );
        }
      } else {
        setError(data.message);
      }
    } catch (error) {
      setError("Something went wrong!");
    }
  };
  
  // if (loggedIn) {
  //   return <Navigate to="/" />;
  // }
  return (
    <div className="d-flex justify-content-center align-items-center">
      <form
        onSubmit={handleSubmit}
        className="border d-flex flex-column gap-3 w-25 px-3 py-5 bg-light bg-gradient rounded-5"
      >
        <h2 className="text-center fw-bold">Login</h2>
        {error && <p>{error}</p>}
        <input
          className="rounded-2 py-2 border-0"
          placeholder="Email"
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="rounded-2 py-2 border-0"
          placeholder="Password"
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <small>
          <Link>Forgot password?</Link>
        </small>
        <button
          type="submit"
          className="py-2 rounded bg-dark bg-gradient text-white border-0"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Login;
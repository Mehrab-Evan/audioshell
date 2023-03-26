import React, { useEffect, useState, Switch } from "react";
import { Link, useNavigate } from "react-router-dom";
import AddNew from "../../Book/Add/AddNew";

function Login() {
  const navigate = useNavigate();
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
    setEmail("");
    setPassword("");
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
        if (data === "HAHA") {
          // console.log(data);
          alert("Welcome Honourable Client");
          navigate("/addnew");
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
    <div className="">
      <div className="hero min-h-screen bg-base-100">
        <div className="hero-content w-[450px] flex-col lg:flex-row-reverse">
          <div className="card w-full shadow-2xl border border-slate-700 bg-base-100">
            <div className="card-body">
              <div className="text-center lg:text-left">
                <h1 className="text-5xl font-bold text-center text-[#5865F2]">
                  Login
                </h1>
              </div>
              <div className="form-control">
                <label className="label">
                  {/* <span className="label-text">Email</span> */}
                </label>
                <input
                  placeholder="Email"
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  {/* <span className="label-text">Password</span> */}
                </label>
                <input
                  placeholder="Password"
                  type="password"
                  id="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="/forgot" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-[#5865F2]" onClick={handleSubmit}>
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <form
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
      </form> */}
    </div>
  );
}

export default Login;

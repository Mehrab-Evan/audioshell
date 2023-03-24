import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Signup.css";
function Signup() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    setName("");
    setEmail("");
    setPassword("");
    setCPassword("");
    event.preventDefault();

    const formData = {
      name,
      password,
      cpassword,
      email,
    };

    // Pass the form data to the API using a reference
    const apiUrl = "http://127.0.0.1:8000/api/insert";
    fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  };

  return (
    <div className="d-flex justify-content-center align-items-center">
      <div className="hero min-h-screen bg-base-100">
        <div className="hero-content w-[450px] flex-col lg:flex-row-reverse">
          <div className="card w-full shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="text-center lg:text-left">
                <h1 className="text-5xl font-bold text-center">Signup</h1>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  placeholder="Name"
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
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
                  <span className="label-text">Password</span>
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
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  placeholder="Confirm Password"
                  type="password"
                  id="cpassword"
                  name="cpassword"
                  value={cpassword}
                  onChange={(event) => setCPassword(event.target.value)}
                  className="input input-bordered"
                />
                <label className="label">
                  {/* <a href="/forgot" className="label-text-alt link link-hover">
                  </a> */}
                  <small>
                    Already have an account?
                    <Link to="/login" className="mx-1">
                      Login
                    </Link>
                  </small>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary" onClick={handleSubmit}>
                  Signup
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
        <h2 className="text-center fw-bold">Signup</h2>
        <input
        required
          className="rounded-2 py-2 border-0"
          placeholder="Name"
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />

        <input
        required
          className="rounded-2 py-2 border-0"
          placeholder="Email"
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />

        <input
        required
          className="rounded-2 py-2 border-0"
          placeholder="Password"
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <input
        required
          className="rounded-2 py-2 border-0"
          placeholder="Confirm Password"
          type="password"
          id="cpassword"
          name="cpassword"
          value={cpassword}
          onChange={(event) => setCPassword(event.target.value)}
        />
        <small>Already have an account?<Link to="/login">Login</Link></small>
        <button
          type="submit"
          className="py-2 rounded bg-dark bg-gradient text-white submit-btn"
        >
          Submit
        </button>
      </form> */}
    </div>
  );
}

export default Signup;

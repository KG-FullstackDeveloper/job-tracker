import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Register() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !user.name ||
      !user.email ||
      !user.password ||
      !user.confirmPassword
    ) {
      alert("Fill in all fields.");
      return;
    }

    if (user.password !== user.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    localStorage.setItem("registeredUser", JSON.stringify(user));

    alert("Registration Successful!");

    navigate("/login");
  };

  return (
    <div className="auth-page">
      <div className="auth-container">

        <div className="auth-left">

          <h1>JobTracker</h1>

          <h2>Create Account</h2>

          <p>
            Start managing your job applications professionally.
          </p>

        </div>

        <div className="auth-right">

          <form onSubmit={handleSubmit}>

            <h2>Register</h2>

            <input
              type="text"
              name="name"
              placeholder="Full Name"
              onChange={handleChange}
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
            />

            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              onChange={handleChange}
            />

            <button>Create Account</button>

            <p>

              Already have an account?

              <Link to="/login">

                Login

              </Link>

            </p>

          </form>

        </div>

      </div>
    </div>
  );
}

export default Register;
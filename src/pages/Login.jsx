import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Login() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {

  e.preventDefault();

  if (!user.email || !user.password) {
    alert("Please fill in all fields.");
    return;
  }

  const registeredUser = JSON.parse(
    localStorage.getItem("registeredUser")
  );

  if (!registeredUser) {
    alert("No account found. Please register first.");
    return;
  }

  if (
    user.email !== registeredUser.email ||
    user.password !== registeredUser.password
  ) {
    alert("Incorrect email or password.");
    return;
  }

  localStorage.setItem("loggedIn", "true");
  localStorage.setItem(
    "user",
    JSON.stringify(registeredUser)
  );

  navigate("/");

};

  return (
    <div className="auth-page">
      <div className="auth-container">

        <div className="auth-left">

          <h1>JobTracker</h1>

          <h2>Welcome Back 👋</h2>

          <p>
            Track every application.
            Stay organized.
            Land your dream job.
          </p>

        </div>

        <div className="auth-right">

          <form onSubmit={handleSubmit}>

            <h2>Login</h2>

            <input
              type="email"
              placeholder="Email"
              name="email"
              value={user.email}
              onChange={handleChange}
            />

            <input
              type="password"
              placeholder="Password"
              name="password"
              value={user.password}
              onChange={handleChange}
            />

            <button>

              Login

            </button>

            <p>

              Don't have an account?

              <Link to="/register">

                Register

              </Link>

            </p>

            <Link className="forgot" to="/forgot-password">

              Forgot Password?

            </Link>

          </form>

        </div>

      </div>
    </div>
  );
}

export default Login;
import { Link } from "react-router-dom";

function ForgotPassword() {
  return (
    <div className="auth-page">

      <div className="auth-container">

        <div className="auth-right">

          <form>

            <h2>Forgot Password</h2>

            <input
              type="email"
              placeholder="Enter your email"
            />

            <button>

              Send Reset Link

            </button>

            <Link to="/login">

              Back to Login

            </Link>

          </form>

        </div>

      </div>

    </div>
  );
}

export default ForgotPassword;
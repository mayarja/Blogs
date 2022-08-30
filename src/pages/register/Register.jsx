import "./register.css";
import { Link } from "react-router-dom";
function Register({ fnregister }) {
  return (
    <div className="register">
      <form className="register-form">
        <h2>Register</h2>

        <label>Username</label>
        <input type="text" placeholder="Enter your username.." required />
        <label>Email</label>
        <input type="email" placeholder="Enter your email.." required />
        <label>Password</label>
        <input type="password" placeholder="Enter your password.." required />
        <button className="btn form-control " onClick={fnregister}>
          <Link className="Link" to="/">
            Register
          </Link>
        </button>
      </form>
      <button className="btn btn-register">
        <Link className="Link" to="/login">
          Login
        </Link>
      </button>
    </div>
  );
}

export default Register;

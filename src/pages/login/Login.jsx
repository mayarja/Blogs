import "./login.css";
import { Link } from "react-router-dom";
function Login() {
  return (
    <div className="login">
      <form className="login-form">
        <h2 className="m-auto mb-4">Login</h2>

        <label>Username</label>
        <input type="text" placeholder="Enter your username.." />
        <label>Email</label>
        <input type="email" placeholder="Enter your email.." />
        <label>Password</label>
        <input type="password" placeholder="Enter your password.." />
        <button className="btn form-control ">Login</button>
      </form>
      <button className="btn btn-login">
        <Link className="Link" to="/register">
          register
        </Link>
      </button>
    </div>
  );
}

export default Login;

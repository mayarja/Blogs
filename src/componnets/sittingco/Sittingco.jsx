import "./sittingco.css";
import photo from "../image/mayar.jpg";
import { BsPersonCircle } from "react-icons/bs";
function Sittingco() {
  return (
    <div className="sitting-co">
      <div className="title">
        <span className="larg-span">Update Your Account</span>
        <span className="smull-span">Delete Account</span>
      </div>
      <form className="form-all">
        <label className="fs-4">Profile Picture</label>
        <div className="box-upload">
          <img src={photo} alt=".." />
          <label htmlFor="file">
            <BsPersonCircle size={25} className="icon" />
          </label>
          <input type="file" id="file" style={{ display: "none" }} />
        </div>
        <label>Username</label>
        <input type="text" placeholder="mayar" />
        <label>Email</label>
        <input type="email" placeholder="mayar@homtamil.com" />
        <label>Password</label>
        <input type="password" placeholder="key and number" />
        <button className="btn">upload</button>
      </form>
    </div>
  );
}

export default Sittingco;

import "./slidbar.css";
import mayar from "../image/mayar.jpg";
import photo from "../image/image-4.jpg";
import { AiFillFacebook, AiFillTwitterSquare } from "react-icons/ai";
import { FaInstagramSquare, FaPinterestSquare } from "react-icons/fa";

function Slidebar() {
  return (
    <div className="slidbar">
      <h3 className="slide-about">About Me</h3>
      <div className="img-title">
        <img src={photo} alt=".." />
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          labore pariatur quasi harum, illum, maxime sunt debitis ipsam quo vel
          reiciendis repellendus
        </p>
      </div>
      <div className="links-slidbar">
        <h3>CATEGORIES</h3>
        <ul className="list-unstyled">
          <li>Life</li>
          <li>Style</li>
          <li>Tech</li>
          <li>Music</li>
          <li>Cinema</li>
          <li>Sport</li>
        </ul>
      </div>

      <div className="follow-slidbar">
        <h3>Follow Us</h3>
        <div className="icons-slidbar">
          <AiFillFacebook size={20} />
          <FaInstagramSquare size={20} />
          <FaPinterestSquare size={20} />
          <AiFillTwitterSquare size={20} />
        </div>
      </div>
    </div>
  );
}

export default Slidebar;

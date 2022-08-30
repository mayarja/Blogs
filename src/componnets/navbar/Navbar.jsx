import React, { useState } from "react";
import "./navbar.css";
import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiOutlineSearch,
} from "react-icons/ai";
import { FaInstagramSquare, FaPinterestSquare } from "react-icons/fa";
import { AiOutlineBars, AiOutlineClose } from "react-icons/ai";
import photo from "../image/mayar.jpg";
import { Link } from "react-router-dom";

function Navbar({ user }) {
  let [show, setshow] = useState(true);

  let toggleicon = () => {
    setshow(!show);
  };
  return (
    <div className="nav text-center">
      <div className="col-lg-3 nav-l">
        <div className="icons">
          <AiFillFacebook size={27} />
          <FaInstagramSquare size={27} />
          <FaPinterestSquare size={27} />
          <AiFillTwitterSquare size={27} />
        </div>
      </div>
      <div className="col-lg-6 nav-c">
        <div className="links big">
          <ul className="list-unstyled d-flex">
            <li>
              <Link className="Link" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="Link" to="/">
                ABOUT
              </Link>
            </li>
            <li>
              <Link className="Link" to="/">
                CONTACT
              </Link>
            </li>
            <li>
              <Link className="Link" to="/write">
                WRITE
              </Link>
            </li>
            {user && (
              <li>
                <Link className="Link" to="/">
                  LOGOUT
                </Link>
              </li>
            )}
          </ul>
        </div>

        <div className="icon-links ">
          {show ? (
            <AiOutlineBars size={30} onClick={toggleicon} />
          ) : (
            <AiOutlineClose size={30} onClick={toggleicon} />
          )}
        </div>

        <div className={show ? "smull-links" : "smull-links show"}>
          <ul className="list-unstyled ">
            <li onClick={toggleicon}>
              <Link className="Link" to="/">
                HOME
              </Link>
            </li>
            <li onClick={toggleicon}>
              <Link className="Link" to="/">
                ABOUT
              </Link>
            </li>
            <li onClick={toggleicon}>
              <Link className="Link" to="/">
                CONTACT
              </Link>
            </li>
            <li onClick={toggleicon}>
              <Link className="Link" to="/write">
                WRITE
              </Link>
            </li>
            {user && (
              <li>
                <Link className="Link" to="/">
                  LOGOUT
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
      <div className="col-lg-3 nav-r d-flex gap-2">
        {user ? (
          <div className="image-ser">
            <Link className="Link" to="/Sittings">
              <img src={photo} alt="..." />
            </Link>
          </div>
        ) : (
          <div className="nologin ms-2">
            <ul className="list-unstyled ">
              <li>
                <Link className="Link" to="/login">
                  LOGIN
                </Link>
              </li>
              <li>
                <Link className="Link" to="/register">
                  REGISTER
                </Link>
              </li>
            </ul>
          </div>
        )}
        <AiOutlineSearch size={27} className="icon-serach-top mt-1" />
      </div>
    </div>
  );
}

export default Navbar;

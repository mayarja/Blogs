import "./write.css";
import photo from "../../componnets/image/image-3.jpg";
import { MdAddCircleOutline } from "react-icons/md";

function Write() {
  return (
    <div className="write">
      <div className="container">
        <div className="all-write">
          <img src={photo} alt="..." />
          <div className="input-tilte">
            <div className="send-input">
              <label htmlFor="file">
                <MdAddCircleOutline className="icon" size={40} />
              </label>
              <input type="file" id="file" style={{ display: "none" }} />
              <input type="text" id="text" onFocus={true} placeholder="Title" />
            </div>
            <button className="btn btn-primary">Publish</button>
          </div>
          <textarea type="text" placeholder="tell your story..." />
        </div>
      </div>
    </div>
  );
}

export default Write;

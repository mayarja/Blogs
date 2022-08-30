import "./header.css";
import imageOne from "../image/image-1.jpg";

function Header() {
  return (
    <div className="header">
      <div className="header-blog text-center">
        <span className="blog-1">React & Node</span>
        <span className="blog-2">Blog</span>
      </div>
      <div className="img-header">
        <img src={imageOne} alt=".." />
      </div>
    </div>
  );
}

export default Header;

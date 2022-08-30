import "./post.css";
import imageTwo from "../image/image-2.jpg";
import { Link } from "react-router-dom";
import { Fragment } from "react";

function Post() {
  return (
    <Fragment>
      <div className="post-compo">
        <img src={imageTwo} alt="..." />
        <Link className="Link" to="/post/22">
          <div className="post-compo-2">
            <h6>Music Life</h6>
            <h4>Lorem ipsum dolor sit amet</h4>
            <h6 className="h6-2">1 houer ago</h6>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              assumenda laboriosam tempore nobis dolorum? Iste inventore
              quibusdam, necessitatibus quidem corporis facilis, delectus
              tenetur dicta sint, alias architecto atque. Blanditiis, error.
            </p>
          </div>
        </Link>
      </div>
    </Fragment>
  );
}

export default Post;

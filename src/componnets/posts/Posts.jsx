import Post from "../post/Post";
import "./posts.css";

function Posts() {
  return (
    <div className="posts">
      <div className="row">
        <div className="col-xl-4 col-lg-6">
          <Post />
        </div>
        <div className="col-xl-4 col-lg-6">
          <Post />
        </div>
        <div className="col-xl-4 col-lg-6">
          <Post />
        </div>
        <div className="col-xl-4 col-lg-6">
          <Post />
        </div>
        <div className="col-xl-4 col-lg-6">
          <Post />
        </div>
        <div className="col-xl-4 col-lg-6">
          <Post />
        </div>
      </div>
    </div>
  );
}

export default Posts;

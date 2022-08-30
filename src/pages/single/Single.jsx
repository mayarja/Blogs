import SinglePost from "../../componnets/singlePost/SinglePost";
import Slidebar from "../../componnets/slidepar/Slidebar";
import "./single.css";

function Single() {
  return (
    <div className="single">
      <SinglePost />
      <Slidebar />
    </div>
  );
}

export default Single;

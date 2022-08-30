import "./singlepost.css";
import photo from "../image/image-3.jpg";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";

function SinglePost() {
  return (
    <div className="singlepost">
      <img src={photo} alt=".." />
      <div className="title-icon text-center ">
        <h1>
          Lorem ipsum dolor sit amet.
          <div className="icons ">
            <FaRegEdit color="aqua" />
            <RiDeleteBin6Fill color="tomato" />
          </div>
        </h1>
      </div>
      <div className="smull-title">
        <span>Author : Safak</span>
        <span>1 houer ago</span>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
        voluptatem, amet accusamus in consequuntur, ipsam harum nisi facere
        libero ea itaque distinctio consequatur, reprehenderit est magnam
        corporis totam laudantium incidunt! Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Mollitia voluptatem, amet accusamus in
        consequuntur, ipsam harum nisi facere libero ea itaque distinctio
        consequatur, reprehenderit est magnam corporis totam laudantium
        incidunt! Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Mollitia voluptatem, amet accusamus in consequuntur, ipsam harum nisi
        facere libero ea itaque distinctio consequatur, reprehenderit est magnam
        corporis totam laudantium incidunt! Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Mollitia voluptatem, amet accusamus in
        consequuntur, ipsam harum nisi facere libero ea itaque distinctio
        consequatur, reprehenderit est magnam corporis totam laudantium
        incidunt!
      </p>
    </div>
  );
}

export default SinglePost;

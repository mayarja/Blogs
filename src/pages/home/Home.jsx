import "./home.css";
import Header from "../../componnets/header/Header";
import Slidebar from "../../componnets/slidepar/Slidebar";
import Posts from "../../componnets/posts/Posts";
import { Fragment } from "react";

function Home() {
  return (
    <Fragment>
      <Header />
      <div className="home">
        <Posts />
        <Slidebar />
        {/*<Slidebar /> */}
      </div>
    </Fragment>
  );
}

export default Home;

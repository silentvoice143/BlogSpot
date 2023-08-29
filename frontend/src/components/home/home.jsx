import Title from "./Title";
import Post from "../posts/post";
import Category from "./Category";
import "./home.css";

const Home = () => {
  console.log("home content");
  return (
    <div className="Home">
      <Title />
      <div className="container-1">
        <div className="posts-contianer">
          <Post />
        </div>
        <div className="category-contaner">
          <Category />
        </div>
      </div>
    </div>
  );
};

export default Home;

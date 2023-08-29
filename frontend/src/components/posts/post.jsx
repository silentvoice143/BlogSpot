import demo from "../images/back2.jpg";
import "./post.css";
import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { getAllPost } from "../../services/apiService.js";
import CardPost from "./cardPost";

export default function Post() {
  const [posts, setPosts] = useState([]);
  let [searchParams] = useSearchParams();
  const category = searchParams.get("category");

  useEffect(() => {
    const fetchDAta = async () => {
      let response = getAllPost({ category: category || "" });
      response.then((result) => {
        if (!result) {
          console.log("something wrong in fetcching posts");
        }
        // console.log(result.data);
        setPosts(result.data);
      });
    };
    fetchDAta();
  }, [category]);

  function createCard(data) {
    return (
      <Link to={`/details/${data._id}`}>
        <CardPost
          key={data._id}
          title={data.title}
          content={data.content}
          dop={new Date(data.dop).toUTCString()}
          email={data.email}
          picture={data.picture}
          author={data.author}
          cat_tag={data.category}
          id={data._id}
        />
      </Link>
    );
  }
  // console.log(posts);
  if (posts.length !== 0) {
    return <div>{posts.map(createCard)}</div>;
  } else {
    return <div>Opps... There is no post to display.</div>;
  }
}

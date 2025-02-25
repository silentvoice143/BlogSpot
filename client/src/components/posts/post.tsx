import { useEffect, useState } from "react";
import { data, Link, useSearchParams } from "react-router-dom";
import { getAllPost } from "../../services/apiService.js";
import CardPost from "./cardPost.js";
import { dummyData } from "./data.js";

export default function Post() {
  const [posts, setPosts] = useState([]);
  let [searchParams] = useSearchParams();
  const category = searchParams.get("category");

  useEffect(() => {
    const fetchDAta = async () => {
      let data = await getAllPost(category);
      console.log(data, "----post data");
      if (data.success) {
        setPosts(data.posts);
      } else {
        setPosts([]);
      }
    };
    fetchDAta();
  }, []);

  // console.log(posts);
  if (posts.length !== 0) {
    return (
      <div className="flex flex-col gap-4 ">
        <div className="flex flex-col gap-10 pr-16 pl-7">
          {posts.map((data, idx) => (
            <div key={`foryoupost ${idx}`}>
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
              <div className="h-[1px] bg-gray-secondary3 w-1/2 m-auto mt-10"></div>
            </div>
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <p className="text-base text-gray-secondary2">
        Opps... There is no post to display.
      </p>
    );
  }
}

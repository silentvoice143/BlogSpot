// import demo from "../images/back2.jpg";
import "./post.css";

export default function CardPost(props) {
  return (
    <div className="card-container">
      <div className="card">
        <hr />
        <div className="postimage">
          <img src={props.picture} alt="" srcSet="" />
        </div>
        <div className="card-content-wrapper">
          <div className="author">
            <div className="avatar">{props.author[0].toUpperCase()}</div>
            {props.author}
          </div>
          <div
            style={{ display: props.cat_tag === "" ? "none" : "flex" }}
            className="category-tag"
          >
            <span>{props.cat_tag}</span>
          </div>
          <h1 className="post-title">{props.title}</h1>
          <p className="dop">
            {new Date(props.dop).toLocaleTimeString()} ,{" "}
            {new Date(props.dop).toDateString()}
          </p>
          <div className="post-body">{props.content}</div>
        </div>
      </div>
    </div>
  );
}

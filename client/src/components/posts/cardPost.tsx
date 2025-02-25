import CommentIcon from "../icons/CommentIcon";
import LikeIcon from "../icons/LikeIcon";
import { Card, CardContent, CardHeader } from "../ui/card";

export default function CardPost(props) {
  return (
    <Card className="p-0 border-none shadow-none outline-none w-fit max-w-[800px]">
      <CardContent className="p-0">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-6 h-6 text-xs bg-green-300 rounded-full">
            SV
          </div>
          <p className="text-sm font-light text-gray-secondary2">
            In Generative Ai by {props.author}
          </p>
        </div>
        <div className="flex gap-6">
          <div>
            <h1 className="mt-6 text-2xl font-bold font-montserrat">
              {props.title}
            </h1>
            <p
              className={`text-base text-wrap font-light text-gray-secondary1 truncate ...`}
            >
              {props.content}
            </p>
            <div className="flex gap-4 mt-8">
              <div>1 Jan</div>
              <div className="flex items-center gap-2">
                <LikeIcon />
                <p>23 likes</p>
              </div>
              <div className="flex items-center gap-2">
                <CommentIcon />
                <p>2 comments</p>
              </div>
            </div>
          </div>
          {props.picture && (
            <img
              src={props.picture}
              alt=""
              className="h-[132px] w-[198px] rounded-xl"
            />
          )}
        </div>
      </CardContent>
    </Card>
  );
}

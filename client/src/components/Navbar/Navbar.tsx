import { useNavigate, Link, useParams, useLocation } from "react-router-dom";
import { useState, useContext } from "react";
import { DataContext } from "../../context/Dataprovider";
import { logoutUser } from "../../services/apiService";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { PencilSquareIcon } from "@heroicons/react/24/outline";
import WriteIcon from "../icons/write";
import { Button } from "../ui/button";

export default function Navbar({ setAuthentication }) {
  const [drop, setDrop] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location.pathname);

  const { account } = useContext(DataContext);

  const handlelogoclick = () => {
    navigate("/");
  };

  function logouthandle(e) {
    let response = logoutUser(account.email);
    response.then((result) => {
      if (result) {
        console.log(result);
        setAuthentication(false);
        navigate("/");
      } else {
        console.log("something is wrong while logout");
      }
    });
  }
  return (
    <div className="relative flex flex-0 items-center justify-between h-[85px] px-10 navbar border-b-[1px] border-gray-lighter">
      <h1
        onClick={handlelogoclick}
        className="font-semibold text-32-34 font-montserrat"
      >
        Blogspot
      </h1>
      <div className="flex items-center gap-4 ">
        {location.pathname === "/post/create" && (
          <>
            <Button variant="default" className="rounded-full">
              Save to draft
            </Button>
            <Button className="rounded-full">Publish</Button>
          </>
        )}
        {location.pathname !== "/post/create" && (
          <div className="write">
            <Link
              to="/post/create"
              className="flex items-center h-10 gap-2 px-3 py-2 rounded-full hover:bg-gray-tertiary"
            >
              <WriteIcon />
              <span className="text-base">Write</span>
            </Link>
          </div>
        )}
        <DropdownMenu>
          <DropdownMenuTrigger className="w-10 h-10 text-base rounded-full bg-gray-secondary1 focus:outline-none">
            SK
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-[180px]" align="end">
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Stories</DropdownMenuItem>
            <DropdownMenuItem>Setting</DropdownMenuItem>
            <DropdownMenuItem>Help</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={(e) => {
                logouthandle(e);
              }}
            >
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}

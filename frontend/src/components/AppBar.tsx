import { Link, useNavigate } from "react-router-dom";
import mediumLogo from "../assets/images/mediumLogo.png";
import proPhoto from "../assets/images/ProPhoto.jpg";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Avatar,
} from "@nextui-org/react";

interface AppBarTypes {
  size: number | string;
}

export const AppBar: React.FC<AppBarTypes> = ({ size }) => {
  const navigate = useNavigate();
  const username = localStorage.getItem("username");

  const navigateToWriteBlog = () => {
    navigate("/writeblog", { state: { username } });
  };

  return (
    <div>
      <div
        className={`w-${size} h-14 flex items-center justify-between border-b px-8 border-gray-200`}
      >
        <div className="flex gap-2 items-center">
          <Link to={"/blogs"}>
            <div className="cursor-pointer">
              <img src={mediumLogo} alt="mediumLogo" className="w-11 h-6" />
            </div>
          </Link>
          <div>
            <input
              type="text"
              className="w-60 h-10 rounded-full indent-2 focus:outline-none"
              placeholder="Search"
            />
          </div>
        </div>
        <div className="flex items-center gap-10">
          <div
            className="flex items-center cursor-pointer"
            onClick={navigateToWriteBlog}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-7 text-gray-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
              />
            </svg>
            <div>
              <span className="text-gray-600">Write</span>
            </div>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-7 text-gray-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
              />
            </svg>
          </div>
          <div>
            <Dropdown>
              <DropdownTrigger>
                <Avatar
                  src={proPhoto}
                  alt="User Profile"
                  size="md" // Adjust size as needed
                  className="cursor-pointer" // For better visual feedback
                />
              </DropdownTrigger>
              <DropdownMenu aria-label="Static Actions">
                <DropdownItem key="new">Profile</DropdownItem>
                <DropdownItem key="copy">Stories</DropdownItem>
                <DropdownItem key="edit">Settings</DropdownItem>
                <DropdownItem
                  key="delete"
                  className="text-danger"
                  color="danger"
                >
                  Sign Out
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        </div>
      </div>
    </div>
  );
};

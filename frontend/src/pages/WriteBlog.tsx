import { Link, useLocation, useNavigate } from "react-router-dom";
import mediumLogo from "../assets/images/mediumLogo.png";
import proPhoto from "../assets/images/ProPhoto.jpg";
import { useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "../config";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Avatar,
} from "@nextui-org/react";

const calculateReadingTime = (content: string): string => {
  const wordsPerMinute = 180;
  const words = content.trim().split(/\s+/).length;
  const readingTimeMinutes = Math.ceil(words / wordsPerMinute);
  return `${readingTimeMinutes} min read`;
};

export const WriteBlog = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const username = location.state || { username: "Guest" };

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handlePublish = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      console.error("N JWT token found");
      return;
    }
    const createdAt = new Date().toLocaleDateString();
    const readTime = calculateReadingTime(content);

    try {
      const response = await axios.post(
        `${BACKEND_URL}/api/v1/blog`,
        { title, content, createdAt, readTime, name: username.username },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.status === 201) {
        navigate("/blogs");
      } else {
        console.error("Failed to publish blog:", response.data.error);
      }
    } catch (error) {
      console.error("Error publishing blog:", error);
    }
  };

  return (
    <div>
      <div className="flex justify-center">
        <div className="w-1000 h-16 flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <Link to={"/blogs"}>
              <div className="cursor-pointer">
                <img src={mediumLogo} alt="mediumLogo" className="w-11 h-6" />
              </div>
            </Link>
            <div>
              <span>Draft in {username.username}</span>
            </div>
          </div>
          <div className="flex gap-6 items-center">
            <div>
              <button
                className="bg-PublishBtn w-20 rounded-full text-white p-1 text-sm"
                onClick={handlePublish}
              >
                Publish
              </button>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-7 text-gray-600"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                />
              </svg>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-7 text-gray-600"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
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
      <div className="flex justify-center">
        <div className="flex flex-col w-770">
          <div className="flex items-center">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="0.5"
                stroke="currentColor"
                className="w-12 h-12"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </div>
            <div className="w-full">
              <textarea
                name="Title"
                className="w-600 text-3xl focus:outline-none"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              ></textarea>
            </div>
          </div>
          <div className="ml-12">
            <textarea
              name="content"
              placeholder="Write your content"
              value={content}
              className="focus:outline-none w-full"
              onChange={(e) => {
                setContent(e.target.value);
              }}
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
};

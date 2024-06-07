import { Link } from "react-router-dom";

interface BlogsCardType {
  id: string;
  profilePic: string;
  name: string;
  uploadDate: Date;
  subscriptionType?: string;
  title: string;
  content: string;
  tag: string;
  readTime: string;
  reason: string;
  blogPic: string;
}

export const BlogsCard: React.FC<BlogsCardType> = ({
  id,
  profilePic,
  name,
  uploadDate,
  subscriptionType,
  title,
  content,
  tag,
  readTime,
  reason,
  blogPic,
}) => {
  return (
    <Link to={`/blog/${id}`}>
      <div className="w-600 flex items-center justify-between border-b border-gray-200 cursor-pointer">
        <div className="h-60 flex flex-col justify-between">
          <div className="w-470">
            <div className="flex gap-2">
              <div>
                <img
                  src={profilePic}
                  alt="profilePic"
                  className="w-6 h-6 rounded-full object-cover"
                />
              </div>
              <div>
                <span className="font-semibold">{name}</span>
              </div>
              <div>
                <span className="text-gray-600 text-sm">
                  {uploadDate.toLocaleDateString(undefined, {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </span>
              </div>
              <div>
                <span className="text-gray-600 text-sm">
                  {subscriptionType}
                </span>
              </div>
            </div>
            <div className="h-36 mt-4">
              <div>
                <span className="font-extrabold text-lg">
                  {title.slice(0, 100) + "..."}
                </span>
              </div>
              <div>
                <span className="font-serif">
                  {content.slice(0, 180) + "..."}
                </span>
              </div>
            </div>
          </div>
          <div className="flex justify-between w-470 mb-5 items-center">
            <div className="flex gap-2">
              <div className="bg-gray-100 rounded-full px-1 py-1 flex items-center">
                <span className="text-xs">{tag}</span>
              </div>
              <div className="px-1 py-1">
                <span className="text-xs text-gray-600">{readTime}</span>
              </div>
              <div className="px-1 py-1">
                <span className="text-xs text-gray-600">{reason}</span>
              </div>
            </div>
            <div className="flex gap-3">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6 text-gray-600 cursor-pointer"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
                  />
                </svg>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6 text-gray-600 cursor-pointer"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6 text-gray-600 cursor-pointer"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <img
              src={blogPic}
              alt="blogPic"
              className="w-28 h-28 object-cover"
            />
          </div>
        </div>
      </div>
    </Link>
  );
};

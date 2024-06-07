import { Avatar } from "@nextui-org/react";
import avtPic from "../assets/images/ProPhoto.jpg";
import { useRef } from "react";
import { useScrollHandler } from "../hooks/useScrollHandler";
import "../index.css";

export const BlogRightBar: React.FC = () => {
  const sidebarRef = useRef<HTMLDivElement>(null);
  const sidebarContentRef = useRef<HTMLDivElement>(null);

  useScrollHandler(sidebarContentRef, sidebarRef);

  return (
    <div ref={sidebarRef} className="">
      <div className="w-96 flex flex-col items-center border-l">
        <div ref={sidebarContentRef}>
          <div className="w-80 mt-8">
            <div>
              {/*  Staff picks div start*/}
              <div className="">
                <span className="font-semibold">Staff picks</span>
              </div>
              <div className="flex gap-1 items-center mt-3">
                <div>
                  <Avatar size="sm" src={avtPic} />
                </div>
                <p className="font-semibold text-sm">
                  Rahul Rawat <span className="text-gray-400">in </span>
                  Technology
                </p>
              </div>
              <div>
                <span className="font-extrabold">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </span>
              </div>
              <div className="flex gap-1 items-center mt-3">
                <div>
                  <Avatar size="sm" src={avtPic} />
                </div>
                <p className="font-semibold text-sm">
                  Rahul Rawat <span className="text-gray-400">in </span>
                  Technology
                </p>
              </div>
              <div>
                <span className="font-extrabold">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </span>
              </div>
              <div className="flex gap-1 items-center mt-3">
                <div>
                  <Avatar size="sm" src={avtPic} />
                </div>
                <p className="font-semibold text-sm">
                  Rahul Rawat <span className="text-gray-400">in </span>
                  Technology
                </p>
              </div>
              <div>
                <span className="font-extrabold">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </span>
              </div>
              <div className="mt-5">
                <span className="text-green-600 text-sm">
                  See the full list
                </span>
              </div>
            </div>
            {/*  Staff picks div end*/}
            <div className="h-56 flex justify-center mt-10 bg-blue-200 rounded-md">
              <div className="w-64">
                <div className="flex justify-between mt-5">
                  <div>
                    <p className="font-extrabold">Writing on medium</p>
                  </div>
                  <div>
                    <p>x</p>
                  </div>
                </div>
                <div className="mt-5 font-semibold">
                  <div className="mb-2">New writing FAQ</div>
                  <div className="mb-2">Expert writing advice</div>
                  <div>Grow your readership</div>
                </div>
                <div className="mt-5">
                  <button className="w-24 h-8 bg-black text-white rounded-full text-sm">
                    Start writing
                  </button>
                </div>
              </div>
            </div>
            <div className="mt-10">
              <div>
                <p className="font-bold">Recommended topics</p>
              </div>
              <div className="flex flex-wrap gap-2 mt-5">
                <div>
                  <button className="w-24 h-8 bg-gray-200 text-sm text-black rounded-full">
                    Start writing
                  </button>
                </div>
                <div>
                  <button className="w-24 h-8 bg-gray-200 text-sm text-black rounded-full">
                    Start writing
                  </button>
                </div>
                <div>
                  <button className="w-24 h-8 bg-gray-200 text-sm text-black rounded-full">
                    Start writing
                  </button>
                </div>
                <div>
                  <button className="w-24 h-8 bg-gray-200 text-sm text-black rounded-full">
                    Start writing
                  </button>
                </div>
                <div>
                  <button className="w-24 h-8 bg-gray-200 text-sm text-black rounded-full">
                    Start writing
                  </button>
                </div>
                <div>
                  <button className="w-24 h-8 bg-gray-200 text-sm text-black rounded-full">
                    Start writing
                  </button>
                </div>
                <div>
                  <button className="w-24 h-8 bg-gray-200 text-sm text-black rounded-full">
                    Start writing
                  </button>
                </div>
              </div>
              <div className="mt-5">
                <p className="text-green-600">See more topics</p>
              </div>
            </div>
            <div className="mt-10">
              <div>
                <p className="font-bold">Who to follow</p>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center mt-3 gap-2">
                  <div>
                    <Avatar size="sm" src={avtPic} />
                  </div>
                  <div>
                    <div>
                      <p className="font-bold">Rahul Rawat</p>
                    </div>
                    <div>
                      <p className="text-gray-600">
                        small description about me
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <button className="w-16 h-8 bg-white text-black border-black border-1 rounded-full">
                    Follow
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-between mt-3">
                <div className="flex items-center gap-2">
                  <div>
                    <Avatar size="sm" src={avtPic} />
                  </div>
                  <div>
                    <div>
                      <p className="font-bold">Rahul Rawat</p>
                    </div>
                    <div>
                      <p className="text-gray-600">
                        small description about me
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <button className="w-16 h-8 bg-white text-black border-black border-1 rounded-full">
                    Follow
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-between mt-3">
                <div className="flex items-center gap-2">
                  <div>
                    <Avatar size="sm" src={avtPic} />
                  </div>
                  <div>
                    <div>
                      <p className="font-bold">Rahul Rawat</p>
                    </div>
                    <div>
                      <p className="text-gray-600">
                        small description about me
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <button className="w-16 h-8 bg-white text-black border-black border-1 rounded-full">
                    Follow
                  </button>
                </div>
              </div>
              <div className="mt-5">
                <p className="text-green-600">See more suggestions</p>
              </div>
            </div>
            <div className="mt-10">
              <div>
                <p className="font-bold">Reading list</p>
              </div>
              <div className="mt-3 text-gray-600">
                Click on any story to easily add it to your reading list or a
                custom list that you can share
              </div>
            </div>
            <div className="flex flex-wrap  gap-2 text-gray-500 mt-5 text-xs">
              <div>
                <p className="cursor-pointer">Help</p>
              </div>
              <div>
                <p className="cursor-pointer">Status</p>
              </div>
              <div>
                <p className="cursor-pointer">About</p>
              </div>
              <div>
                <p className="cursor-pointer">Careers</p>
              </div>
              <div>
                <p className="cursor-pointer">Press</p>
              </div>
              <div>
                <p className="cursor-pointer">Blog</p>
              </div>
              <div>
                <p className="cursor-pointer">Privacy</p>
              </div>
              <div>
                <p className="cursor-pointer">Terms</p>
              </div>
              <div>
                <p className="cursor-pointer">Text to speech</p>
              </div>
              <div>
                <p className="cursor-pointer">Teams</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

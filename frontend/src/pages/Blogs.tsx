  import { BlogsCard } from "../components/BlogsCard";
  import googleLogo from "../assets/images/googleLogo.png";
  import { BlogRightBar } from "../components/BlogsRightBar";
  import { AppBar } from "../components/AppBar";
  import { useBlogs } from "../hooks";
  import { BlogSkeleton } from "../components/BlogSkeleton";
  export const Blogs = () => {
    const { loading, blogs } = useBlogs();
    return (
      <div className="">
        <div>
          <AppBar size={"full"} />
        </div>
        <div className="flex justify-center">
          <div className="flex justify-center gap-8 w-1300">
            <div className="">
              {loading ? (
                <div>
                  <BlogSkeleton />
                  <BlogSkeleton />
                  <BlogSkeleton />
                </div>
              ) : (
                blogs.map((blog) => (
                  <div className="mt-8" key={blog.id}>
                    <BlogsCard
                      id={blog.id}
                      profilePic={googleLogo}
                      name="Rahul"
                      uploadDate={new Date(blog.uploadDate)}
                      subscriptionType={"Members-only"}
                      title={blog.title}
                      content={blog.content}
                      tag={"Technology"}
                      readTime={"5 min read"}
                      reason={"Because you follow technology"}
                      blogPic={googleLogo}
                    />
                  </div>
                ))
              )}
            </div>
            <div className="">
              <BlogRightBar />
            </div>
          </div>
        </div>
      </div>
    );
  };


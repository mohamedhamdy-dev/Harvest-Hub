import BreadCrumb from "../shared/BreadCrumb";
import BlogCard from "./BlogCard";
import BlogAside from "./BlogAside";
import { combinedBlogData } from "../assets2/blogData";

function Blog() {
  return (
    <main className="mt-16">
      <BreadCrumb />
      <div className="container mx-auto px-2">
        {/* all posts  */}
        <div className="flex flex-col-reverse gap-4 xl:flex-row">
          <BlogAside />
          <div className="grid basis-3/4 grid-cols-1 gap-4 lg:grid-cols-2 xl:mx-0 2xl:basis-4/5">
            {combinedBlogData.map((blog) => (
              <BlogCard data={blog} key={blog.id} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

export default Blog;

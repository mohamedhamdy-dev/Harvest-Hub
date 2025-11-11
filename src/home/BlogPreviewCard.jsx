import propTypes from "prop-types";
import { Link } from "react-router-dom";

export default function BlogPreviewCard({ data }) {
  const { id, blogImage, blogHeading, blogDesc, blogDate } = data;

  return (
    <article className="mx-[5px] overflow-hidden rounded-2xl bg-white">
      <div className="w-full">
        <img src={blogImage} className="w-full" alt={blogHeading} />
      </div>
      <div className="mx-auto px-4 pb-8 pt-4">
        <Link
          to={`./blog-view/${id}`}
          onClick={() => window.scrollTo({ top: 0, scorllBehavior: "smooth" })}
          className="line-clamp-1 text-xl font-bold"
        >
          {blogHeading}
        </Link>
        <p className="mt-2 block border-b-2 border-b-mercury-200 pb-5 text-gray-700">
          {blogDesc}
        </p>
        <div className="flex justify-between pt-4 text-gray-900">
          <span>{blogDate}</span>
          <Link
            to={`./blog-view/${id}`}
            onClick={() =>
              window.scrollTo({ top: 0, scorllBehavior: "smooth" })
            }
            className="duration-300 hover:text-apple-500"
          >
            Read More
          </Link>
        </div>
      </div>
    </article>
  );
}

BlogPreviewCard.propTypes = {
  data: propTypes.object,
};

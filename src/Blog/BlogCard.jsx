import {
  UserIcon,
  EyeIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/react/24/solid";
import propTypes from "prop-types";
import { Link } from "react-router-dom";

export default function BlogCard({ data }) {
  const {
    id,
    blogImage,
    blogAuthor,
    blogComments,
    blogReviews,
    blogHeading,
    blogDesc,
  } = data;

  return (
    <article className="h-fit overflow-hidden rounded-2xl bg-white">
      <div className="">
        <img src={blogImage} alt={blogHeading} className="w-full" />
      </div>
      <div className="p-7 py-5 pb-0">
        <BlogCardReview
          blogAuthor={blogAuthor}
          blogComments={blogComments}
          blogReviews={blogReviews}
        />
        <div className="border-b-[1px] border-gray-300 py-4">
          <Link
            to={`/blog-view/${id}`}
            className="mb-2 line-clamp-1 cursor-pointer text-lg text-gray-900 hover:text-apple-500"
          >
            {blogHeading}
          </Link>
          <p className="line-clamp-3 text-gray-600">{blogDesc}</p>
        </div>
        <Link
          className="block w-fit cursor-pointer py-4 text-gray-900 hover:text-apple-500"
          to={`/blog-view/${id}`}
        >
          Read More
        </Link>
      </div>
    </article>
  );
}

function BlogCardReview({ blogAuthor, blogComments, blogReviews }) {
  return (
    <ul className="flex items-center gap-2 fill-gray-700 text-xs text-gray-700 sm:text-sm">
      <li className="flex items-center justify-between gap-1">
        <UserIcon className="inline-block size-4" />
        <span>{blogAuthor}</span>
      </li>
      <li className="flex items-center justify-between gap-1">
        <ChatBubbleLeftRightIcon className="inline-block size-4" />
        <span>{`${blogComments} Comments`}</span>
      </li>
      <li className="flex items-center justify-between gap-1">
        <EyeIcon className="inline-block size-4" />
        <span>{blogReviews}</span>
      </li>
    </ul>
  );
}

BlogCardReview.propTypes = {
  blogAuthor: propTypes.string,
  blogComments: propTypes.number,
  blogReviews: propTypes.number,
};
BlogCard.propTypes = {
  data: propTypes.object,
};

import BreadCrumb from "../shared/BreadCrumb";
import BlogAside from "./BlogAside";
import { useParams } from "react-router-dom";
import { useState } from "react";
import propTypes from "prop-types";
import {
  CalendarDaysIcon,
  ChatBubbleLeftRightIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { BlogData } from "../assets/blogData";

function BlogView() {
  const { id } = useParams();

  const blog = BlogData.find((b) => Number(b.id) === Number(id));

  const [comments, setComments] = useState([
    {
      id: 1,
      author: "Ali",
      text: "Great insights! Really helpful.",
      replies: [
        {
          id: 11,
          author: "Sara",
          text: "Agree! I tried these techniques on my farm too.",
        },
      ],
    },
  ]);

  const handleAddComment = (text) => {
    const newComment = {
      id: Date.now(),
      author: "Guest",
      text,
      replies: [],
    };
    setComments([...comments, newComment]);
  };

  const handleAddReply = (commentId, replyText) => {
    const updatedComments = comments.map((comment) =>
      comment.id === commentId
        ? {
            ...comment,
            replies: [
              ...comment.replies,
              {
                id: Date.now(),
                author: "Guest",
                text: replyText,
              },
            ],
          }
        : comment,
    );
    setComments(updatedComments);
  };

  const handleEditComment = (id, newText) => {
    setComments(
      comments.map((c) => (c.id === id ? { ...c, text: newText } : c)),
    );
  };

  const handleDeleteComment = (id) => {
    setComments(comments.filter((c) => c.id !== id));
  };

  const handleEditReply = (commentId, replyId, newText) => {
    setComments(
      comments.map((c) =>
        c.id === commentId
          ? {
              ...c,
              replies: c.replies.map((r) =>
                r.id === replyId ? { ...r, text: newText } : r,
              ),
            }
          : c,
      ),
    );
  };

  const handleDeleteReply = (commentId, replyId) => {
    setComments(
      comments.map((c) =>
        c.id === commentId
          ? {
              ...c,
              replies: c.replies.filter((r) => r.id !== replyId),
            }
          : c,
      ),
    );
  };

  return (
    <>
      <BreadCrumb />
      <main className="container mx-auto mb-20 px-2">
        <div className="flex flex-col-reverse gap-4 xl:flex-row">
          <BlogAside />
          <div className="basis-4/5 space-y-6">
            <BlogDetails data={blog} />
            <CommentSection
              comments={comments}
              onAddComment={handleAddComment}
              onAddReply={handleAddReply}
              onEditComment={handleEditComment}
              onDeleteComment={handleDeleteComment}
              onEditReply={handleEditReply}
              onDeleteReply={handleDeleteReply}
            />
          </div>
        </div>
      </main>
    </>
  );
}

export default BlogView;

function CommentSection({
  comments,
  onAddComment,
  onAddReply,
  onEditComment,
  onDeleteComment,
  onEditReply,
  onDeleteReply,
}) {
  const [commentText, setCommentText] = useState("");

  return (
    <section className="rounded-2xl bg-white p-6">
      <h3 className="mb-4 text-lg font-semibold text-gray-900">Comments</h3>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (commentText.trim()) {
            onAddComment(commentText.trim());
            setCommentText("");
          }
        }}
        className="mb-6"
      >
        <textarea
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          className="w-full rounded-md border p-2 text-sm focus:outline-none"
          rows={3}
          placeholder="Leave a comment..."
        />
        <button
          type="submit"
          className="mt-2 rounded-full bg-green-500 px-4 py-2 text-white duration-300 hover:bg-black"
        >
          Leave Comment
        </button>
      </form>

      <ul className="space-y-6">
        {comments.map((comment) => (
          <CommentItem
            key={comment.id}
            comment={comment}
            onAddReply={onAddReply}
            onEditComment={onEditComment}
            onDeleteComment={onDeleteComment}
            onEditReply={onEditReply}
            onDeleteReply={onDeleteReply}
          />
        ))}
      </ul>
    </section>
  );
}

function CommentItem({
  comment,
  onAddReply,
  onEditComment,
  onDeleteComment,
  onEditReply,
  onDeleteReply,
}) {
  const [replyText, setReplyText] = useState("");
  const [showReply, setShowReply] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(comment.text);

  const isGuest = comment.author === "Guest";

  const handleEdit = () => {
    if (editedText.trim()) {
      onEditComment(comment.id, editedText.trim());
      setIsEditing(false);
    }
  };

  return (
    <li className="border-t pt-4">
      <p className="mb-1 text-sm font-medium text-gray-800">{comment.author}</p>

      {isEditing ? (
        <>
          <textarea
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
            rows={2}
            className="w-full rounded-md border p-2 text-sm"
          />
          <div className="mt-2 flex gap-2">
            <button
              onClick={handleEdit}
              className="rounded-md bg-green-500 px-3 py-1 text-xs text-white hover:bg-black"
            >
              Save
            </button>
            <button
              onClick={() => {
                setIsEditing(false);
                setEditedText(comment.text);
              }}
              className="rounded-md border px-3 py-1 text-xs hover:bg-gray-100"
            >
              Cancel
            </button>
          </div>
        </>
      ) : (
        <p className="text-gray-700">{comment.text}</p>
      )}

      <div className="mt-2 flex items-center gap-3 text-xs">
        <button
          onClick={() => setShowReply((prev) => !prev)}
          className="text-blue-500 hover:underline"
        >
          {showReply ? "Cancel Reply" : "Reply"}
        </button>
        {isGuest && (
          <>
            <button
              onClick={() => setIsEditing(true)}
              className="text-yellow-600 hover:underline"
            >
              Edit
            </button>
            <button
              onClick={() => onDeleteComment(comment.id)}
              className="text-red-600 hover:underline"
            >
              Delete
            </button>
          </>
        )}
      </div>

      {showReply && (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (replyText.trim()) {
              onAddReply(comment.id, replyText.trim());
              setReplyText("");
              setShowReply(false);
            }
          }}
          className="mt-2"
        >
          <textarea
            value={replyText}
            onChange={(e) => setReplyText(e.target.value)}
            className="w-full rounded-md border p-2 text-sm"
            rows={2}
            placeholder="Write your reply..."
          />
          <button
            type="submit"
            className="mt-1 rounded-md bg-gray-800 px-3 py-1 text-xs text-white hover:bg-gray-700"
          >
            Reply
          </button>
        </form>
      )}

      {comment.replies.length > 0 && (
        <ul className="mt-4 space-y-3 border-l-2 border-gray-200 pl-4">
          {comment.replies.map((reply) => (
            <ReplyItem
              key={reply.id}
              reply={reply}
              commentId={comment.id}
              onEditReply={onEditReply}
              onDeleteReply={onDeleteReply}
            />
          ))}
        </ul>
      )}
    </li>
  );
}

function ReplyItem({ reply, commentId, onEditReply, onDeleteReply }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(reply.text);
  const isGuest = reply.author === "Guest";

  const handleEdit = () => {
    if (editedText.trim()) {
      onEditReply(commentId, reply.id, editedText.trim());
      setIsEditing(false);
    }
  };

  return (
    <li>
      <p className="text-sm font-medium text-gray-800">{reply.author}</p>
      {isEditing ? (
        <>
          <textarea
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
            rows={2}
            className="w-full rounded-md border p-2 text-sm"
          />
          <div className="mt-1 flex gap-2">
            <button
              onClick={handleEdit}
              className="rounded-md bg-green-500 px-3 py-1 text-xs text-white hover:bg-black"
            >
              Save
            </button>
            <button
              onClick={() => {
                setIsEditing(false);
                setEditedText(reply.text);
              }}
              className="rounded-md border px-3 py-1 text-xs hover:bg-gray-100"
            >
              Cancel
            </button>
          </div>
        </>
      ) : (
        <p className="text-gray-700">{reply.text}</p>
      )}
      {isGuest && (
        <div className="mt-1 flex gap-3 text-xs">
          <button
            onClick={() => setIsEditing(true)}
            className="text-yellow-600 hover:underline"
          >
            Edit
          </button>
          <button
            onClick={() => onDeleteReply(commentId, reply.id)}
            className="text-red-600 hover:underline"
          >
            Delete
          </button>
        </div>
      )}
    </li>
  );
}

function BlogDetails({ data }) {
  const {
    blogImage,
    blogAuthor,
    blogComments,
    blogDate,
    blogHeading,
    blogDesc,
  } = data;
  return (
    <article className="h-fit overflow-hidden rounded-2xl border-[1px] border-gray-300 bg-white p-10">
      <div className="">
        <img
          src={blogImage}
          alt="blog image"
          className="w-full rounded-t-2xl"
        />
      </div>
      <div className="p-7 py-5 pb-0">
        <BlogViewCardReview
          blogAuthor={blogAuthor}
          blogComments={blogComments}
          blogDate={blogDate}
        />
        <div className="py-4">
          <p className="mb-2 text-lg text-gray-900">{blogHeading}</p>
          <p className="text-gray-600">{blogDesc}</p>
        </div>
      </div>
    </article>
  );
}

function BlogViewCardReview({ blogAuthor, blogComments, blogDate }) {
  return (
    <ul className="flex flex-col gap-4 fill-gray-700 text-xs text-gray-700 sm:text-sm md:flex-row md:items-center">
      <li className="flex items-center justify-start gap-1 md:justify-between">
        <UserIcon className="inline-block size-5" />
        <span>{blogAuthor}</span>
      </li>
      <li className="flex items-center justify-start gap-1 md:justify-between">
        <CalendarDaysIcon className="relative top-[-1px] inline-block size-5" />
        <span>{blogDate}</span>
      </li>
      <li className="flex items-center justify-start gap-1 md:justify-between">
        <ChatBubbleLeftRightIcon className="inline-block size-5" />
        <span>{`${blogComments} Comments`}</span>
      </li>
    </ul>
  );
}

BlogViewCardReview.propTypes = {
  blogAuthor: propTypes.string,
  blogComments: propTypes.number,
  blogDate: propTypes.string,
};

BlogDetails.propTypes = {
  data: propTypes.object,
};

CommentSection.propTypes = {
  comments: propTypes.array,
  onAddComment: propTypes.func,
  onAddReply: propTypes.func,
  onEditComment: propTypes.func,
  onDeleteComment: propTypes.func,
  onEditReply: propTypes.func,
  onDeleteReply: propTypes.func,
};

CommentItem.propTypes = {
  comment: propTypes.object,
  onAddReply: propTypes.func,
  onEditComment: propTypes.func,
  onDeleteComment: propTypes.func,
  onEditReply: propTypes.func,
  onDeleteReply: propTypes.func,
};

ReplyItem.propTypes = {
  reply: propTypes.object,
  commentId: propTypes.number,
  onEditReply: propTypes.func,
  onDeleteReply: propTypes.func,
};

import propTypes from "prop-types";

export default function VerticalTags({ tags }) {
  return (
    <div className="flex flex-col items-start space-y-2 rounded-xl border bg-white p-4 shadow-md">
      {tags?.map((tag, index) => (
        <span
          key={index}
          className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700 transition hover:bg-green-200"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}

VerticalTags.propTypes = {
  tags: propTypes.array,
};

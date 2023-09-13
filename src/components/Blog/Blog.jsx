import PropTypes from "prop-types";
import { FaBookmark } from "react-icons/fa";
const Blog = ({ blog, handleAddBookmarks, handleMarkAsRead }) => {
  console.log(blog);
  const {
    title,
    cover,
    reading_time,
    author,
    author_img,
    posted_date,
    hashtags,
    id,
  } = blog;
  return (
    <div className="mb-20 space-y-4">
      <img
        className="w-full mb-8"
        src={cover}
        alt={`Cover picture of the title ${title}`}
      />
      <div className="flex justify-between mb-4">
        <div className="flex">
          <img className="w-14" src={author_img} alt="" />
          <div className="ml-6">
            <h3 className="text-2xl">{author}</h3>
            <p>{posted_date}</p>
          </div>
        </div>
        <div>
          <span>{reading_time} min read</span>
          <button onClick={() => handleAddBookmarks(blog)}>
            <FaBookmark className="ml-2 text-red-600"></FaBookmark>
          </button>
        </div>
      </div>
      <h2 className="text-4xl">{title}</h2>
      <p>
        {hashtags.map((hash, idx) => (
          <span key={idx}>#{hash}</span>
        ))}
      </p>
      <button
        className="font-bold text-purple-600 underline"
        onClick={() => {
          handleMarkAsRead(id, reading_time);
        }}
      >
        Mark As Read
      </button>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddBookmarks: PropTypes.func.isRequired,
  handleMarkAsRead: PropTypes.func.isRequired,
  id: PropTypes.number,
};

export default Blog;

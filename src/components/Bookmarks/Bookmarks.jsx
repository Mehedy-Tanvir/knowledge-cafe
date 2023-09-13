import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";
const Bookmarks = ({ bookmarks, readingTime }) => {
  return (
    <div className="px-4 pt-4 mt-2 ml-4 bg-gray-300 md:w-1/3">
      <div>
        <h3 className="text-4xl text-center">Reading Time: {readingTime}</h3>
      </div>
      <h2 className="mb-4 text-3xl text-center">
        Bookmarked Blogs: {bookmarks.length}
      </h2>
      {bookmarks.map((bookmark, idx) => (
        <Bookmark className="mb-10" key={idx} bookmark={bookmark}></Bookmark>
      ))}
    </div>
  );
};
Bookmarks.propTypes = {
  bookmarks: PropTypes.array.isRequired,
  readingTime: PropTypes.number,
};

export default Bookmarks;

import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";
const Bookmarks = ({ bookmarks }) => {
  return (
    <div className="px-4 pt-4 mt-2 ml-4 bg-gray-300 md:w-1/3">
      <h2 className="mb-4 text-3xl text-center">
        Bookmarked Blogs: {bookmarks.length}
      </h2>
      {bookmarks.map((bookmark) => (
        <Bookmark
          className="mb-10"
          key={bookmark.id}
          bookmark={bookmark}
        ></Bookmark>
      ))}
    </div>
  );
};
Bookmarks.propTypes = {
  bookmarks: PropTypes.array.isRequired,
};

export default Bookmarks;

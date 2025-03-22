import { useDispatch } from "react-redux";
import { setSearchTerm } from "../ features/posts/postsSlice";

const SearchBar = () => {
  const dispatch = useDispatch();

  return (
    <div className="search-box">
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => dispatch(setSearchTerm(e.target.value))}
      />
    </div>
  );
};

export default SearchBar;

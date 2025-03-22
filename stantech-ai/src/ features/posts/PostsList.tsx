import { useEffect } from "react";
import { fetchPosts, setSearchTerm } from "./postsSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { Link } from "react-router-dom";

const PostsList = () => {
  const dispatch = useAppDispatch();
  const { items, status, error, searchTerm } = useAppSelector(
    (state) => state.posts
  );

  useEffect(() => {
    if (status === "idle") dispatch(fetchPosts());
  }, [dispatch, status]);

  const filteredPosts = items.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search posts..."
        value={searchTerm}
        onChange={(e) => dispatch(setSearchTerm(e.target.value))}
      />
      {status === "loading" && <p>Loading...</p>}
      {status === "failed" && <p>Error: {error}</p>}
      <ul>
        {filteredPosts.map((post) => (
          <li key={post.id}>
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsList;

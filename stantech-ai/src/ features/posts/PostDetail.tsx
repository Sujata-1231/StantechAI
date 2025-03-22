import { useParams } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";

const PostDetail = () => {
  const { id } = useParams<{ id: string }>();
  const post = useAppSelector((state) =>
    state.posts.items.find((p) => p.id === Number(id))
  );

  if (!post) return <p>Post not found</p>;

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
};

export default PostDetail;

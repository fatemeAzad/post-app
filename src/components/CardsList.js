import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../slices/postListSlice";
import Card from "./Card";

const CardsList = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(0);

  const posts = useSelector((state) => state.posts.postList);

  useEffect(() => {
    dispatch(fetchPosts(page));
  }, [page]);

  return (
    <>
      {posts.map((post) => (
        <Card postId={post.id} />
      ))}

      <button
      className="bg-gray-800 rounded-lg m-5 text-white w-128 p-1 "
        onClick={() => {
          setPage((prev) => prev + 2);
        }}
      >
        Load more
      </button>
    </>
  );
};

export default CardsList;

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchComments } from "../slices/commentsSlice";
import { fetchPhotos } from "../slices/photoSlice";
import { fetchPost } from "../slices/postListSlice";

const Card = ({ postId }) => {
  const dispatch = useDispatch();

  const post = ({ posts: { postList } }) =>
    postList.find((post) => post.id == postId);
  const photo = useSelector((state) =>
    state.photos.photosList.find((photo) => photo.id == postId)
  );
  console.log(photo);
  const comments = useSelector((state) =>
    state.comments.comments.filter((comment) => comment.postId == postId)
  );
  const navigate = useNavigate();
  function handleClick() {
    navigate(`${postId}`);
  }

  useEffect(() => {
    // TODO: Optimize
    if (!post) {
      dispatch(fetchPost(postId));
    }

    if (!photo) {
      dispatch(fetchPhotos());
    }

    if (comments.length === 0) {
      dispatch(fetchComments());
    }
  }, [post, photo, comments]);

  if (!post) return null;

  return (
    <div>
      <div className="flex P">
        <div className="bg-gray-800 rounded-lg flex w-128 p-1 ">
          <div className=" rounded-full flex-none">
            <img
              src={photo?.url}
              className="flex-none pr-3 w-64 rounded-br-lg

            "
              onClick={handleClick}
            />
          </div>
          <div className="flex-auto relative">
            <div className="text-2xl text-white flex-wrap text-justify pt-4 mr-2">
              {post.title}
            </div>
            <div className="bottom-0 text-white absolute flex">
              <div>total comments: {comments?.length}</div>
              <button
                className="ml-16 text-gray-600 rounded-full bg-white px-4"
                onClick={handleClick}
              >
                {" "}
                more...{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

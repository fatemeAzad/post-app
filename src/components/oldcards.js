import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchComments } from "../slices/commentsSlice";
import { fetchPhotos } from "../slices/photoSlice";
import { fetchPosts } from "../slices/postListSlice";
const OldCards = () => {
  const dispatch = useDispatch();
  const postList = useSelector(({ posts: { postList } }) => postList);

  const photos = useSelector((state) => state.photos);
  const comments = useSelector((state) => state.comments);

  const commentsLength = useSelector(
    (state) =>
      state.comments.comments.filter((comment) => comment.postId == "1").length
  );

  useEffect(() => {
    dispatch(fetchPosts());
    dispatch(fetchPhotos());
    dispatch(fetchComments());
  }, []);

  return (
    <div>
      <div>
        {postList.map((post) => (
          <div>
            {photos.photosList.map((photo) => {
              if (photo.id === post.id) {
                return (
                  <div>
                    <div key={photo.id}>
                      <Link to={`${post.id}`}>
                        {" "}
                        <img src={photo.url} className="photo" />
                      </Link>
                    </div>
                    <div className="flex">
                      <div className="posts">{post.title}</div>
                      <br/>
                      <div>total comments: {commentsLength}</div>
                    </div>
                    <button className="posts">load more</button>
                  </div>
                );
              }
            })}
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default OldCards;

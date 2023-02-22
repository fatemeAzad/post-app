import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchPhoto } from "../slices/photoSlice";
import { fetchPost } from "../slices/postListSlice";
import { fetchComments } from "./../slices/commentsSlice";

const CardInfo = () => {
  const { postId } = useParams();
  const dispatch = useDispatch();
  // const postData = useSelector(({ posts }) =>
  //   posts.postList.find((post) => post.id === postId)
  // );
  const postData = useSelector(({ posts: { postList } }) =>
    postList.find((post) => post.id == postId)
  );
  const photo = useSelector((state) =>
    state.photos.photosList.find((photo) => photo.id == postId)
  );
  console.log(photo);
  const comments = useSelector((state) => state.comments.comments);
  const commentsLength = useSelector(
    (state) =>
      state.comments.comments.filter((comment) => comment.postId == postData.id)
        .length
  );
  // const commentsById = comments.map((comment) => {
  //   if (comment.postId === postData.id) {
  //     return comment;
  //   }
  // });

  useEffect(() => {
    dispatch(fetchPost(postId));
    dispatch(fetchPhoto(postId));
    dispatch(fetchComments());
  }, []);

  return (
    <div className="bg-gray-800">
      <div className="flex m-5 ">
        <img src={photo.url} className="rounded-full m-8 " />
        <div>
          <div className=" p-16 text-white text-3xl">
            
            <br /> {postData?.title}
          </div>
          
          <div className=" pl-16 pr-16 text-white text-justify " >
            <p className="text-2xl">comments:</p>
            {comments.map((comment) => {
              if (comment.postId === postData.id)
                return <div>{comment.body}</div>;
            })}
          </div>
          <div className=" p-16 text-white">total comments: {commentsLength}</div>
        </div>
      </div>
    </div>
  );
};

export default CardInfo;

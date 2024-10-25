import { IPostForm } from "../../types";
import axiosAPI from "../../axiosAPI.tsx";
import PostForm from "../../components/PostForm/PostForm.tsx";

const NewPost = () => {
  const submitForm = async (post: IPostForm) => {
    await axiosAPI.post("post.json", {
      ...post,
      date: new Date().toISOString(),
    });
  };

  return (
    <>
      <PostForm submitForm={submitForm} />
    </>
  );
};

export default NewPost;

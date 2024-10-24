import {useCallback, useEffect, useState} from "react";
import {IPost, IPostForm} from "../../types";
import {useNavigate, useParams} from "react-router-dom";
import axiosAPI from "../../axiosAPI.tsx";
import PostForm from "../../components/./PostForm/PostForm.tsx";
import Spinner from "../../components/UI/Spinner/Spinner.tsx";

const EditPost = () => {
    const [post, setPost] = useState<IPost>();
    const params = useParams<{ idPost: string }>();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const fetchOneBlog = useCallback(async (id: string) => {
        try {
            setLoading(true);
            const response: { data: IPost } = await axiosAPI<IPost>(`post/${id}.json`);
            if (response.data) {
                setPost(response.data);
            }
        } catch (e) {
            console.log(e);
        } finally {
            setLoading(false);
        }
    }, []);


    useEffect(() => {
        if (params.idPost) {
            void fetchOneBlog(params.idPost);
        }
    }, [params.idPost, fetchOneBlog]);


    const submitForm = async (post: IPostForm) => {
        try {
            if (params.idPost) {
                await axiosAPI.put(`blog/${params.idPost}.json`, {...post});
                navigate('/');
            }
        } catch (error) {
            console.error(error);
        }

    };


    return (
        <>
            {loading ? <Spinner/> :
                <>
                    {post ? <PostForm submitForm={submitForm} postToEdit={post}/> : null}
                </>
            }
        </>
    );
};

export default EditPost;
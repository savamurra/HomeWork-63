import {IPost} from "../../types";

import {Button, Card, CardActions, CardContent, Typography} from "@mui/material";
import {NavLink, Outlet, useNavigate, useParams} from "react-router-dom";
import axiosAPI from "../../axiosAPI.tsx";
import {useCallback, useEffect, useState} from "react";
import Spinner from "../../components/UI/Spinner/Spinner.tsx";


const ReadPost = () => {
    const [post, setPost] = useState<IPost>();
    const params = useParams<{ idPost: string }>();
    const navigate = useNavigate();
    const [loading, setLoading] = useState<boolean>(false);

    const fetchOnePost = useCallback(async (id: string) => {
        try {
            setLoading(true);
            const response: { data: IPost } = await axiosAPI<IPost>(`post/${id}.json`);
            if (response.data) {
                setPost({...response.data, id: id});
            }
        } catch (e) {
            console.log(e);
        } finally {
            setLoading(false);
        }
    }, []);


    const deletePost = async () => {
        try {
            if (params.idPost) {
                await axiosAPI.delete(`post/${params.idPost}.json`);
                navigate('/');
            }
        } catch (error) {
            console.error(error);
        }
    };


    useEffect(() => {
        if (params.idPost) {
            void fetchOnePost(params.idPost);
        }
    }, [params.idPost, fetchOnePost]);


    return (
        <>
            {loading ? <Spinner/> :
                <>
                    {post ? <Card sx={{minWidth: 275, margin: '20px 0'}}>
                        <CardContent>
                            <Typography gutterBottom sx={{fontSize: 20}}>
                                <strong>{post.title}</strong>
                            </Typography>
                            <Typography gutterBottom sx={{fontSize: 20}}>
                                {post.description}
                            </Typography>
                            <Typography variant="body2" sx={{color: 'text.secondary', fontSize: 16}}>
                                Created on: <strong>{new Date(post.date).toLocaleString()}</strong>
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small"
                                    to={`/posts/${post.id}/edit`}
                                    component={NavLink}
                                    color='warning'
                            >
                                Edit
                            </Button>
                            <Button size="small" onClick={deletePost} color='warning'>
                                Delete
                            </Button>
                        </CardActions>
                    </Card> : null}
                </>
            }
            <Outlet/>
        </>

    );
};

export default ReadPost;
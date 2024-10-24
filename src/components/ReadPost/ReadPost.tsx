import {IPost} from "../../types";

import {Button, Card, CardActions, CardContent, Typography} from "@mui/material";
import {NavLink, useParams} from "react-router-dom";
import axiosAPI from "../../axiosAPI.tsx";
import {useCallback, useEffect, useState} from "react";



const ReadPost= () => {
    const [post, setPost] = useState<IPost>();
    const params = useParams<{ idPost: string }>();

    const fetchOnePost = useCallback(async (id: string) => {
        try {
            const response: { data: IPost } = await axiosAPI<IPost>(`post/${id}.json`);
            if (response.data) {
                setPost({...response.data, id: id});
            }
        } catch (e) {
            console.log(e);
        }
    }, []);




    useEffect(() => {
        if (params.idPost) {
            void fetchOnePost(params.idPost);
        }
    }, [params.idPost,fetchOnePost]);


    return (
        <>
            {post ? <Card sx={{minWidth: 275}}>
                <CardContent>
                    <Typography variant="body2" sx={{color: 'text.secondary', fontSize: 16}}>
                        Created on: <strong>{new Date(post.date).toLocaleString()}</strong>
                    </Typography>
                    <Typography gutterBottom sx={{fontSize: 20}}>
                        {post.title}
                    </Typography>
                    <Typography gutterBottom sx={{fontSize: 20}}>
                        {post.description}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small"
                            to={`/posts/${post.id}/edit`}
                            component={NavLink}>Edit
                    </Button>
                </CardActions>
            </Card> : null}

        </>
    );
};

export default ReadPost;
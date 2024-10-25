import {IPost} from "../../types";
import React from "react";
import {Button, Card, CardActions, CardContent, Typography} from "@mui/material";
import {NavLink} from "react-router-dom";

interface PostItem {
    blog: IPost;
}


const PostItems: React.FC<PostItem> = ({blog}) => {
    return (
        <>
            <Card sx={{width: '100%'}}>
                <CardContent>
                    <Typography gutterBottom sx={{fontSize: 20}}>
                        {blog.title}
                    </Typography>
                </CardContent>
                <CardActions style={{display: "flex", justifyContent: "space-between"}}>
                    <Button size="small"
                            to={`/posts/${blog.id}/read`}
                            component={NavLink}
                            color='warning'
                    >Read more
                    </Button>
                    <Typography variant="body2" sx={{color: 'text.secondary', fontSize: 16}}>
                        Created on: <strong>{new Date(blog.date).toLocaleString()}</strong>
                    </Typography>
                </CardActions>
            </Card>
        </>
    );
};

export default PostItems;
import {IPost} from "../../types";
import React from "react";
import {Button, Card, CardActions, CardContent, Typography} from "@mui/material";
import {NavLink} from "react-router-dom";

interface PostItem {
    blog: IPost;
}


const BlogItems: React.FC<PostItem> = ({blog}) => {
    return (
        <>
            <Card sx={{minWidth: 275}}>
                <CardContent>
                    <Typography variant="body2" sx={{color: 'text.secondary', fontSize: 16}}>
                        Created on: <strong>{new Date(blog.date).toLocaleString()}</strong>
                    </Typography>
                    <Typography gutterBottom sx={{fontSize: 20}}>
                        {blog.title}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small"
                            to={`/posts/${blog.id}`}
                            component={NavLink}>Read more
                    </Button>
                </CardActions>
            </Card>
        </>
    );
};

export default BlogItems;
import {useCallback, useEffect, useState} from "react";
import {IPost, IPostAPI} from "../../types";
import axiosAPI from "../../axiosAPI.tsx";
import Grid from "@mui/material/Grid2";
import BlogItems from "../../components/PostItems/PostItem.tsx";


const Home = () => {
    const [blogs, setBlogs] = useState<IPost[]>([]);

    const fetchBlogs = useCallback(async () => {
        const response: {data: IPostAPI} = await axiosAPI<IPostAPI>('post.json');
        if (response.data){
            const blogFromAPI = Object.keys(response.data).map(blogKey => {
                return {
                    ...response.data[blogKey],
                    id: blogKey,
                };
            });

            setBlogs(blogFromAPI);
        }
    },[]);


    useEffect(() => {
    void fetchBlogs();
    },[fetchBlogs]);

    return (
        <>

            {blogs.length === 0 ? <p>No blogs</p> :
            <>
            <Grid container spacing={2}>
                {blogs.map(blog => (
                    <Grid key={blog.id}>
                        <BlogItems blog={blog}/>
                    </Grid>
                ))}
            </Grid>
            </>
            }

        </>
    );
};

export default Home;
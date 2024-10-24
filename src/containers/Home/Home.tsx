import {useCallback, useEffect, useState} from "react";
import {IPost, IPostAPI} from "../../types";
import axiosAPI from "../../axiosAPI.tsx";
import Grid from "@mui/material/Grid2";
import BlogItems from "../../components/PostItems/PostItem.tsx";
import Spinner from "../../components/UI/Spinner/Spinner.tsx";


const Home = () => {
    const [posts, setBlogs] = useState<IPost[]>([]);
    const [loading, setLoading] = useState(false);

    const fetchBlogs = useCallback(async () => {
        try {
            setLoading(true);
            const response: { data: IPostAPI } = await axiosAPI<IPostAPI>('post.json');
            if (response.data) {
                const blogFromAPI = Object.keys(response.data).map(blogKey => {
                    return {
                        ...response.data[blogKey],
                        id: blogKey,
                    };
                });

                setBlogs(blogFromAPI);
            }
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }, []);


    useEffect(() => {
        void fetchBlogs();
    }, [fetchBlogs]);

    return (
        <>
            {loading ? <Spinner/> :
                <>
                    {posts.length === 0 ? <h2>No posts</h2> :
                        <>
                            <Grid container spacing={2}>
                                {posts.map(post => (
                                    <BlogItems key={post.id} blog={post}/>
                                ))}
                            </Grid>
                        </>
                    }
                </>
            }
        </>
    );
};

export default Home;
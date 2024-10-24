import {Button, TextField, Typography} from "@mui/material";
import Grid from '@mui/material/Grid2';
import {useState} from "react";
import {IBlogForm} from "../../types";
import axiosAPI from "../../axiosAPI.tsx";

const initial = {
    title: "",
    date: "",
    description: "",
};

const BlogForm = () => {
    const [form, setForm] = useState<IBlogForm>(initial);

    const onChangeField = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setForm({...form, [name]: value});
    };

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        await axiosAPI.post('blog.json', {...form, date: new Date().toISOString()});

        setForm({...initial});

    };

    return (
        <form onSubmit={onSubmit}>
            <Typography variant="h4" sx={{ flexGrow: 1, textAlign: 'center'}}>Add new Blog</Typography>
            <Grid container spacing={2} sx={{mx: "auto", width: "50%", mt: 4}}>
                <Grid size={12}>
                    <TextField
                        sx={{width:'100%'}}
                        id="outlined-basic"
                        label="Title"
                        name="title"
                        value={form.title}
                        variant="outlined"
                        onChange={onChangeField}
                    />
                </Grid>
                <Grid size={12}>
                    <TextField
                        sx={{width:'100%'}}
                        id="outlined-multiline-static"
                        label="Description"
                        name="description"
                        multiline
                        value={form.description}
                        onChange={onChangeField}
                        rows={4}
                    />
                </Grid>

                <Grid size={12}>
                    <Button type='submit' variant='contained' sx={{width:'100%'}}>
                        Add
                    </Button>
                </Grid>
            </Grid>
        </form>
    );
};

export default BlogForm;
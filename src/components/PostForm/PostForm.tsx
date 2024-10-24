import {Button, TextField, Typography} from "@mui/material";
import Grid from '@mui/material/Grid2';
import React, {useEffect, useState} from "react";
import {IPostForm} from "../../types";
import {useNavigate} from "react-router-dom";

const initial = {
    title: "",
    date: "",
    description: "",
};

interface Props {
    postToEdit? : IPostForm;
    submitForm: (data: IPostForm) => void;
}

const PostForm: React.FC<Props> = ({submitForm, postToEdit}) => {
    const [form, setForm] = useState<IPostForm>(initial);
    const navigate = useNavigate();

    useEffect(() => {
        if (postToEdit) {
            setForm(prevState => (
                {
                    ...prevState,
                    ...postToEdit
                }
            ));
        }
    }, [postToEdit]);



    const onChangeField = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setForm({...form, [name]: value});
    };

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        submitForm({...form});

        navigate('/');

        setForm({...initial});
    };

    return (
        <form onSubmit={onSubmit}>
            <Typography variant="h4" sx={{ flexGrow: 1, textAlign: 'center'}}>{postToEdit ? 'Edit post' : 'Add new post'}</Typography>
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
                        {postToEdit ? 'Edit post' : 'Add new post'}
                    </Button>
                </Grid>
            </Grid>
        </form>
    );
};

export default PostForm;
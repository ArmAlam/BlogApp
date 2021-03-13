import React, {useState} from 'react';
import {Editor} from 'slate-react';
import {withRouter} from 'react-router-dom';
import {v4 as uuid} from 'uuid';
import initialValue from "./editor/value";
import {TextField, Button, Typography, Select, ListItemText, MenuItem} from "@material-ui/core";
import MyEditor from "./editor";
import html from "./editor/rules";

// start from installing uuid

const categories = [{
        label: 'Travel',
        value: 'travel'
    },
    {
        label: 'Journey',
        value: 'journey'
    },
    {
        label: 'Blog',
        value: 'blog'
    }
]

const PostForm = ({addPost, history}) => {

    const [title, setTitle] = useState('');
    const [error, setError] = useState(false);
    const [category, setCategory] = useState([]);
    const [editor, setEditor] = useState(initialValue);

    const handleEditorChange = ({value}) => {

        if(value.document !== editor.document)
        {
            const serializedValue = html.serialize(value);
            localStorage.setItem('content', serializedValue);
        }
        setEditor(value);
    }

    const handleChange = (e) => {
        setTitle(e.target.value)
    }


    const handleCategory = (e) => {
        setCategory(e.target.value);
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        if(title === '') {
            setError(true);
            return ;
        }

        if(category && category.length === 0)
        {
            setError(true);
            return ;
        }

        const post = {
            id: uuid(),
            title,
            img_url: '3.jpg',
            categories: category,
            body: localStorage.getItem('content'),
        }

        addPost(post);

        // redirecting
        history.push('/');
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <Typography variant='h5' component='h3'>
                    Add Post
                </Typography>
                <TextField
                    error={error}
                    placeholder='Enter blog title'
                    fullWidth
                    value={title}
                    onChange={handleChange}
                    helperText='Title required'
                />
                <MyEditor
                    value={editor}
                    onChange={handleEditorChange}
                />

                <Select
                    error={error}
                    multiple
                    displayEmpty
                    onChange={handleCategory}
                    value={category}
                    renderValue={selected => selected && selected.length === 0
                        ?
                        'select category'
                        :
                        selected.join(', ')}
                >
                    {
                        categories.map( category => (
                            <MenuItem value={category.value} key={category.label}>
                                <ListItemText primary={category.label} />
                            </MenuItem>
                        ))
                    }

                </Select>
                <br/>
                <Button
                    type='submit'
                    variant='contained'
                    color='primary'
                >
                    Add
                </Button>
            </form>
        </>
    );
}


export default withRouter(PostForm);
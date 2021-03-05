import React, {useState} from 'react';
import {Editor} from 'slate-react';
import initialValue from "./editor/value";
import {TextField, Button, Typography, Select, ListItemText, MenuItem} from "@material-ui/core";
import MyEditor from "./editor";


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

const PostForm = () => {

    const [title, setTitle] = useState('');
    const [error, setError] = useState(false);
    const [category, setCategory] = useState([]);
    const [editor, setEditor] = useState(initialValue);

    const handleEditorChange = ({value}) => {
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
        }
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
                    multiple
                    displayEmpty
                    onChange={handleCategory}
                    value={category}
                    renderValue={selected => selected && selected.length === 0
                        ?
                        'Category'
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


export default PostForm;
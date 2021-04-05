import React, {useEffect, useState} from 'react';
import {Editor} from 'slate-react';
import {withRouter} from 'react-router-dom';
import {v4 as uuid} from 'uuid';
import {useDispatch} from "react-redux";
import initialValue from "./editor/value";
import {TextField, Button, Typography, Select, ListItemText, MenuItem} from "@material-ui/core";
import MyEditor from "./editor";
import html from "./editor/rules";
import {addPost, updatePost} from "../../store";

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

const PostForm = ({history, selectedPost}) => {

    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [error, setError] = useState({
        title: '',
        category: ''
    });
    const [category, setCategory] = useState([]);
    const [editor, setEditor] = useState(initialValue);

    useEffect( () => {

        if(selectedPost) {
            const {title, body, img_url, categories} = selectedPost;
            setTitle(title);
            setCategory(categories );
            setEditor(html.deserialize(body));
        }

        else {
            setTitle('');
            setCategory([]);
            setEditor(html.deserialize('<p>Blog Description...</p>'));
        }
    }, [selectedPost]);

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
            setError({
                ...error,
                title: 'Title is required'
            });
            return ;
        }

        if(category && category.length === 0)
        {
            setError({
                ...error,
                category: 'Category is required'
            });
            return ;
        }

        if(selectedPost) {
            const postToUpdate = {
                id: uuid(),
                title,
                img_url: '3.jpg',
                categories: category,
                body: html.serialize(editor),
            }
            dispatch(updatePost(postToUpdate, selectedPost.id));
        }

        else {
            const post = {
                title,
                img_url: '3.jpg',
                categories: category,
                body: localStorage.getItem('content'),
            }
            dispatch(addPost(post));
        }

        // clear local storage
        localStorage.removeItem('content');

        // redirecting
        history.push('/');
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <Typography variant='h5' component='h3'>
                    {selectedPost ? 'Edit Post' : 'Add Post'}
                </Typography>
                <TextField
                    error={!!error.title}
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
                    error={!!error.category}
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

                <p>{error.category && error.category}</p>

                <br/>
                <Button
                    type='submit'
                    variant='contained'
                    color='primary'
                >
                    {selectedPost ? 'Update Post' : 'Add Post'}
                </Button>
            </form>
        </>
    );
}

// const mapDispatchToProps = (dispatch) => { // mapDispatchToProps will make addPost available to the PostForm component
//     return {
//         addPost: (post) => dispatch(addPost(post)),
//         updatePost: (post, id) => dispatch(updatePost(post, id))
//     }
// }


export default withRouter(PostForm);
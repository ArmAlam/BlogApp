const styles = {
    editor: {
        boxSizing: 'border-box',
        width: '600px',
        margin: '30px 0',
        padding: '10px',
        border: '2px solid rgba(0, 0 , 0, 0.42)',
        minHeight: '300px',
        '&:hover': {
            border: '2px solid rgba(0, 0, 0, 0.87)'
        },
        '&:active': {
            border: '2px solid rgba(48, 63, 159, 1)'
        }
    },
    toolbar: {
        display: 'flex',
        marginTop: '10px'
    },
    editorActiveBtn: {
        backgroundColor: '#00072b'
    },
    post: {
        padding: '10px',
        margin: '10px 0'
    },
    button: {
        marginTop: '10px'
    },
    postDetails: {
        '& *' : {
            marginBottom: '10px'
        }
    },
    detailsBtn: {
        marginRight: '10px'
    },
    categories: {
        fontStyle: 'italic'
    },
    author: {
        fontWeight: 'bold',
        textTransform: 'uppercase'
    },
    image: {
        width: '100%',
        maxWidth: '1280px',
        height: 'auto',
        margin: '0 auto'
    }
};

export default styles;
import React from "react";

const CodeNode = (props) => {
    const {attributes, children} = props;
    return (
        <pre>
            <code {...attributes}>
                {children}
            </code>
        </pre>
    );
}

const renderBlock = (props, editor, next) => {
    const {attributes, children, node} = props;
    switch (node.type){
        case 'paragraph':
            return <p {...attributes}>{children}</p>;
        case 'code':
            return <CodeNode {...props} />;
        case 'heading-four':
            return <h4 {...attributes}>{children}</h4>;
        case 'block-quote':
            return <blockquote {...attributes}>{children}</blockquote>;
        case 'list-item':
            return <li {...attributes}>{children}</li>
        case 'unordered-list':
            return <ul {...attributes}>
                        {children}
                   </ul>;
        case 'ordered-list':
            return <ol {...attributes}>
                     {children}
                   </ol>
        default:
            return next();
    }
}

export default renderBlock;
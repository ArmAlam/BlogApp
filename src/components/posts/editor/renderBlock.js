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
            return <CodeNode {...props} />
        default:
            return next();
    }
}

export default renderBlock;
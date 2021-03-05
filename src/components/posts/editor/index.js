import React from "react";
import {Editor} from "slate-react";

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

const MyEditor = ({onChange, value}) =>
{
    const onKeyDown = (event, editor, next) => {
        if(event.key != '`' || !event.ctrlKey) return next();
        event.preventDefault();

        const isCode = editor.value.blocks.some( block => block.type === 'code' );

        editor.setBlocks(isCode ? 'paragraph' : 'code')
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

    return (
        <Editor
            value={value}
            onChange={onChange}
            onKeyDown={onKeyDown}
            renderBlock={renderBlock}
        />
    );
}

export default MyEditor;
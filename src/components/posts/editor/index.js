import React from "react";
import {Editor} from "slate-react";
import renderBlock from "./renderBlock";
import renderMark from "./renderMark";

const MyEditor = ({onChange, value}) =>
{
    const onKeyDown = (event, editor, next) => {
        if(!event.ctrlKey) return next();
        event.preventDefault();
        switch (event.key) {
            case ('`'):
                const isCode = editor.value.blocks.some( block => block.type === 'code' );
                editor.setBlocks(isCode ? 'paragraph' : 'code')
                return ;
            case 'b':
                return editor.toggleMark('bold');
            case 'i':
                return editor.toggleMark('italic');
            case 'u':
                return editor.toggleMark('underline');

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
            renderMark={renderMark}
        />
    );
}

export default MyEditor;
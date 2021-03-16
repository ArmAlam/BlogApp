import React from "react";
import {Editor} from "slate-react";
import {Button, Icon, withStyles} from "@material-ui/core";
import renderBlock from "./renderBlock";
import renderMark from "./renderMark";
import Toolbar  from "./Toolbar";
import styles from "../styles";


const MyEditor = ({onChange, value, classes}) =>
{

    let refEditor;

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

    const hasMark = (type ) => {
        return value.activeMarks.some(mark => mark.type === type);
    }

    const onClickMark = (e, type) => {
        refEditor.toggleMark(type);
    }

    const renderMarkButton = (type, icon) => {
        const isActive = hasMark(type);

        return (
            <Button
                className={isActive ? classes.editorActiveBtn : ''}
                onClick={(e) => onClickMark(e, type)}
            >
                <Icon>
                    {icon}
                </Icon>
            </Button>
        )
    }

    const onClickBlock = (e, type) => {
        const {document} = value;
        const ul = 'unordered-list';
        const ol = 'ordered-list';
        const li = 'list-item ';

        if(type !== ol && type !== ul)
        {
            // block other than ol and ul
            const isActive = hasBlock(type);
            const isList = hasBlock(li);

            if(isList)
            {
                refEditor.setBlocks(isActive ? 'paragraph' : type)
                    .unwrapBlock(ol)
                    .unwrapBlock(ul);
            }
            else {
                refEditor.setBlocks(isActive ? 'paragraph' : type)
            }
        }

        else {
            // block ol and ul
            const isList = hasBlock(li);
            const isType = value.blocks.some(block => {
                return !!document.getClosest(block.key, parent => parent.type === type);
            });

            if (isList && isType) {
                refEditor.setBlocks('paragraph')
                    .unwrapBlock(ol)
                    .unwrapBlock(ul);
            }

            else if (isList) {
                refEditor.unwrapBlock(
                    type === ul ? ol : ul
                ).wrapBlock(type);
            }

            else {
                refEditor.setBlocks(li).wrapBlock(type)
            }

        }
    }

    const hasBlock = (type) => {
        return value.blocks.some(block => block.type === type);
    }

    const renderBlockButton = (type, icon) => {
        let isActive = hasBlock(type);
        const {document, blocks} = value;
        const ul ='unordered-list';
        const ol ='ordered-list';
        const li = 'list-item';

        if([ul, ol].includes(type)) {

            if(blocks.size > 0) {
                const parent = document.getParent(blocks.first().key);
                isActive = hasBlock(li) && parent && parent.type === type;
            }
        }
        return (
            <Button
                className={isActive ? classes.editorActiveBtn : ''}
                onClick={(e) => onClickBlock(e, type, isActive)}>
                <Icon>
                    {icon}
                </Icon>
            </Button>
        )
    }

    return (
        <>
            <Toolbar >
                {renderMarkButton('bold', 'format_bold')}
                {renderMarkButton('italic', 'format_italic')}
                {renderMarkButton('underline', 'format_underline')}
                {renderBlockButton('heading-four', 'looks_4')}
                {renderBlockButton('unordered-list', 'format_list_bulleted')}
                {renderBlockButton('ordered-list', 'format_list_numbered')}
                {renderBlockButton('blockquote', 'format_quote')}
                {renderBlockButton('code', 'code')}
            </Toolbar>
            <Editor
                className={classes.editor}
                value={value}
                onChange={onChange}
                onKeyDown={onKeyDown}
                renderBlock={renderBlock}
                renderMark={renderMark}
                ref={(editor) => refEditor = editor}
            />
        </>
    );
}

export default withStyles(styles)(MyEditor);
import {Value} from "slate";
import html from "./rules";

const existingValue = html.deserialize(localStorage.getItem('content'));

const initialValue = Value.fromJSON(
    existingValue|| {
        document: {
            nodes: [
                {
                    object: 'block',
                    type: 'paragraph',
                    nodes: [
                        {
                            object: 'text',
                            text: 'A line of text in a paragraph.',
                        },
                    ],
                },
            ],
        },
});


export default initialValue;

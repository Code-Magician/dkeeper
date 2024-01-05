import React, { useState } from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import CheckIcon from "@material-ui/icons/Check";

function Note(props) {
    const [titleOnFocus, setTitleFocus] = useState(false);
    const [contentOnFocus, setContentFocus] = useState(false);

    var title = props.title;
    var content = props.content;

    function handleDelete() {
        props.onDelete(props.id);
    }

    function handleEdit() {
        console.log("Edited");
        props.onEdit(props.id, title, content);

        setTimeout(() => {
            setTitleFocus(false);
            setContentFocus(false);
        }, 1000);
    }

    return (
        <div className="note">
            <h1
                suppressContentEditableWarning={true}
                contentEditable={true}
                onFocus={() => {
                    setTitleFocus(true);
                }}
                onBlur={() => {
                    setTimeout(() => {
                        setTitleFocus(false);
                    }, 1000);
                }}
                onInput={(e) => {
                    title = e.target.innerText;
                }}
                value={title}
            >{props.title}</h1>

            <p
                suppressContentEditableWarning={true}
                contentEditable={true}
                onFocus={() => {
                    setContentFocus(true);
                }}
                onBlur={() => {
                    setTimeout(() => {
                        setContentFocus(false);
                    }, 1000);
                }}
                onInput={(e) => {
                    content = e.target.innerText;
                }}
                value={title}
            >
                {props.content}
            </p>

            {(titleOnFocus || contentOnFocus) && (
                <button onClick={handleEdit}>
                    <CheckIcon />
                </button>
            )}

            <button onClick={handleDelete}>
                <DeleteIcon />
            </button>
        </div>
    );
}

export default Note;

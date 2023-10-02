import React from "react";
import Note from "./Note"

function createNote(props) {
    return(
        <Note 
            key={props.id}
            title={props.title}
            content={props.content}
        />
    );
}

export default createNote;
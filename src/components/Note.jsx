import React from "react";
<<<<<<< HEAD

function Note (notes) {
    return (
        <div className="note">
            <h1>{notes.title}</h1>
            <p>{notes.content}</p>
        </div>
    )
};

export default Note;
=======
import DeleteIcon from "@material-ui/icons/Delete";

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}>
        <DeleteIcon />
      </button>
    </div>
  );
}

export default Note;
>>>>>>> 79b2a5b (finished part 3)

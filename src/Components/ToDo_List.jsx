import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faXmark } from "@fortawesome/free-solid-svg-icons";

const ToDo_List = (props) => {
  return (
    <>
      <div className="todo_style">
        <li>{props.text}</li>
        <i
          className="fa fa-times"
          onClick={() => {
            props.onSelect(props.id);
          }}
          aria-hidden="true"
        >
          <FontAwesomeIcon icon={faXmark} />
        </i>
      </div>
    </>
  );
};
export default ToDo_List;

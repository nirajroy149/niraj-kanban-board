import React from "react";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import "./card.css";

function Card(props) {
  function handleDragStart(e) {
    e.target.style.border = "3px dashed #D0CDCC";
    e.target.style.cursor = "move";
    props.onDragEnter(props.id);
  }

  function handleDragEnd(e) {
    e.target.style.border = "3px solid white";
    props.onDragEnd(props.id);
  }
  return (
    <div
      className="each_card_container"
      draggable
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onDragEnter={() => {
        props.onDragEnter(props.id);
      }}
    >
      <div className="card_title">
        <h3>
          <span>{props.index + 1}. </span>
          {props.title}
        </h3>
        <ContentCopyIcon fontSize="small" />
      </div>

      <div className="card_content">{props.content}</div>
      <div className="card_footer">
        <p>Date</p>
        <DeleteOutlineIcon onClick={props.deleteCard} className="deleteIcon" />
      </div>
    </div>
  );
}

export default Card;

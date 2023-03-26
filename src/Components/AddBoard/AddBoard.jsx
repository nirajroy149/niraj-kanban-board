import React, { useState } from "react";
import Button from "@mui/material/Button";
import "./addBoard.css";

export default function AddBoard(props) {
  const boardBtn = {
    fontFamily: "'Arbutus Slab', serif",
    fontSize: "18px",
    textTransform: "capitalize",
    color: "#607D88",
    backgroundColor: "white",
    margin: "5px 4px",
    fontWeight: "bold",
    minWidth: "18vw",
    padding: "10px",
  };
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    props.onAddBoard(title);
    setTitle("");
    if(title==="") return;
    setShow(false);
  }
  return (
    <>
      
      <div className="add_board">


          <div className="add_board_container">
        {show ? (
          <div className="add_form">
            <label></label>
            <input
              type="text"
              placeholder="Board Title"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            ></input>
            <div className="board_add_btns">

            <Button variant="contained" onClick={handleSubmit}>Add Board</Button>
            <Button variant="outlined" onClick={()=>setShow(false)}>Cancel</Button>

            </div>
          </div>
    
        ) : (
          <Button
            variant="contained"
            className="board-add-button"
            style={boardBtn}
            onClick={()=>setShow(true)}
          >
            <i className="fa-solid fa-plus"></i>
            Add New Board
          </Button>
        )}
      </div>
      </div>
    </>
  );
}

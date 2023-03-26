import React, { useState } from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Card from "../Card/Card";
import "./board.css";
import AddCard from "../AddCard/AddCard";
import Button from "@mui/material/Button";

//dragstart, dragend
//dragover, dragenter, dragleave, ondrop

function Board({
  boardData,
  onDragEnter,
  onDragEnd,
  onBoardEnter,
  id,
  bicon,
  onAddNewCard,
  deleteCard,
  deleteBoard,
}) {
  const empty = {
    height: "200px",
    width: "100%",
    color: "#D0CDCC",
    border: "3px dashed #D0CDCC",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
    transition: "e",
  };

  const [over, setOver] = useState(false);
  const [btng, setbtng] = useState(false);
  return (
    <div
      className="whole_board_container"
      onDragEnter={() => {
        onBoardEnter(id);
      }}
      onDragOver={() => setOver(true)}
      onDragLeave={() => setOver(false)}
    >
      <div className="board_title">
        <h3>
          <i className={bicon}></i> {boardData.BoardHeading}{" "}
          <span>{boardData.Cards?.length}</span>
        </h3>
        {btng ? (
          <div className="btn_board_container">
            <Button variant="contained" onClick={()=>{deleteBoard(boardData.id)}}>Delete</Button>
            <Button variant="outlined" onClick={()=>setbtng(false)}>Cancel</Button>
          </div>
        ) : (
          <MoreHorizIcon style={{cursor: "pointer"}} onClick={()=>setbtng(true)} />
        )}
      </div>
      <div className="cards_container">
        {boardData.Cards?.map((cardData, index) => {
          return (
            <Card
              index={index}
              title={cardData.title}
              id={cardData.id}
              key={cardData.id}
              content={cardData.content}
              onDragEnd={(scid) => {
                onDragEnd(scid, id);
              }} // here id is the board id.
              onDragEnter={(tcid) => {
                onDragEnter(tcid, id);
              }}
              deleteCard={() => {
                deleteCard(index);
              }}
            />
          );
        })}
        {over && (
          <div style={empty}>
            <h2>Move</h2>
          </div>
        )}
        <AddCard onAddNewCard={onAddNewCard} />
      </div>
    </div>
  );
}

export default Board;

import React, { useState } from "react";
import BoardHead from "./Components/BoardHead/BoardHead";
import Board from "./Components/Board/Board";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import AddBoard from "./Components/AddBoard/AddBoard";

function App() {
  const [target, setTarget] = useState({ tcid: "", tbid: "" });
  const [tarBoard, setBoard] = useState({ tb: "" });
  const [data, setData] = useState([
    {
      BoardHeading: "To do",
      id: uuidv4(),
      bicon: "fa-solid fa-triangle-exclamation",
      Cards: [
        {
          id: uuidv4(),
          title: "Do the dishes",
          content:
            "wwPaul Rand once said, “The public is more familiar with bad fucking design than good design. It is, in effect, conditioned to prefe",
        },
        {
          id: uuidv4(),
          title: "title of job",
          content:
            "wwPaul Rand once said, “The public is more familiar with bad fucking design than good design. It is, in effect, conditioned to prefe",
        },
        {
          id: uuidv4(),
          title: "Do something",
          content:
            "wwPaul Rand once said, “The public is more familiar with bad fucking design than good design. It is, in effect, conditioned to prefe",
        },
      ],
    },

    //Second board
    {
      BoardHeading: "In Progress",
      id: uuidv4(),
      bicon: "fa-solid fa-gears",
      Cards: [
        {
          id: uuidv4(),
          title: "Log-in bug",
          content:
            "wwPaul Rand once said, “The public is more familiar with bad fucking design than good design. It is, in effect, conditioned to prefe",
        },
        {
          id: uuidv4(),
          title: "UX design",
          content:
            "wwPaul Rand once said, “The public is more familiar with bad fucking design than good design. It is, in effect, conditioned to prefe",
        },
      ],
    },
    // Third board
    {
      BoardHeading: "Done",
      id: uuidv4(),
      bicon: "fa-regular fa-circle-check",
      Cards: [
        {
          id: uuidv4(),
          title: "Log-in bug",
          content:
            "wwPaul Rand once said, “The public is more familiar with bad fucking design than good design. It is, in effect, conditioned to prefe",
        },
      ],
    },
  ]);

  function handleCardDragEnd(s_cardId, s_boardId) {
    var t_boardIndex, t_cardIndex, s_boardIndex, s_cardIndex;
    var tempData;
    var cardObj;

    s_boardIndex = data.findIndex((board) => board.id === s_boardId);
    if (s_boardIndex < 0) return;

    s_cardIndex = data[s_boardIndex].Cards.findIndex(
      (card) => card.id === s_cardId
    );
    if (s_cardIndex < 0) return;

    tempData = [...data];

    
    const biIndex = data.findIndex((board) => board.id === tarBoard.tb);
    if (data[biIndex].Cards.length === 0) { //empty container

      cardObj = data[s_boardIndex].Cards[s_cardIndex];
      tempData[s_boardIndex].Cards.splice(s_cardIndex, 1);

      tempData[biIndex].Cards.push(cardObj);
      setData(tempData);

    } else {
      t_boardIndex = data.findIndex((board) => board.id === target.tbid);
      if (t_boardIndex < 0) return;

      t_cardIndex = data[t_boardIndex].Cards.findIndex(
        (card) => card.id === target.tcid
      );
      if (t_cardIndex < 0) return;

      cardObj = data[s_boardIndex].Cards[s_cardIndex];

      tempData[s_boardIndex].Cards.splice(s_cardIndex, 1);
      tempData[t_boardIndex].Cards.splice(t_cardIndex, 0, cardObj);
      setData(tempData);
    }
  }

  function handleCardDaragEnter(tcid, tbid) {
    setTarget({ tcid, tbid });
  }

  function handleBoard(tb) {
    setBoard({ tb });
    // console.log(tarBoard);
  }

  function handleNewCard(card,boardId){
    const boardIndex = data.findIndex((board)=>board.id===boardId);
    const newCardObj = {id: uuidv4(),title: card.card_title,content: card.card_content, date: "Date" }
    var tempData = [...data];
    tempData[boardIndex].Cards.push(newCardObj);
    setData(tempData);

  }

  function handleDeleteCard(cardIndex,bid){
    const bIndex = data.findIndex((board)=>board.id===bid);
    var tempData = [...data];
    tempData[bIndex].Cards.splice(cardIndex,1);
    setData(tempData);
  }

  function handleDeleteBoard(bid){
    const board_index = data.findIndex((board)=>(board.id===bid));
    const tempData = [...data];
    tempData.splice(board_index,1);
    setData(tempData);
  }
  function onAddBoard(title){
    const newBoard = {id: uuidv4(),BoardHeading: title,bicon: "fa-regular fa-file-lines",Cards:[]};
    const tempData = [...data];
    tempData.push(newBoard);
    setData(tempData);
  }
  return (
    <div className="app_container">
      <BoardHead />
      <div className="board_container">
        {data.map((boardData) => {
          return (
            <Board
              bicon={boardData.bicon}
              id={boardData.id}
              key={boardData.id}
              onDragEnter={handleCardDaragEnter}
              onDragEnd={handleCardDragEnd}
              boardData={boardData}
              onBoardEnter={handleBoard}
              onAddNewCard={(card)=>handleNewCard(card,boardData.id)}
              deleteCard={(cardIndex)=>{handleDeleteCard(cardIndex,boardData.id)}}
              deleteBoard={()=>handleDeleteBoard(boardData.id)}
            />
          );
        })}
        <AddBoard onAddBoard={onAddBoard}/>
      </div>
    </div>
  );
}

export default App;

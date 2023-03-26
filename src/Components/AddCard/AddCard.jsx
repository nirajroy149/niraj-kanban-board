import React, { useState } from "react";
import "./addCard.css";
import Button from "@mui/material/Button";
import AddContainer from "./AddContainer";

function AddCard(props) {
  const btnStyle = {
    backgroundColor: "rgb(255 255 255)",
    color: "#000000b8",
    fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
    margin: "2px",
    fontWeight: "bold",
  };
  const [toggle, setToggle] = useState(true);

  function handleNewCard(newCard){

    // Using Object.keys() method to get length 
    const objectLenght = Object.keys(newCard).length; 

    if(objectLenght>0){
        // console.log("add");
        props.onAddNewCard(newCard);
    }
    else{
        // console.log("close")
    }
    setToggle((preValue)=>!preValue)
  }

  return (
    <>
      {toggle ? (
        <Button
          variant="contained"
          style={btnStyle}
          onClick={() => {
            // props.onClick();
            setToggle((preValue) => !preValue);
          }}
        >
          Add Card
        </Button>
      ) : (
        <AddContainer onClick={handleNewCard}/>
      )}
    </>
  );
}

export default AddCard;

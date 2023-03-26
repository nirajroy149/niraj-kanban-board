import React, { useState } from 'react'
import Button from "@mui/material/Button";

export default function AddContainer(props) {

    const [newCard,setNewCard] = useState({
        card_title:"",
        card_content:"",
        card_date:""
    })
    function handleChange(e){
        const {name,value} = e.target;
        setNewCard((preValue)=>{
            return {
                ...preValue,
                [name]: value
            }
        })
    }
  return (
    <>
        <div className="add_conatainer">
          <label htmlFor="card_title">Title of Card</label>
          <input required type="text" name="card_title" value={newCard.card_title} onChange={handleChange}/>

          <label htmlFor="card_content">Content</label>
          <textarea
            rows="4"
            type="text"
            className="content_area"
            name="card_content"
            value={newCard.card_content} onChange={handleChange}
            required
          />

          <label htmlFor="card_date">Due Date</label>
          <input type="type" name="card_date" value={newCard.card_date} onChange={handleChange} required/>

          <div className='add_conatainer_btn'>
            <Button variant="contained" onClick={()=>{props.onClick(newCard)}}>Add</Button>
            <Button variant="outlined"  onClick={()=>{props.onClick({})}}>Close</Button>
          </div>
        </div>
    </>
  )
}

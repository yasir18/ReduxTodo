import React,{useState} from 'react'
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { ListItem, Checkbox } from '@material-ui/core';

export default function Todo (props) {

    console.log(`todo COmponent ${props.id}`)
    const setStyle = () => {
        return (props.completed ? {textDecoration:'line-through'}: {textDecoration:'none'} )
     }
    return(
    <ListItem style={setStyle()}>
        {props.title}
        <Checkbox checked={props.completed} onChange={()=> props.updateTodo(props.id)} />
        <IconButton aria-label="delete" onClick={(event) => props.deleteTodo(props.id)}>
        <DeleteIcon />
      </IconButton>
    </ListItem>);
}

import React from 'react'
import {useDispatch, useSelector} from "react-redux"

function UsersPage() {
    const dispatch = useDispatch()
    const { count } = useSelector(state=> state)

    const plus = () => {
        dispatch({
            type: 'PLUS'
        })
    }
    const minus = () => {
        dispatch({
            type: 'MINUS'
        })
    }
    const addTen = () => {
        dispatch({
            type: 'ADD_TEN'
        })
    }
    const deleteAll = () => {
        dispatch({
            type: 'DELETE_ALL'
        })
    }

    return (
        <div>
            <h1 style={hStyle}>{count}</h1>
            <button onClick={plus} style={buttonStyle}>+</button>
            <button onClick={minus} style={buttonStyle}>-</button>
            <button onClick={addTen} style={buttonStyle}>+10</button>
            <button onClick={deleteAll} style={buttonStyle}>Delete</button>
        </div>
    )
}
const hStyle = {
    fontSize: '26px',
    margin: '20px',
    display: 'flex',
    marginLeft: '150px',
}
const buttonStyle = {
    backgroundColor: '#b56ce7',
    border: 'none',
    color: 'white',
    padding: '15px 32px',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: '16px',
    margin: '4px 2px',
    cursor: 'pointer',
}
export default UsersPage
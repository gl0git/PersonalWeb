import {React, useState, useEffect} from 'react'

export default function NewLog(){ 

    const token = localStorage.getItem('token')

    const [title, setTitle] = useState('')
    const [message, setMessage] = useState('')
    const [date, setDate] = useState('')

    const handleTitleChange = (e) => {
        setTitle(e.target.value)
    }

    const handleMessageChange = (e) => {
        setMessage(e.target.value)
    }

    const handleDateChange = (e) => {
        setDate(e.target.value)
    }

    function postLog(){ 
        fetch('https://shrouded-peak-19757.herokuapp.com/weblogs', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json;charset=utf-8"
        },
        body: JSON.stringify({token: token, title: title, message: message, date: date})   
        })
    }   

    return (
        <form className='new-log-form' action='http://localhost:3000/#/weblog'>
            <input className='log-input' type='text' name='title' placeholder='title of log...' onChange={handleTitleChange}></input>
            <textarea className='log-input' type='text' name='message' placeholder='enter message...' onChange={handleMessageChange} size='200' ></textarea>
            <input className='log-input' type='text' name='date' placeholder='enter date...' onChange={handleDateChange}></input>
            <button className='log-input' onClick={postLog}>Submit</button>
        </form>
    )
}

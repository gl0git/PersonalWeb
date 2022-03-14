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

    if (token != '$OK$#JTNKGOO!IRMKF)!J.#K!OJ$%NT!%N!_eirjnowkgehgbnEL!#34561313EJKMF') {
        console.log(token)
        return (
            <div></div>
        )   
    }

    function postLog(){ 
        fetch('http://localhost:4000/weblogs', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json;charset=utf-8"
        },
        body: JSON.stringify({title: title, message: message, date: date})   
        })
    }   

    return (
        <form className='new-log-form' action='http://localhost:3000/blog'>
            <input className='log-input' type='text' name='title' placeholder='title of log...' onChange={handleTitleChange}></input>
            <textarea className='log-input' type='text' name='message' placeholder='enter message...' onChange={handleMessageChange} size='200' ></textarea>
            <input className='log-input' type='text' name='date' placeholder='enter date...' onChange={handleDateChange}></input>
            <button className='log-input' onClick={postLog}>Submit</button>
        </form>
    )
}

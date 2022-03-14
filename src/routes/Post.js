import {useParams} from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import Heading from '../components/Heading'

function Post(){
    let { id } = useParams()
    const [message, setMessage] = useState()
    const [date, setDate] = useState()
    const [title, setTitle] = useState()

    useEffect(() => {
        fetch(`http://localhost:4000/weblogs/${id}`)
        .then(response => response.json())
        .then(responseJSON => {
            console.log(responseJSON.log)
            setMessage(responseJSON.log.message)
            setTitle(responseJSON.log.title)
            setDate(responseJSON.log.date)
        })
    }, [])

    return (
        <div className='blog-page'>
            <Heading />
            <div class='log'>
                <div class='title'>{title}</div>
                <div class='logMessage'>{message}</div>
                <div class='line-break'></div>
                <div class='bottom'>
                    <a id='readmore' href='http://localhost:3000/weblog'>Read more content.</a>
                    <div class='logDate'><i>{date}</i></div>
                </div>
            </div>
        </div>
    )
}

export default Post
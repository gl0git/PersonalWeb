import {React, useState, useEffect} from 'react'
import Heading from '../components/Heading'

function Blog(){

    const [logs, setLogs] = useState()
    
    useEffect(() => {
        fetch('http://localhost:4000/weblogs')
        .then(response => response.json())
        .then(responseJSON => {
            console.log(responseJSON)
            setLogs(responseJSON.logs)
        })
    }, [])

    return (
        <div className='blog-page'>
            <Heading />
            <div className='body'>
                <div className='title'>The Weblog</div>
                <div className='subtext'><i>This has some text here.</i></div>
                <div className='subhead'>Thoughts</div>
                <ul className='posts'>
                    {logs?.map((log) => {
                        return <li key={log._id}><a href={`http://localhost:3000/weblog/${log._id}`}>{log.title}</a></li>
                    })}
                </ul>
            </div>
        </div>
    )
}

export default Blog
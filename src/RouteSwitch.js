import {HashRouter, BrowserRouter, Routes, Route, useParams} from 'react-router-dom'
import App from './App'
import Blog from './routes/Blog'
import Post from './routes/Post'
import NewLog from './routes/newLog'

function RouteSwitch(){

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App />}/>
                <Route path='/weblog' element={<Blog />} />
                <Route path='/weblog/:id' element={<Post />} />
                <Route path='/newlog' element={<NewLog />} />
            </Routes> 
        </BrowserRouter>
    )
}

export default RouteSwitch
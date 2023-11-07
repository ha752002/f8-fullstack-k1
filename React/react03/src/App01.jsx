import './App.css';
import Notification from './components/Notification';
import Post from './components/Post/Post';
import React, { useState } from 'react';

function App() {
    const [commentCount, setCommentCountState] = useState([]);

    const handleSetCount = (number) => {
        setCommentCountState(number);
    };
    return (
        <>
            <div className="container">
                {commentCount}
                <Notification />
            </div>
            <Post onSetCount={handleSetCount} />
        </>
    );
}

export default App;

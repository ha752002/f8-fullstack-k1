import React, { useEffect, useState } from 'react';
import CommentForm from './CommentForm';
import CommentList from './CommentList';

export default function Post({ onSetCount }) {
    const [comments, setComments] = useState([]);

    const addComment = (newComment) => {
        setComments([...comments, newComment]);
    };

    useEffect(() => {
        onSetCount(comments.length);
    }, [comments]);
    return (
        <div>
            <h2>Thông tin bài viết</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit deleniti provident temporibus impedit ex
                soluta ullam a eius eum adipisci!
            </p>
            <CommentForm onAddComment={addComment} />
            <CommentList comments={comments} />
        </div>
    );
}

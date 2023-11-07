import React, { useState } from 'react';

export default function CommentForm({ onAddComment }) {
    const [commentFormState, setCommentFormState] = useState({
        name: '',
        content: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        const newComment = {
            name: commentFormState.name,
            content: commentFormState.content,
        };
        onAddComment(newComment);

        setCommentFormState({
            name: '',
            content: '',
        });
    };

    const handleNameChange = (e) => {
        setCommentFormState({
            ...commentFormState,
            name: e.target.value,
        });
    };

    const handleContentChange = (e) => {
        setCommentFormState({
            ...commentFormState,
            content: e.target.value,
        });
    };

    return (
        <form action="" onSubmit={handleSubmit}>
            <div className="mb-3">
                <input
                    type="text"
                    value={commentFormState.name}
                    onChange={handleNameChange}
                    className="form-control"
                    placeholder="Tên..."
                />
            </div>
            <div className="mb-3">
                <textarea
                    value={commentFormState.content}
                    onChange={handleContentChange}
                    className="form-control"
                    placeholder="Nội dung..."
                ></textarea>
            </div>
            <div className="text-end">
                <button type="submit" className="btn btn-primary">
                    Bình luận
                </button>
            </div>
        </form>
    );
}

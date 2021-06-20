import React from 'react';
import CommentForm from '../CommentForm/CommentForm';
import Comment from './Comment/Comment';

export default function Comments() {
    return (
        <div>
             <CommentForm />
             <div className="row">
                <Comment />
                <Comment />
                <Comment />
             </div>
             
        </div>
    )
}

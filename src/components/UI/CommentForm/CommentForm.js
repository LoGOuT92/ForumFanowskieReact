import React, { useState,useEffect } from 'react';
import styles from './CommentForm.module.css';

export default function CommentForm() {

    const [comment,setComment]=useState("")
    const [errors, setErrors]=useState({
        comment: ''
    })
    const submit =(e)=>{

    }
    useEffect(()=>{

     console.log(comment.length);
     if(comment.length>=2 || comment.length==0){
         setErrors({
             comment: ""
         })
     }else{
        setErrors({
            comment: "Komentarz musi mieć minimum 2 znaki!"
        })
     }
     console.log(comment)
    }
    ,[comment]);

    return (
        <div className="row">
            <form className={styles.form} onSubmit={submit}>
            
                <textarea className={`form-control ${errors.comment ? 'is-invalid': ''}`}value={comment} onChange={e=>setComment(e.target.value)} type="text" placeholder="Dodaj komentarz..."></textarea>
                <div className="invalid-feedback">{errors.comment}</div>
                <button className={styles.button} type="button">Dodaj komentarz </button>
                
            </form>
        </div>
    )
}

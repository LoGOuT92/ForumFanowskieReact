import React, { useState } from 'react';


export default function SearchBar(props) {

    const [term,setTerm]=useState('')

    const search=()=>{
        props.onSearch(term)
    }
    const onKeyDownHandler=(e)=>{
        if(e.key==="Enter"){
            search()
        }
    }

    return (
        <div>
            <div className="input-group mb-3">
                <input type="text"
                    className="form-control"
                    placeholder="Szukaj artykulu..."
                    aria-label="Szukaj artykulu..."
                    aria-describedby="button-addon2"
                    value={term}
                    onChange={e => setTerm(e.target.value)}
                    onKeyDown={onKeyDownHandler}
                ></input>
                <button
                    className="btn btn-outline-secondary"
                    type="button" id="button-addon2"
                    className="btn btn-danger"
                    onClick={search}
                >Szukaj</button>
            </div>   
        </div>
    )
}

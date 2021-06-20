import React from 'react';
import {Link, link} from 'react-router-dom';
import styles from './Articule.module.css';
import foto from '../../../assets/images/theo_hernandez_2020_21_3.jpg';

export default function Articule(props) {

    return (

            <div className={styles.test2}>
            <Link  to={`/articules/${props.id}`}>
                <div className={styles.test}>
                    <img src={foto} className={styles.img}/>
                </div>
                <div className="row">
                    <div className={"col-md-2 hidden-sm-up"}></div>
                    <div className={"col-md-8 col-sm"}>
                        <div className={styles.test4}><h5>{props.header}</h5></div>
                    </div>
                    <div className={"col-md-2 hidden-sm-up"}></div>
                </div>
                </Link>
            </div>
        

            
    )
}

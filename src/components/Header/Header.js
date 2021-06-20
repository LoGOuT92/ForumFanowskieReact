import React, { useState } from 'react';
import styles from './Header.module.css';
import MainArticule from './MainArticule/MainArticule';

export default function Header(props) {

    const initialArticule=[
        {
            id: 1,
            header: "PRIMAVERA BEATEN BY SAMP: 2-0 AT VISMARA VISMARAVISMARA VISMARAVISMARAVISMARA"
        },
        {
            id: 2,
            header: "bbbbbbbbbbbbbbbbbbbbbbbbbb"
        }
    ]
    const [articule, setArticule]=useState(initialArticule)
    return (
            
            <div className={`${styles.main}`}>
                {articule.map(articule=><div key={articule.id} className={`${styles.mainArticule}`}><MainArticule key={articule.id}{...articule}/></div>)}
            </div>

        

    )
}

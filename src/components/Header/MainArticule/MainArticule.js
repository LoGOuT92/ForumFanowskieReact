import React from 'react';
import styles from './MainArticule.module.css';
import foto from '../../../assets/images/2021.06.11-CU-Brescianini-WebHP.webp';

export default function MainArticule(props) {
    return (
        <a href="#">
            <div className={styles.container}>
                    <div className={styles.image}>
                        <img src={foto} />
                    </div>
                    <div className={styles.header}>
                        {props.header}
                    </div>
            </div>
        </a>
    )
}

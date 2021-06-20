import React from 'react';
import styles from './lastMatch.module.css';
import logo1 from '../../../assets/images/logos/120.png';
import logo2 from '../../../assets/images/logos/127.png';

export default function LastMatch() {
    return (
        <a href="#">
        <div className={styles.container}>
            <div className={styles.header1}>Serie A</div>
           <div className={styles.header2}>10.10.2021</div>

           <div className={styles.logo1}>
               <div className={styles.test}>
                    <img src={logo1}className={styles.img} />
               </div>
           </div>
           <div className={styles.logo2}>
                <div className={styles.test}>
                    <img src={logo2}className={styles.img} />
               </div>
           </div>

           <div className={styles.team1}>Milan</div>
           <div className={styles.team2}>Inter Mediolan</div>
           <div className={styles.score1}><h2>2</h2></div>
            <div className={styles.score2}><h2>2</h2></div>
            
        </div>   
        </a> 
    )
}

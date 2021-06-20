import React from 'react';
import logo1 from '../../../assets/images/logos/120.png';
import logo2 from '../../../assets/images/logos/456.png';
import styles from './nextMatch.module.css';

export default function NextMatch() {
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

           <div className={styles.team1}>
               <div className="col">Milan</div>
           </div>
           <div className={styles.team2}>
           <div className="col">Atalanta Bergamo</div>
           </div>
            
        </div>   
        </a> 
    )
}

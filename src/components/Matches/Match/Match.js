import React from 'react';
import styles from './match.module.css';
import logo1 from '../../../assets/images/logos/120.png';
import logo2 from '../../../assets/images/logos/128.png';


export default function Match(props) {


    //const data = (props.match[0])
    return (
        <a href="#">
        <div className={styles.container}>
           <div className={styles.header1}>Serie A</div>
           <div className={styles.header2}>10.10.2021</div>
                <div className={styles.vs}>
                    <h2>VS</h2>
                    
               </div>
               <div className={styles.score1}><h1>2</h1></div>
               <div className={styles.score2}><h1>1</h1></div>
           <div className={styles.logo1}>

                    <img src={logo1}className={styles.img} />

           </div>
           <div className={styles.logo2}>
                <div className={styles.test}>
                    <img src={logo2}className={styles.img} />
               </div>
           </div>
           <div className={styles.team1}><h3>Milan</h3></div>
           <div className={styles.team2}><h3>Juventus</h3></div>
        </div>
        </a>
    )
}

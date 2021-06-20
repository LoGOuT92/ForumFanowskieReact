import React, { useContext } from 'react';
import AuthContext from '../../Context/authContext';
import styles from './Menu.module.css';
import logo from '../../assets/images/logos/120.png';
import {Link} from 'react-router-dom';


export default function Menu(props) {

    const auth= useContext(AuthContext)

    return (
        <nav className={styles.navBar}>
            <div className={styles.navList}>
                <li className={styles.navItem1}>Team</li>
                <li className={styles.navItem2}>Club</li>
                <li className={styles.navItem3}>Pozycja 4</li>
                <li className={styles.navItem4}>Pozycja 5</li>
                
                    <li className={styles.navItem5}>
                    <Link to={"/"}>
                        <img src={logo}/>
                        </Link>
                    </li>
                
                <li className={styles.navItem6}><a href="#">Login</a></li>
            </div>
        </nav>
               
    )
}

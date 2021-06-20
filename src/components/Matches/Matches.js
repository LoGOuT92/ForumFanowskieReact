import React, { useState,useEffect } from 'react';
import LastMatch from './LastMatch/LastMatch';
import styles from './Maches.module.css';
import Match from './Match/Match';
import NextMatch from './NextMatch/NextMatch';

const initialMatch=[{
    id:1,
    header: "Serie A",
    date: "01-01-2021",
    team1: "Team 1 ",
    team2: "Team 2 ",
    team1Score: 2,
    team2Score: 1
}]

export default function Matches(props) {
    const [matches,setMatches]=useState(initialMatch)
    const [loading, setLoading]=useState(true)

    useEffect(()=>{
        setTimeout(()=>{
            setLoading(false)
          setMatches(initialMatch)
        },1000);
      },[])


    return (
        <div className={styles.container}>
          <div className={styles.lastMatch}>
            <LastMatch/>
          </div>
          <div className={styles.match}>
            <Match/>
          </div>
          <div className={styles.nextMatch}>
            <NextMatch/>
          </div>
        </div>

    )
}

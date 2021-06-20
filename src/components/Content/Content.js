import React, { useEffect, useState } from 'react';
import LoadingIcon from '../UI/LoadingIcon/LoadingIcon';
import SearchBar from '../UI/SearchBar';
import Articule from './Articule/Articule';
import styles from './Content.module.css';

const initialArticule = [{
    id: 1,
    header: "Header1",
    contex: "cooooooooontetx1"
},{
    id: 2,
    header: "Header2",
    contex: "cooooooooontetx2"
},{
    id: 3,
    header: "PRIMAVERA BEATEN BY SAMP: 2-0 AT VISMARA",
    contex: "cooooooooontetx3"
},{
    id: 4,
    header: "Header4",
    contex: "cooooooooontetx4"
},{
    id: 5,
    header: "Header5",
    contex: "cooooooooontetx5"
},{
    id: 6,
    header: "Header6",
    contex: "cooooooooontetx6"
}
]


export default function Content(props) {

    const [articule, setArticule]= useState([])
    const [loading, setLoading]=useState(true)

    useEffect(()=>{
        setTimeout(()=>{
            setLoading(false)
          setArticule(initialArticule)
        },1000);
      },[])

    const onSearchHandler=(term)=>{
        const newArticule = [...initialArticule].filter(x=>x.header.toLocaleLowerCase().includes(term.toLocaleLowerCase()));
        setArticule(newArticule)
      }

      const articules=(
        loading?
        <LoadingIcon/>
        :(
        <div className={`${styles.container}`}>
        {articule.map(articule=><div key={articule.id} className={`${styles.item}`}><Articule key={articule.id} {...articule} /></div>)}
         </div>
        )
        
      )
      

    return (
           
            <div className={styles.contentContainer}>
                 <div className={styles.searchBar}><SearchBar onSearch={(term)=>onSearchHandler(term)}/></div>
                    {articules}
            </div>
    )
}

import React from 'react';
import {useParams} from 'react-router-dom';
import styles from './Articule.module.css';
import logo from '../../assets/images/articule.PNG';
import Comments from '../../components/UI/Comments/Comments';

export default function Articule() {

    const {id} = useParams();
    const [articule, setArticule]= React.useState({});

        const fetchArticule=()=>{
            setArticule({   
            header: "PRIMAVERA BEATEN BY SAMP: 2-0 AT VISMARA",
            contex: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."})
        }

    React.useEffect(()=>{

        setTimeout(()=>{
            fetchArticule();
        },500)


    },[])



    return (


            <div className={styles.flexboxContainer}>
                <div className="container-fluid">
                <div className="row">
                    <div className="col-md-2 hidden-sm-up"></div>
                    <div className="col">
                        <div className={styles.test}>
                            <img src={logo}></img>
                        </div>
                    </div>
                    <div className="col-md-2 hidden-sm-up"></div>
                </div>
                
                <div className="row">
                <div className="col-md-2 hidden-sm-up"></div>
                    <div className="col">
                        <div className={styles.textArea}><h5>{articule.contex}</h5></div>
                    </div>
                <div className="col-md-2 hidden-sm-up"></div>
                </div>

                <div className="row">
                    <div className="col-md-2 hidden-sm-up"></div>
                    <div className="col">
                        <Comments />
                    </div>
                    <div className="col-md-2 hidden-sm-up"></div>
                </div>
                </div>
            </div>

    )
}

import styles from '../../styles/containers/Header.module.css';
import { FaDev } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useState} from 'react';

export function Header(props){
    const [menu,setMenu] = useState(false);

    function scrollProjects(){
        window.scrollTo({
            top: props.pag2.current.offsetTop,
            behavior: 'smooth'
        })
    }

    function scrollAbout(){
        window.scrollTo({
            top: props.pag1.current.offsetTop,
            behavior: 'smooth'
        })
    }

    function scrollContact(){
        window.scrollTo({
            top: props.pag3.current.offsetTop,
            behavior: 'smooth'
        })
    }


    return(
        <>
        <div className={styles.container}>
            <div className={styles.box}>
                <img data-aos="fade-right" className={styles.Icon}  src="IconeLouis.png" alt="Louis" />
            </div>

            <div className={styles.boxInfo}>
                <div onClick={scrollContact} className={styles.boxTags}>
                    <h3>Contato</h3>
                </div>

                <div onClick={scrollAbout} className={styles.boxTags}>
                    <h3>Resumo</h3>
                </div>

                <div onClick={scrollProjects} className={styles.boxTags}>
                    <h3>Projetos</h3>
                </div>
            </div>

            <div onClick={() => setMenu(!menu)} className={styles.boxInfoIcon}>
                <GiHamburgerMenu className={styles.icon} size={55} color={"#000"}/>
            </div>
        </div>
        {
            menu && <div className={styles.boxInfoMenu}>
            <div onClick={scrollContact} className={styles.boxTags}>
                <h3>Contato</h3>
            </div>

            <div onClick={scrollAbout} className={styles.boxTags}>
                <h3>Resumo</h3>
            </div>

            <div onClick={scrollProjects} className={styles.boxTags}>
                <h3>Projetos</h3>
            </div>
        </div>
        }
    </>
    )
}
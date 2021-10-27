import styles from '../../styles/containers/Header.module.css';
import { FaDev } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useState} from 'react';

export function Header(){
    const [menu,setMenu] = useState(false);



    return(
        <>
        <div className={styles.container}>
            <div className={styles.box}>
                <img data-aos="fade-right" className={styles.Icon}  src="IconeLouis.png" alt="Louis" />
            </div>

            <div className={styles.boxInfo}>
                <div className={styles.boxTags}>
                    <h3>Contato</h3>
                </div>

                <div className={styles.boxTags}>
                    <h3>Resumo</h3>
                </div>

                <div className={styles.boxTags}>
                    <h3>Projetos</h3>
                </div>
            </div>

            <div onClick={() => setMenu(!menu)} className={styles.boxInfoIcon}>
                <GiHamburgerMenu className={styles.icon} size={55} color={"#000"}/>
            </div>
        </div>
        {
            menu && <div className={styles.boxInfoMenu}>
            <div className={styles.boxTags}>
                <h3>Contato</h3>
            </div>

            <div className={styles.boxTags}>
                <h3>Resumo</h3>
            </div>

            <div className={styles.boxTags}>
                <h3>Projetos</h3>
            </div>
        </div>
        }
    </>
    )
}
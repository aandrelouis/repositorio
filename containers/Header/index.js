import styles from '../../styles/containers/Header.module.css';
import { FaDev } from 'react-icons/fa';


export function Header(){

    return(
        <div className={styles.container}>
            <div className={styles.box}>
                <FaDev  size={55} color={"#ec5b53"}/>
                <div className={styles.boxName}>
                    <h1>André Louis</h1>
                </div>
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


        </div>
    )
}
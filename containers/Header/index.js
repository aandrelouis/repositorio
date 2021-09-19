import styles from '../../styles/containers/Header.module.css';


export function Header(){

    return(
        <div className={styles.container}>
            <div className={styles.boxName}>
                <h1>André Louis</h1>
            </div>

            <div className={styles.boxInfo}>
                <h1>entre em contato resumo e outros</h1>
            </div>


        </div>
    )
}
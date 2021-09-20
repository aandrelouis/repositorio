import styles from '../../styles/containers/Header.module.css';


export function Header(){

    return(
        <div className={styles.container}>
            <div className={styles.boxName}>
                <h1>André Louis</h1>
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
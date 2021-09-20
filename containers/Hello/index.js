import styles from '../../styles/containers/Hello.module.css';


export function Hello(){

    return(
        <div className={styles.container}>
            <div className={styles.boxResume}>
                <h3>Olá,eu sou <h1 className={styles.nameDestaq}>André Louis</h1></h3>
                <p>Estudante de engenharia da computação na UFES
                ,atualmente 5 l peirodo e sdadsadsadsadsdasdasda
                dasdsddadsadsaddasdasdasdsadsdafdsdfsfdsfdfsdfsf
                sdfdfsfds
                </p>
            </div>

            <div className={styles.boxPhoto}>
                <img data-aos="fade-right" className={styles.Photo}  src="/perfil/perfil2.jpg" alt="andre louis" />
            </div>
        </div>
    )
}
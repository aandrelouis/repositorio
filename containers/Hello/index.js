import styles from '../../styles/containers/Hello.module.css';


export function Hello(){

    return(
        <div className={styles.container}>
            <div className={styles.boxResume}>
                <h1>Olá,eu sou André Louis</h1>
                <p>Estudante de engenharia da computação na UFES
                ,atualmente 5 l peirodo e sdadsadsadsadsdasdasda
                dasdsddadsadsaddasdasdasdsadsdafdsdfsfdsfdfsdfsf
                sdfdfsfds
                </p>
            </div>

            <div className={styles.boxPhoto}>
                <img data-aos="fade-right" className={styles.Photo}  src="/perfil/perfil1.jpg" alt="andre louis" />
            </div>
        </div>
    )
}
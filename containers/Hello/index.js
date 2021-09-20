import styles from '../../styles/containers/Hello.module.css';


export function Hello(){

    return(
        <div className={styles.container}>
            <div className={styles.boxResume}>
                
                <div className={styles.boxTitle}>
                    <h3>Olá,eu sou </h3>
                    <h2 className={styles.nameDestaq}>André Louis</h2>
                </div>
                
                <p> Sou estudante de enhenharia da computação,
                    criei esse repositorio para falar sobre 
                    as coisa que tenho visto dentro da faculdade e aplicado
                </p>
            
                


            
            </div>

            <div className={styles.boxPhoto}>
                <img data-aos="fade-right" className={styles.Photo}  src="/perfil/perfil2.jpg" alt="andre louis" />
            </div>
        </div>
    )
}
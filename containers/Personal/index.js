import styles from '../../styles/containers/Personal.module.css';
import { PersonalCard} from '../../components/PersonalCard';

export function Personal(){

    return(
        <div className={styles.container}>
            <div className={styles.boxInfo}>
                <h1>Projetos pessoais</h1>
            </div>


            <div data-aos="fade-right" className={styles.boxCards}>
                <PersonalCard
                    desc={"Aplicação construída com React, Node e React Native do JavaScript, projeto desenvolvido durante a semana Next Level Week."} 
                    name={"Ecoleta"}
                    type={"gif"}
                    link={"https://github.com/aandrelouis/Ecoleta"} 
                    />
            </div>

        </div>
    )
}
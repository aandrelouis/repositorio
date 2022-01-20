import styles from '../../styles/containers/Personal.module.css';
import { PersonalCard} from '../../components/PersonalCard';

export function Personal(props){

    return(
        <div ref={props.referencia} className={styles.container}>
            <div className={styles.boxInfo}>
                <h1>Projetos</h1>
            </div>


            <div data-aos="fade-right" className={styles.boxCards}>
                <PersonalCard
                    desc={"Aplicação construída com React, Node e React Native do JavaScript, projeto desenvolvido durante a semana Next Level Week."} 
                    name={"Ecoleta"}
                    type={"gif"}
                    link={"https://github.com/aandrelouis/Ecoleta"} 
                    />

                <PersonalCard
                    desc={"Aplicação Desenvolvida durante a semana de imersão da Rockeseat, versão web."} 
                    name={"BeTheHero"}
                    type={"jpeg"}
                    link={"https://github.com/aandrelouis/Be-the-hero-"} 
                />

                <PersonalCard
                    desc={"Aplicação Desenvolvida durante a semana de imersão da Rockeseat, versão mobile."} 
                    name={"BeTheHeroMobile"}
                    type={"jpg"}
                    link={"https://github.com/aandrelouis/Be-the-hero-"} 
                />
              
            </div>
        </div>
    )
}
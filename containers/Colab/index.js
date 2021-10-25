import styles from '../../styles/containers/Colab.module.css';
import Swal from 'sweetalert2'
import { ColabCard} from '../../components/ColabCard';


export function Colab(){

    
    return(
        <div className={styles.container}>
            <div className={styles.box}>
                <h1>Colaborações</h1>
            </div>

            <div data-aos="fade-right" className={styles.boxCards}>
                <ColabCard 
                    desc={"Projeto desenvolvido no Pet, jogo desenvolvido em javascript e o mesmo utiliza uma IA(Rede Neural) para jogar contra o Player, é possivel jogar contra diferentes niveis da IA bastando selecionar a dificuldade"} 
                    name={"Pong"} 
                    type={"gif"} 
                    link={"https://github.com/aandrelouis/Pong-game"}
                    gitOn={"on"}
                    />
                
                <ColabCard 
                    desc={"Front-end de uma aplicação que em tempo real permite adicionar e retirar memebros da tranca Biométrica do PET"} 
                    name={"Tranca-Biometrica"}
                    type={"jpeg"}
                    link={"https://github.com/aandrelouis/Site-tranca-biometrica"} 
                    gitOn={"on"}
                    />
                
                <ColabCard 
                    desc={"Aplicação desenvolvida dentro do grupo Pet, o alerta 'e....."} 
                    name={"AlertaUfes"} 
                    type={"gif"}
                    link={"https://github.com/aandrelouis/Site-tranca-biometrica"} 
                    gitOn={"off"}
                />

                <ColabCard 
                    desc={"Aplicação desenvolvida dentro do grupo Pet, o alerta 'e....."} 
                    name={"AlertaUfesMobile"} 
                    type={"jpg"}
                    link={"https://github.com/aandrelouis/Site-tranca-biometrica"}
                    gitOn={"off"} 
                />
            </div>


        </div>
    )
}
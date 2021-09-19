import styles from '../../styles/containers/Colab.module.css';
import Swal from 'sweetalert2'
import { ColabCard} from '../../components/ColabCard';


export function Colab(){
    function handle(){
        Swal.fire('Any fool can use a computer')
    }
    
    
    return(
        <div className={styles.container}>
            <div className={styles.box}>
                <h1>Projetos que eu colaborei</h1>
            </div>

            <ColabCard />


        </div>
    )
}
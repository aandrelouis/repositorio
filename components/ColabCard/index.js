import styles from '../../styles/components/ColabCard.module.css';
import Swal from 'sweetalert2'  


export function ColabCard(props){
    function handle(){
        Swal.fire({
            title: 'Sweet!',
            width: 800,
            html:'link do projeto :<a href="https://github.com/aandrelouis">icone</a>',
            text: props.desc,
            imageUrl: `/${props.name}/alerta1.png`,
            imageWidth: 700,
            imageHeight: 400,
            imageAlt: 'Custom image',
          })
    }
    
    
    return(
        <div className={styles.container}>                   
                <div className={styles.box} onClick={handle}>
                    <img className={styles.Photo} src={`/${props.name}/Logoalerta.svg`} alt="logo" />                
                </div>     

        </div>
    )
}
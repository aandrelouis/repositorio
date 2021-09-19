import styles from '../../styles/components/ColabCard.module.css';
import Swal from 'sweetalert2'  


export function ColabCard(){
    function handle(){
        Swal.fire({
            title: 'Sweet!',
            text: 'Um projeto que foi trabalhado com muito tempo e que será aplicaod dentro da faculdade',
            imageUrl: 'https://unsplash.it/400/200',
            imageWidth: 700,
            imageHeight: 400,
            imageAlt: 'Custom image',
          })
    }
    
    
    return(
        <div data-aos="fade-right" className={styles.container}>                   
                <div className={styles.box} onClick={handle}>
                    <h1>projeto</h1>
                </div>     

        </div>
    )
}
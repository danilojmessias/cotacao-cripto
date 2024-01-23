import { Link } from 'react-router-dom'
import styles from './error.module.css'

export function Nocoin(){
    return(
        <div className={styles.container}>
            <h2>Moeda não encontrada</h2>
            <Link to="/">
                Voltar ao inicio
            </Link>
        </div>

    )
}
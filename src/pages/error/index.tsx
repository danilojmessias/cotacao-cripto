import { Link } from 'react-router-dom'
import styles from './error.module.css'

export function Error404(){
    return(
        <div className={styles.container}>
            <h2>Pagina não encontrada - ERRO 404</h2>
            <Link to="/">
                Voltar ao inicio
            </Link>
        </div>

    )
}
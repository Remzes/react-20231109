import { ThemeButton } from '../theme-button'
import styles from './styles.module.css'

export const NavBar = () => {
    return (
        <header className={styles.root}>
            <button className={styles.button}>
                Заказ
            </button>
            <ThemeButton/>
        </header>
    )
}
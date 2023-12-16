import { NavBar } from "../../components/navbar"
import { Footer } from "../../components/footer"
import { ThemeProvider } from "../../providers/themeProvider"

import styles from './styles.module.css'

export const MainLayout = ({ children }) => {
    return (
        <ThemeProvider>
            <NavBar />
            <div className={styles.root}>
                <div className={styles.content}>
                    {children}
                </div>    
                <Footer />
            </div>
        </ThemeProvider>
    )
}
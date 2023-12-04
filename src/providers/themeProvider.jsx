import { useEffect, useLayoutEffect, useState, useCallback } from "react"
import { ThemeContext } from "../contexts/themeContext"
import { THEME_CONST } from "../consts/THEME_CONST"

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(THEME_CONST.light)
    
    const updateTheme = useCallback((theme) => setTheme(theme), [])

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', THEME_CONST.light)
    }, [])

    useLayoutEffect(() => {
        console.log('Changed!', theme)
        document.documentElement.setAttribute('data-theme', theme)
    }, [theme])

    return (
        <ThemeContext.Provider value={{ theme, updateTheme }}>
            { children }
        </ThemeContext.Provider>
    )
}
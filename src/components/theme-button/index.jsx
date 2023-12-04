import { useTheme } from "../../hooks/themeHook"
import { THEME_CONST } from "../../consts/THEME_CONST"

export const ThemeButton = () => {
    const { theme, updateTheme } = useTheme()

    const setTheme = () => updateTheme(THEME_CONST.dark === theme ? THEME_CONST.light : THEME_CONST.dark)

    return (
        <button onClick={setTheme}>
            Сменить тему
        </button>
    )
}
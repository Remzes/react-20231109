import styles from './styles.module.css'
import cn from "classnames"

export const TextInput = ({ label, id, value, onChange, className }) => {
    return (
        <div className={cn(styles.root, className)}>
            <label>{label}</label>
            <input id={id} value={value} onChange={onChange} />
        </div>
    )
}
import styles from './styles.module.css'
import cn from "classnames"

export const TextInput = ({ label, id, onChange, className }) => {
    return (
        <div className={cn(styles.root, className)}>
            <label>{label}</label>
            <input id={id} onChange={onChange} />
        </div>
    )
}
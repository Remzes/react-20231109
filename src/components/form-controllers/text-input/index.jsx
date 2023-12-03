import styles from './styles.module.css'

export const TextInput = ({ label, id, onChange }) => {
    return (
        <div className={styles.root}>
            <label>{label}</label>
            <input id={id} onChange={onChange} />
        </div>
    )
}
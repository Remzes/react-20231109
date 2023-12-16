import cn from 'classnames'
import styles from './styles.module.css'

export const Tab = ({ title, isActive, setActiveRestaurantId, className = '' }) => {
    const tabClassName = cn(
        styles.root,
        className,
        { [styles.active]: isActive }
    )

    return <button className={tabClassName} onClick={setActiveRestaurantId}>{title}</button>;
};
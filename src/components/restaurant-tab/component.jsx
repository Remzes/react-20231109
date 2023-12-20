import cn from 'classnames'
import styles from './styles.module.css'

export const Tab = ({ isActive, onClick, restaurant, className = ''}) => {
    const tabClassName = cn(
        styles.root,
        className,
        { [styles.active]: isActive }
    )

    return <button className={tabClassName} onClick={onClick}>
        {restaurant ? restaurant.name : 'N/A'}
    </button>;
};
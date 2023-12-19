import cn from 'classnames'
import styles from './styles.module.css'
import { useSelector } from 'react-redux';
import { selectRestaurantById } from '../../redux/features/entities/restaurants/selector';

export const Tab = ({ id, isActive, setActiveRestaurantId, className = '' }) => {
    const restaurant = useSelector(state => selectRestaurantById(state, id))

    const tabClassName = cn(
        styles.root,
        className,
        { [styles.active]: isActive }
    )

    return <button className={tabClassName} onClick={setActiveRestaurantId}>
        {restaurant ? restaurant.name : 'N/A'}
    </button>;
};
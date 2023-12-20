import { selectRestaurantById } from '../../redux/entities/restaurants/selector';
import { useSelector } from 'react-redux';
import { Tab } from './component';

export const TabContainer = ({ id, ...props }) => {
    const restaurant = useSelector(state => selectRestaurantById(state, id))

    return <Tab { ...props } restaurant={restaurant} />
}
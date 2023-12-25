import { Tab } from './component';
import { useGetRestaurantsQuery } from '../../redux/entities/restaurants/restaurantApiSlice';
// REDUX THUNK
// import { selectRestaurantById } from '../../redux/entities/restaurants/selector';
// import { useSelector } from 'react-redux';

export const TabContainer = ({ id, ...props }) => {

    const { restaurant } = useGetRestaurantsQuery(undefined, {
        selectFromResult: ({ data }) => {
            return { restaurant: data.find(i => i.id === id) }
        }
    })


    return <Tab { ...props } restaurant={restaurant} />
}
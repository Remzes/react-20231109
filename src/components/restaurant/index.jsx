import { Menu } from "../menu";
import { Reviews } from "../reviews";
import cn from "classnames"

import styles from './styles.module.css'
import { useSelector } from "react-redux";
import {
    selectRestaurantMenuById,
    selectRestaurantReviewsById
} from "../../redux/features/entities/restaurants/selector";

export const Restaurant = ({ restaurant, className }) => {
    const restaurantMenu = useSelector(state => selectRestaurantMenuById(state, restaurant.id))
    const restaurantReviews = useSelector(state => selectRestaurantReviewsById(state, restaurant.id))
    
    return (
        <div className={cn(styles.root, className)}>
            <h2 className={styles.header}>{restaurant.name}</h2>
            <Menu menu={restaurantMenu} />
            <Reviews reviews={restaurantReviews} />
            <hr />
        </div>
    );
};
import { Menu } from "../menu";
import { Reviews } from "../reviews";
import cn from "classnames"

import styles from './styles.module.css'

export const Restaurant = ({ restaurant, restaurantMenu, restaurantReviews, className }) => {
    return (
        <div className={cn(styles.root, className)}>
            <h2 className={styles.header}>{restaurant.name}</h2>
            <Menu menu={restaurantMenu} />
            <Reviews reviews={restaurantReviews} />
            <hr />
        </div>
    );
};
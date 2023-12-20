import cn from "classnames"
import { MenuContainer } from "../menu/container";
import { ReviewsContainer } from "../reviews/container";

import styles from './styles.module.css'

export const Restaurant = ({ restaurant, menuStatus, reviewsStatus, className }) => {

    return (
        <div className={cn(styles.root, className)}>
            <h2 className={styles.header}>{restaurant.name}</h2>
            {menuStatus && <MenuContainer restaurantId={restaurant.id} />}
            {reviewsStatus && <ReviewsContainer restaurantId={restaurant.id} />}
            <hr />
        </div>
    );
};
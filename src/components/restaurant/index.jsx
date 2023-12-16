import { Menu } from "../menu";
import { Reviews } from "../reviews";
import cn from "classnames"

import styles from './styles.module.css'

export const Restaurant = ({ restaurant, className }) => {
    return (
        <div className={cn(styles.root, className)}>
            <h2 className={styles.header}>{restaurant.name}</h2>
            <Menu menu={restaurant.menu} />
            <Reviews reviews={restaurant.reviews} />
            <hr />
        </div>
    );
};
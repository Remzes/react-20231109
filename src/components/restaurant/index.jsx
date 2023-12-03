import { Menu } from "../menu";
import { Reviews } from "../reviews";

import styles from './styles.module.css'

export const Restaurant = ({ restaurant }) => {
    return (
        <div className={styles.root}>
            <h2 className={styles.header}>{restaurant.name}</h2>
            <Menu menu={restaurant.menu} />
            <Reviews reviews={restaurant.reviews} />
            <hr />
        </div>
    );
};
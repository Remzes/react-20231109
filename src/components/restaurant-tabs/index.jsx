import { useSelector } from "react-redux";
import { Tab } from "../restaurant-tab";

import styles from "./styles.module.css"
import { selectRestaurantIds } from "../../redux/features/entities/restaurants/selector";

export const RestaurantTabs = ({ activeRestaurantId, setActiveRestaurantId }) => {
    const restaurantIds = useSelector(selectRestaurantIds)

    return (
        <div>
            <Tab
                key={-1}
                className={styles.tab}
                isActive={-1 === activeRestaurantId}
                setActiveRestaurantId={() => setActiveRestaurantId(null)}
            />
            {restaurantIds.map(id => (
                <Tab
                    id={id}
                    className={styles.tab}
                    isActive={id === activeRestaurantId}
                    setActiveRestaurantId={() => setActiveRestaurantId(id)}
                    key={id}
                />
            ))}
        </div>
    );
};
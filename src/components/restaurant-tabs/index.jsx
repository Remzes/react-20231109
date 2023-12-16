import { Tab } from "../restaurant-tab";

import styles from "./styles.module.css"

export const RestaurantTabs = ({ items, activeRestaurantId, setActiveRestaurantId }) => {
    return (
        <div>
            <Tab
                title="N/A"
                key={-1}
                className={styles.tab}
                isActive={-1 === activeRestaurantId}
                setActiveRestaurantId={() => setActiveRestaurantId(null)}
            />
            {items.map(({ name, id }) => (
                <Tab
                    className={styles.tab}
                    isActive={id === activeRestaurantId}
                    setActiveRestaurantId={() => setActiveRestaurantId(id)}
                    title={name}
                    key={id}
                />
            ))}
        </div>
    );
};
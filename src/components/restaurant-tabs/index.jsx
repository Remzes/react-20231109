import { useDispatch, useSelector } from "react-redux";
import { TabContainer } from "../restaurant-tab/container";

import styles from "./styles.module.css"
import { selectRestaurantIds } from "../../redux/entities/restaurants/selector";
import { getRestaurantDishesById } from "../../redux/entities/dishes/thunks";
import { getRestaurantReviewsById } from "../../redux/entities/reviews/thunk"

export const RestaurantTabs = ({ activeRestaurantId, setActiveRestaurantId }) => {
    const restaurantIds = useSelector(selectRestaurantIds)
    const dispatch = useDispatch()

    const onClick = (id) => {
        setActiveRestaurantId(id)
        dispatch(getRestaurantDishesById(id))
        dispatch(getRestaurantReviewsById(id))
    }

    return (
        <div>
            <TabContainer
                key={-1}
                className={styles.tab}
                isActive={-1 === activeRestaurantId}
                setActiveRestaurantId={() => setActiveRestaurantId(null)}
            />
            {restaurantIds.map(id => (
                <TabContainer
                    id={id}
                    className={styles.tab}
                    isActive={id === activeRestaurantId}
                    onClick={() => onClick(id)}
                    key={id}
                />
            ))}
        </div>
    );
};
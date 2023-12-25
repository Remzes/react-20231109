import React from 'react'
import { TabContainer } from "../restaurant-tab/container";

import styles from "./styles.module.css"
import { useGetRestaurantsQuery } from "../../redux/entities/restaurants/restaurantApiSlice";
import { useLazyGetDishesByRestaurantIdQuery } from "../../redux/entities/dishes/dishApiSlice";
import { useLazyGetReviewsByRestaurantIdQuery } from '../../redux/entities/reviews/reviewApiSlice';
// REDUX
// import { useDispatch, useSelector } from "react-redux";
// import { selectRestaurantIds } from "../../redux/entities/restaurants/selector";

export const RestaurantTabs = React.memo(({ activeRestaurantId, setActiveRestaurantId, ...rest }) => {
    // REDUX THUNK
    // const restaurantIds = useSelector(selectRestaurantIds)
    // const dispatch = useDispatch()

    const [getDishesByRestaurantId] = useLazyGetDishesByRestaurantIdQuery(undefined)
    const [getReviewsByRestaurantId] = useLazyGetReviewsByRestaurantIdQuery(undefined)
    const { restaurantIds } = useGetRestaurantsQuery(undefined, {
        selectFromResult: ({ data }) => ({ restaurantIds: data?.map(i => i.id) || [] })
    })

    const onClick = (id) => {
        setActiveRestaurantId(id)
        getDishesByRestaurantId({ restaurantId: id }, true)
        getReviewsByRestaurantId({ restaurantId: id }, true)
    }

    return (
        <div>
            <TabContainer
                key={-1}
                className={styles.tab}
                isActive={-1 === activeRestaurantId}
                onClick={() => setActiveRestaurantId(-1)}
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
});
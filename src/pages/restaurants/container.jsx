import { useEffect, useState } from "react";
import { RestaurantPage } from "./component";
import { useGetRestaurantsQuery } from "../../redux/entities/restaurants/restaurantApiSlice";
import { useGetUsersQuery } from "../../redux/entities/users/userApiSlice";
// REDUX
// import { useDispatch } from "react-redux";
// import { getRestaurants } from "../../redux/entities/restaurants/thunks";
// import { useSelector } from "react-redux";
// import { selectRestaurantById } from "../../redux/entities/restaurants/selector";

export const RestaurantsPageContainer = () => {
    const restaurantQuery = useGetRestaurantsQuery(undefined)
    const userQuery = useGetUsersQuery(undefined)

    const [restaurantId, setActiveRestaurantId] = useState(-1)
    const activeRestaurant = restaurantQuery.data?.find(i => i.id === restaurantId) ?? {}

    // REDUX THUNK
    // const activeRestaurant = useSelector(state => selectRestaurantById(state, restaurantId))
    // const dispatch = useDispatch()
    // useEffect(() => {
    //     dispatch(getRestaurants())
    // }, [])

    if (
        restaurantQuery.isLoading || restaurantQuery.isFetching ||
        userQuery.isLoading || userQuery.isFetching
    ) {
        return 'Loading...'
    }
    if (restaurantQuery.isError || userQuery.isError) {
        return 'Error'
    }

    return (
        <RestaurantPage
            restaurantId={restaurantId}
            activeRestaurant={activeRestaurant}
            setActiveRestaurantId={setActiveRestaurantId}
        />
    );
};
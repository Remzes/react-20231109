import { useSelector } from "react-redux"
import { Menu } from "./component"
import { makeSelectDishesByRestaurantId } from "../../redux/entities/dishes/selector"
import { useGetDishesByRestaurantIdQuery } from "../../redux/entities/dishes/dishApiSlice"

export const MenuContainer = ({ restaurantId }) => {
    // REDUX THUNK
    // const selectDishesByRestaurantId = makeSelectDishesByRestaurantId()
    // const dishes = useSelector(state => selectDishesByRestaurantId(state, restaurantId))

    const { data, isLoading, isFetching, isError } = useGetDishesByRestaurantIdQuery({ restaurantId })

    if (isError) return <div>Error</div>
    if (isLoading || isFetching) return <div>Loading...</div>
    
    return <Menu dishes={data} restaurantId={restaurantId} />
}
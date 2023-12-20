import { useSelector } from "react-redux"
import { Menu } from "./component"
import { makeSelectDishesByRestaurantId } from "../../redux/entities/dishes/selector"

export const MenuContainer = ({ restaurantId }) => {
    const selectDishesByRestaurantId = makeSelectDishesByRestaurantId()
    const dishes = useSelector(state => selectDishesByRestaurantId(state, restaurantId))
    
    return <Menu dishes={dishes} />
}
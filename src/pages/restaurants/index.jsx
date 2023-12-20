import { RestaurantTabs } from "../../components/restaurant-tabs";
import { useState } from "react";
import { ReviewForm } from "../../components/review-form";
import { MainLayout } from "../../layouts/MainLayout";
import styles from "./styles.module.css"
import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/entities/restaurants/selector";
import { RestaurantContainer } from "../../components/restaurant/container";

export const RestaurantsPage = () => {
    const [restaurantId, setActiveRestaurantId] = useState(-1)
    const activeRestaurant = useSelector(state => selectRestaurantById(state, restaurantId))

    return (
        <MainLayout>
            <div className={styles.preview}>
                <h1>Restaurants Menu & Dishes:</h1>
                <RestaurantTabs
                    activeRestaurantId={restaurantId}
                    setActiveRestaurantId={setActiveRestaurantId}
                />
            </div>
            { restaurantId && restaurantId !== -1 && (
                <>
                    <RestaurantContainer className={styles.restaurant} restaurant={activeRestaurant} />
                    <ReviewForm />
                </>
            )}
        </MainLayout>
    );
};
import styles from "./styles.module.css"
import { ReviewForm } from "../../components/review-form";
import { MainLayout } from "../../layouts/MainLayout";
import { RestaurantContainer } from "../../components/restaurant/container";
import { RestaurantTabs } from "../../components/restaurant-tabs";

export const RestaurantPage = ({ restaurantId, setActiveRestaurantId, activeRestaurant }) => {
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
    )
}
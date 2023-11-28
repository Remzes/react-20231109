import { Tab } from "./tab";
export const RestaurantTabs = ({ items, setActiveRestaurantId }) => {
    return (
        <div>
            <Tab
                title="N/A"
                key={-1}
                setActiveRestaurantId={() => setActiveRestaurantId(null)}
            />
            {items.map(({ name, id }) => (
                <Tab
                    setActiveRestaurantId={() => setActiveRestaurantId(id)}
                    title={name}
                    key={id}
                />
            ))}
        </div>
    );
};
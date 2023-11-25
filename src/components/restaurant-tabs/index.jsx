import { Tab } from "./tab";
export const RestaurantTabs = ({ items }) => {
    return (
        <div>
            {items.map(({ name, id }) => (
                <Tab title={name} key={id} />
            ))}
        </div>
    );
};
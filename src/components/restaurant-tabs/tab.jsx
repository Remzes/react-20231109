export const Tab = ({ title, setActiveRestaurantId }) => {
    return <button onClick={setActiveRestaurantId}>{title}</button>;
};
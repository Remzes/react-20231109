import { RestaurantsPageContainer } from "./pages/restaurants/container";
import { Provider } from "react-redux";
import store from "./redux"

import './styles/index.css'

function App() {
  return (
    <Provider store={store}>
      <div>
          <RestaurantsPageContainer />
      </div>
    </Provider>
  )
}

export default App

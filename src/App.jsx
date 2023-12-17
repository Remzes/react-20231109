import {RestaurantsPage} from "./pages/restaurants/index.jsx";
import { Provider } from "react-redux";
import store from "./redux"

import './styles/index.css'

function App() {
  return (
    <Provider store={store}>
      <div>
          <RestaurantsPage />
      </div>
    </Provider>
  )
}

export default App

import { Provider } from "react-redux";
import store from "./store/store";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CardInfo from "./components/CardInfo";
import CardsList from "./components/CardsList";
const router = createBrowserRouter([
  {
    path: "/",
    element: <CardsList />,
  },

  {
    path: "/:postId",
    element: <CardInfo />,
  },
]);
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <RouterProvider router={router} />
      </div>
    </Provider>
  );
}

export default App;

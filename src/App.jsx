import {
  createBrowserRouter,
  Navigate,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import "./App.css";
import Basket from "./pages/Basket";
import Home from "./pages/Home";
import ProductAdd from "./pages/Product add";

const routes = [
  {
    path: "/basket",
    element: <Basket />,
  },
];

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/basket" element={<Basket />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/productAdd" element={<ProductAdd />} />
      </Routes>
      {/* <RouterProvider router={routes} /> */}
    </div>
  );
}

export default App;

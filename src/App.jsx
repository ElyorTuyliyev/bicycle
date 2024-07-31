import { Route, Routes } from "react-router-dom";
import "./App.css";
import ROUTES from "./routes";

function App() {
  return (
    <div className="App">
      <Routes>
        {ROUTES.map((item) => (
          <Route key={item.path} {...item} />
        ))}
      </Routes>
      {/* <RouterProvider router={routes} /> */}
    </div>
  );
}

export default App;

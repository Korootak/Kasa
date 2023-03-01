import "./App.css";
import Card from "./components/Tumb/Tumb";
import Carousel from "./components/Carousel/Carousel";
import router from "./Router";
import { RouterProvider } from "react-router-dom";
function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;

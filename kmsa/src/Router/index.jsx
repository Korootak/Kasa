import Wellcome from '../Pages/Wellcome';
import RegardsTo from '../Pages/RegardsTo';
import {
  createBrowserRouter
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Wellcome />,
  },
  {
    path: "/regardsto",
    element: <RegardsTo />,
  },
]);
export default router;
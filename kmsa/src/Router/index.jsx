import Wellcome from '../Pages/Wellcome';
import RegardsTo from '../Pages/RegardsTo';
import {
  createBrowserRouter
} from "react-router-dom";
import NotFound from '../Pages/NotFound';
import Appartment from '../Pages/Appartment';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Wellcome />,
    exact: true,
    errorElement : <NotFound />
  },
  {
    path: "/regardsto",
    element: <RegardsTo />,
    exact : true,
    errorElement : <NotFound />
  },
  {
    path: "/appartment/:id",
    element: <Appartment />,
    exact : true,
    errorElement : <NotFound />
  },
]);
export default router;
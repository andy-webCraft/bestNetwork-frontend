import { BrowserRouter } from "react-router-dom";

const withRouter = (component) => function RouterProvider() {
  return <BrowserRouter>{component()}</BrowserRouter>;
};

export default withRouter;

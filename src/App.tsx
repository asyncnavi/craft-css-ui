import { Fragment } from "react";
import { RouterProvider } from "react-router";
import router from "./route";

function App() {
  return (
    <Fragment>
      <RouterProvider router={router} />
    </Fragment>
  );
}

export default App;

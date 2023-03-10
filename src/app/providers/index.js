import { compose } from "@reduxjs/toolkit";
import withPersist from "./withPersist";
import withRouter from "./withRouter";
import withStore from "./withStore";

export { default as WithTheme } from "./WithTheme";

export const withProvides = compose(withStore, withPersist, withRouter);

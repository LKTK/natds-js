import * as React from "react";

import MaterialContainer from "@material-ui/core/Container";
import { IContainerProps } from "./IContainerProps";

export { IContainerProps } from "./IContainerProps";

export const Container = React.forwardRef<unknown, IContainerProps>(
  (props: IContainerProps,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ref: any) => <MaterialContainer {...props} ref={ref} />,
);

Container.displayName = "Container";
export default Container;
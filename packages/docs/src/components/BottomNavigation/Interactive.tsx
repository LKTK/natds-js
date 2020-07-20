import * as React from "react";
import { BottomNavigation, BottomNavigationAction, Icon } from "@naturacosmeticos/natds-web";
import { boolean } from "@storybook/addon-knobs";

export const Interactive = () => {
  const [
    value, setValue,
  ] = React.useState("btn1");

  const handleChange = (event: any, newValue: any) => {
    setValue(newValue);
  };

  const showLabels = boolean("showLabels", false);

  /**
   * @todo fix(docs): TS2769: No overload matches call on BottomNavigation onChange
   */
  return (
    // @ts-ignore
    <BottomNavigation showLabels={showLabels} onChange={handleChange} value={value}>
      <BottomNavigationAction label="Home" value="btn1" icon={<Icon name="outlined-navigation-home" size="tiny" />} />
      <BottomNavigationAction label="Accept" value="btn2" icon={<Icon name="outlined-action-check" size="tiny" />} />
      <BottomNavigationAction label="Cancel" value="btn3" icon={<Icon name="outlined-action-cancel" size="tiny" />} />
    </BottomNavigation>
  );
};

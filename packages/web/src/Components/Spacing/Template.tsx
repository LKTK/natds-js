/* eslint-disable dot-notation */
import { Story } from "@storybook/react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import createStyles from "@material-ui/core/styles/createStyles";
import * as React from "react";
import { ISpacingProps } from "./Spacing.props";
import { IThemeWeb } from "../../Themes";
import Spacing from "./Spacing";

export const Template : Story<ISpacingProps> = (args) => {

  const useStyles = makeStyles(createStyles((theme: IThemeWeb) => ({
    inner: {
      backgroundColor: theme.palette && theme.palette.background ? theme.palette.background.paper : null,
      color: theme.palette && theme.palette.background ? theme.palette.background.paperContrastText : null,
      display: "flex",
    },
    root: {
      backgroundColor: "#FF00FF1A",
      display: "flex",
    },
    outer: {
      backgroundColor: "#FF00FF1A",
      display: "flex",
      width: "fit-content",
    },
  })), { name: "SpacingDemo" });

  const classes = useStyles();

  return <div className={classes["outer"]}>
    <Spacing className={classes["root"]} {...args}>
      <div className={classes["inner"]}>{args.children || "Spacing content"}</div>
    </Spacing>
  </div>;

};

export default Template;
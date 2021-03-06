import createStyles from "@material-ui/core/styles/createStyles";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { IThemeWeb } from "../../../Themes";

const style = ({ sizes }: IThemeWeb) => createStyles({
  root: {
    cursor: "pointer",
    height: sizes?.standard,
    position: "absolute",
    right: sizes?.small,
    top: sizes?.small,
    width: sizes?.standard,
    "&, & > svg": {
      fill: "inherit !important",
    },
  },
});

export const useStyles = makeStyles(style, { name: "NatDSPasswordReveal" });

export default useStyles;

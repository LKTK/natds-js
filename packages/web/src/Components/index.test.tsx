import * as library from "..";

const components : string[] = [
  "AppBar",
  "Avatar",
  "Badge",
  "BottomNavigation",
  "BottomNavigationAction",
  "Breadcrumbs",
  "Button",
  "ButtonGroup",
  "Card",
  "CardActionArea",
  "CardActions",
  "CardContent",
  "CardHeader",
  "CardMedia",
  "Checkbox",
  "Chip",
  "CircularProgress",
  "Collapse",
  "Container",
  "CssBaseline",
  "Dialog",
  "DialogActions",
  "DialogContent",
  "DialogContentText",
  "DialogTitle",
  "Divider",
  "Drawer",
  "DrawerBody",
  "DrawerFooter",
  "DrawerHeader",
  "DrawerMenu",
  "ExpansionPanel",
  "ExpansionPanelActions",
  "ExpansionPanelDetails",
  "ExpansionPanelSummary",
  "Fab",
  "FormControl",
  "FormHelperText",
  "GridContainer",
  "GridItem",
  "Icon",
  "IconButton",
  "Image",
  "InputLabel",
  "Intro",
  "LinearProgress",
  "Link",
  "List",
  "ListItem",
  "ListItemAvatar",
  "ListItemIcon",
  "ListItemSecondaryAction",
  "ListItemText",
  "ListSubheader",
  "Menu",
  "MenuItem",
  "MenuList",
  "Paper",
  "Popover",
  "Radio",
  "ScopedCssBaseline",
  "Skeleton",
  "Snackbar",
  "SnackbarContent",
  "Spacing",
  "Switch",
  "TabContainer",
  "TabItem",
  "Table",
  "TableBody",
  "TableContainer",
  "TableCell",
  "TableFooter",
  "TableHead",
  "TablePagination",
  "TableRow",
  "TableSortLabel",
  "Tag",
  "TextField",
  "ToggleButton",
  "Toolbar",
  "Tooltip",
  "Typography",
];

const brands = [
  "avon",
  "natura",
  "theBodyShop",
];

describe("Library", () => {
  describe("Theme Provider", () => {
    it("is exported", () => {
      expect(library.Provider).toBeDefined();
    });
  });
  // @ts-ignore
  describe.each(components)("%p component", (component: string) => {
    it("is exported", () => {
      expect(library).toHaveProperty(component);
    });
  });
  // @ts-ignore
  describe.each(brands)("Themes for brand %p", (brand) => {
    describe("when theme mode is dark", () => {
      it("should be exported", () => {
        expect(library.themes).toHaveProperty(brand);
        expect(library.themes).toHaveProperty(brand);
      });
    });
    describe("when theme mode is light", () => {
      it("should be exported", () => {
        expect(library.themes).toHaveProperty(brand);
        expect(library.themes).toHaveProperty(brand);
      });
    });
  });
});

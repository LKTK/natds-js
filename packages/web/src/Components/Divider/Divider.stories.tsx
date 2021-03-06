import { Meta, Story } from "@storybook/react";
import * as React from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { Divider } from "./Divider";
import { IDividerProps } from "./Divider.props";
import { variants } from "./__fixtures__/variants";
import { Container } from "../Container";
import { FluidWithSmMaxSize } from "../Container/Container.stories";
import { Spacing } from "../Spacing";
import { CaptionWithSecondaryText } from "../Typography/Typography.stories";
import { Typography } from "../Typography";
import { SemiXMarginY } from "../Spacing/Spacing.margin.stories";
import { SemiPaddingTop } from "../Spacing/Spacing.padding.stories";
import { ForFullWidthSubheader, ForInsetSubheader } from "../Spacing/Spacing.stories";

export default {
  component: Divider,
  title: "Components/Divider",
} as Meta;

const useStyles = makeStyles(createStyles({
  container: {
    borderColor: "#FF00FF1A",
    borderStyle: "solid",
    borderWidth: 1,
  },
}), { name: "DividerDemo" });

const Template : Story<IDividerProps> = (args: IDividerProps) => (
  <Container {...FluidWithSmMaxSize.args}>
    <Spacing className={useStyles().container} {...SemiXMarginY.args}>
      <Typography {...CaptionWithSecondaryText.args}>This is a content before divider</Typography>
      <Divider {...args} />
      <Typography {...CaptionWithSecondaryText.args}>This is a content after divider</Typography>
    </Spacing>
  </Container>
);

const TemplateForSubheader : Story<IDividerProps> = (args: IDividerProps) => (
  <Container {...FluidWithSmMaxSize.args}>
    <Spacing {...SemiPaddingTop.args} className={useStyles().container}>
      <Divider {...args} />
      <Spacing
        {...(args.variant === "inset" ? ForInsetSubheader.args : ForFullWidthSubheader.args)}>
        <Typography {...CaptionWithSecondaryText.args}>
          Subheader with {args.variant} variant
        </Typography>
      </Spacing>
    </Spacing>
  </Container>
);

export const Playground : Story<IDividerProps> = Template.bind({});
Playground.args = {
  variant: variants.fullWidth,
};

export const FullWidthVariant : Story<IDividerProps> = Template.bind({});
FullWidthVariant.args = {
  variant: variants.fullWidth,
};

export const InsetVariant : Story<IDividerProps> = Template.bind({});
InsetVariant.args = {
  variant: variants.inset,
};

export const MiddleVariant : Story<IDividerProps> = Template.bind({});
MiddleVariant.args = {
  variant: variants.middle,
};

export const FullWidthWithSubheaderExample : Story<IDividerProps> = TemplateForSubheader.bind({});
FullWidthWithSubheaderExample.args = {
  variant: variants.fullWidth,
};
FullWidthWithSubheaderExample.parameters = {
  docs: {
    description: {
      story: "Subheader is being applied with `Typography`.",
    },
  },
};

export const InsetWithSubheaderExample : Story<IDividerProps> = TemplateForSubheader.bind({});
InsetWithSubheaderExample.args = {
  variant: variants.inset,
};
InsetWithSubheaderExample.parameters = {
  docs: {
    description: {
      story: "Subheader is being applied with `Typography`.",
    },
  },
};

export const MiddleWithSubheaderExample : Story<IDividerProps> = TemplateForSubheader.bind({});
MiddleWithSubheaderExample.args = {
  variant: variants.middle,
};
MiddleWithSubheaderExample.parameters = {
  docs: {
    description: {
      story: "Subheader is being applied with `Typography`.",
    },
  },
};

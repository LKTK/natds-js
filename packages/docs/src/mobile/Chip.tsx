import * as React from 'react';
import { Chip, Provider, themes } from '@naturacosmeticos/natds-rn';
import withJest from '../decorators/jest';
import { text } from '@storybook/addon-knobs';

export default {
  title: 'Mobile|Chip',
  component: Chip,
  decorators: [withJest()],
  parameters: { jestImportPath: 'mobile', jest: ['Chip'] }
};

const { natura } = themes;

export const Default = () => (
    <Provider theme={natura}>
      <Chip
        mode='outlined'
        children={text('children', 'Native Chip')}
        onClose={() => undefined}
        onPress={() => undefined}
      />
    </Provider>
);

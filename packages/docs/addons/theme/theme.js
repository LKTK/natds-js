import React, { useEffect } from 'react';
import { AddonPanel } from '@storybook/components';
import { useAddonState } from "@storybook/api";
import { addons } from '@storybook/addons';

import { themes } from '@naturacosmeticos/natds-web';
import { PANEL_ID, CHANGE } from './shared';
import { STORY_CHANGED } from '@storybook/core-events';

import './styles.css';

const THEMES = Object.keys(themes);
const name = THEMES[0];

const DEFAULT_THEME = {
  name,
  type: Object.keys(themes[name])[0]
};

export default function Theme(props) {
  const { channel, active, api: { setQueryParams }} = props;
  const [currentTheme, changeTheme] = useAddonState(PANEL_ID, DEFAULT_THEME);

  const handleChange = (params) => {
    changeTheme(params);
    channel.emit(CHANGE, params);
  };

  useEffect(() => {
    channel.on(STORY_CHANGED, () => {
      changeTheme(DEFAULT_THEME);
    });

    return () => (channel.removeListener(STORY_CHANGED))
  }, []);

  if (!active) return null;

  return (
    <div className="theme">
      {THEMES.map(renderButtons, { handleChange, currentTheme })}
    </div>
  );
}

function renderButtons(name) {
  const { currentTheme, handleChange } = this;
  const selectedTheme = name === currentTheme.name;
  const variants = Object.keys(themes[name]);

  return (
    <div className="theme__item" key={name}>
      <h6 className="theme__name">{name}</h6>
      {variants.map((type, key) => {
        const selected = selectedTheme && type === currentTheme.type;
        const selectedClass = selected ? ' theme__button--selected' : '';
        const buttonClass = `theme__button${selectedClass}`;

        return (
          <button
            key={key}
            className={buttonClass}
            onClick={() => handleChange({ name, type })}>
            {type}
          </button>
        )
      })}
    </div>
  );
}
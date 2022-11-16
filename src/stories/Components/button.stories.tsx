import React from 'react';
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Button from "../../components/button";

export default {
  title: 'Components/Buttons',
  component: Button,
  argTypes: {
    label: {
      name: 'label',
      type: { name: 'string', required: true },
      defaultValue: 'Example',
      description: 'Label displayed on button',
      control: {
        type: 'text',
      }
    },
  },
} as ComponentMeta<typeof Button>;

export const Customizable: ComponentStory<typeof Button> = (args) => <Button {...args} />;

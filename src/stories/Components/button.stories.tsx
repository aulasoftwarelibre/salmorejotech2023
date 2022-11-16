import React from 'react';
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Button from "../../components/button";

export default {
  title: 'Components/Buttons',
  component: Button,
} as ComponentMeta<typeof Button>;

export const Entradas: ComponentStory<typeof Button> = () => <Button label="ENTRADAS" />;
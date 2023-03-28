import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Schedule } from '../../components/schedule/index';

export default {
  title: "Components/schedule",
  component: Schedule,
} as ComponentMeta<typeof Schedule>;

export const horario: ComponentStory<typeof Schedule> = () => (
  <Schedule />
);

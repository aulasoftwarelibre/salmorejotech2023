import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { BreakLine } from "../../components/schedule/breakLine";

export default {
  title: "Components/Schedule",
  component: BreakLine,
  argTypes: {
    title: {
      name: "title",
      type: { name: "string", required: true },
      defaultValue: "Pausa para el café",
      description: "Title displayed on breakLine",
      control: {
        type: "text",
      },
    },
    date: {
      name: "date",
      type: { name: "string", required: true },
      defaultValue: "00:00 00:00",
      description: "date displayed on breakLine",
      control: {
        type: "text",
      },
    },
  },
} as ComponentMeta<typeof BreakLine>;

export const BreakLine_Primary: ComponentStory<typeof BreakLine> = (args) => (
  <BreakLine {...args} />
);

import { ComponentMeta, ComponentStory } from "@storybook/react";
import { EntradasButton } from "../../components/entradasButton";

export default {
  title: 'Components/Buttons',
  component: EntradasButton,
} as ComponentMeta<typeof EntradasButton>;

export const Entradas: ComponentStory<typeof EntradasButton> = () => <EntradasButton />;
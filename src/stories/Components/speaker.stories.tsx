import React from 'react';
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { SpeakerCard } from '../../components/speakers';
export default {
  title: 'Components/Speaker',
  component: SpeakerCard,
  argTypes: {
    name: {
      type: { name: 'string', required: true },
      defaultValue: 'Jane Doe',
      description: 'Nombre del ponente',
      control: {
        type: 'text',
      }
    },
    bio: {
      type: { name: 'string', required: true },
      defaultValue: 'CEO of Doe SL',
      description: 'Descripción del ponente',
      control: {
        type: 'text',
      }
    },
    urlPhoto: {
      type: { name: 'string', required: true },
      defaultValue: '/speakers/primary-placeholder.png',
      description: 'Imagen del ponente',
      control: {
        type: 'select',
        options: ['/speakers/primary-placeholder.png', '/speakers/secondary-placeholder.png']
      }
    },
  },
} as ComponentMeta<typeof SpeakerCard>;

export const Button_Primary: ComponentStory<typeof SpeakerCard> = (args) => <SpeakerCard {...args} />;

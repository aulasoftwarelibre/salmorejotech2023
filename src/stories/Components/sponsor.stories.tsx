import React from 'react';
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Sponsor } from '../../components/sponsors';

export default {
  title: 'Components/Sponsor',
  component: Sponsor,
  argTypes: {
    name: {
      type: { name: 'string', required: true },
      defaultValue: 'ASL',
      description: 'Nombre del sponsor (usado para la aria-label)',
      control: {
        type: 'text',
      }
    },
    type: {
      type: { name: 'string', required: true },
      defaultValue: 'PERA',
      description: 'Tipo del sponsor (Usado para ordenarlos dentro del grid y para la aria-label)',
      control: {
        type: 'select',
        options: ['PERA', 'CHERRY']
      }
    },
    imageUrl: {
      type: { name: 'string', required: true },
      defaultValue: '/sponsors/example.svg',
      description: 'url al logo del sponsor',
      control: {
        type: 'select',
        options: ['/sponsors/example.svg'],
      }
    },
    href: {
      type: { name: 'string', required: true },
      defaultValue: '/',
      description: 'link hacia la web del sponsor',
      control: {
        type: 'text',
      }
    },
  },
} as ComponentMeta<typeof Sponsor>;

export const SponsorStory: ComponentStory<typeof Sponsor> = (args) => <Sponsor {...args} />;

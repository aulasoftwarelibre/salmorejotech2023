import React from 'react';
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Contact, SpeakerCard } from '../../components/speakers';
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
    includeContacts: {
      name: 'contacts',
      type: { required: true },
      defaultValue: ['TWITTER'],
      description: 'Imagen del ponente',
      control: {
        type: 'multi-select',
        options: ['TWITTER', 'GITHUB', 'WEB', 'LINKEDIN']
      }
    },
  },
} as ComponentMeta<typeof SpeakerCard>;

export const SpeakerCardExample: ComponentStory<typeof SpeakerCard> = (args) => {
  const possibleLinks: Contact[] = [
    {type: 'TWITTER', link: 'https://twitter.com'} as Contact,
    {type: 'GITHUB', link: 'https://github.com'} as Contact,
    {type: 'WEB', link: 'https://google.com'} as Contact,
    {type: 'LINKEDIN', link: 'https://linkedin.com'} as Contact
  ].filter(link => (args as unknown as {includeContacts: string[]}).includeContacts.includes(link.type));

  const {contacts, ...rest} = args;

  return <SpeakerCard contacts={possibleLinks} {...rest} />

};

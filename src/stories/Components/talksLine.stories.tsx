import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { TalksLine } from "../../components/schedule/talksLine";

export default {
  title: "Components/Schedule",
  component: TalksLine,
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
    startsAt: {
      name: "startsAt",
      type: { name: "string", required: true },
      defaultValue: "00:00",
      description: "date of start displayed on breakLine",
      control: {
        type: "text",
      },
    },
    endsAt: {
      name: "endsAt",
      type: { name: "string", required: true },
      defaultValue: "00:00",
      description: "date of end displayed on breakLine",
      control: {
        type: "text",
      },
    },
  },
} as ComponentMeta<typeof TalksLine>;

type Talk = {
  id: string;
  title: string;
  info: string;
  startsAt: string;
  endsAt: string;
  labels: Array<string>;
  track: number;
  speaker: SpeakerInfo;
};

type SpeakerInfo = {
  imageUrl: string;
  name: string;
};

type TalksLineProps = {
  talk1: Talk;
  talk2?: Talk;
};


const SpeakerInfo1: SpeakerInfo = {
  imageUrl: 'https://pbs.twimg.com/profile_images/1352946531628969984/NNfdBgII_400x400.jpg',
  name: 'juanjo'
};

const Talk1: Talk = {
  id: '6e5436',
  title: 'charla1',
  info: 'no se que se pone aqui',
  startsAt: '00:00',
  endsAt: '00:00',
  labels: ['front', 'ux'],
  track: 0,
  speaker: SpeakerInfo1
};

const Talks: TalksLineProps = {
  talk1: Talk1,
  talk2: Talk1
};


export const TalksLine_Primary: ComponentStory<typeof TalksLine> = (args) => (
  <TalksLine {...Talks} />
);

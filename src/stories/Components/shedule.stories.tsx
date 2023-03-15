import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Schedule } from '../../components/schedule/index';
import { TalkInterface, TalksLinePropsInterface, SpeakerInfoInterface } from '../../interfaces/schedule.interfaces';

const SpeakerInfo1: SpeakerInfoInterface = {
  imageUrl: 'https://pbs.twimg.com/profile_images/1352946531628969984/NNfdBgII_400x400.jpg',
  name: 'Juanjo'
};

const SpeakerInfo2: SpeakerInfoInterface = {
  imageUrl: 'https://pbs.twimg.com/profile_images/1428402345910706181/6v9LHnxJ_400x400.jpg',
  name: 'Tomas'
};

const Talk1: TalkInterface = {
  id: '6e5436',
  title: ' Charla de prueba sobre front',
  info: 'no se que se pone aqui',
  startsAt: '13:00',
  endsAt: '13:45',
  labels: ['front', 'devops'],
  track: 0,
  speaker: SpeakerInfo1,
  isBreak: false,
};

const Talk2: TalkInterface = {
  id: '6e5436',
  title: ' Charla de prueba sobre back',
  info: 'no se que se pone aqui',
  startsAt: '00:00',
  endsAt: '00:00',
  labels: ['front', 'ux'],
  track: 0,
  speaker: SpeakerInfo2,
  isBreak:true
};

const talks: TalkInterface[]=[
  Talk1,
  Talk2,
  Talk2,
  Talk1,
  Talk2
];

export default {
  title: "Components/schedule",
  component: Schedule,
  argTypes: {
    talks
  },
} as ComponentMeta<typeof Schedule>;

export const horario: ComponentStory<typeof Schedule> = (talks) => (
  <Schedule {...talks} />
);

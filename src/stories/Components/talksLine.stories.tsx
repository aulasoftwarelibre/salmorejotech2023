import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { TalksLine } from "../../components/schedule/talksLine";
import { Talk } from "../../interfaces/Talk.interface";

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
} as ComponentMeta<typeof TalksLine>;


let Talk1: Talk = {
  id: '6e5436',
  title: 'charla1',
  info: 'no se que se pone aqui',
  date: '00:00 00:00',
  labels: ['front', 'ux'],
  isBreak: false,
  track: 0,
  //Speaker info
  imageUrl: 'https://pbs.twimg.com/profile_images/1352946531628969984/NNfdBgII_400x400.jpg',
  name: "Juanjo"
}


export const TalksLine_Primary: ComponentStory<typeof TalksLine> = (args) => (
  <TalksLine id= {'6e5436'}
    title= {'charla1'}
    info= {'no se que se pone aqui'}
    date= {'00:00 00:00'}
    labels= {['front', 'ux']}
    isBreak= {false}
    track= {0}
    //Speaker info
    imageUrl= {'https://pbs.twimg.com/profile_images/1352946531628969984/NNfdBgII_400x400.jpg'}
    name= {"Juanjo"}
  />
);

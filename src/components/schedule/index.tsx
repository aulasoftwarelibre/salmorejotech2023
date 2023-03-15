import { TalkInterface } from "../../interfaces/schedule.interfaces";
import { Talk } from "./talk";
import { BreakLine } from './breakLine/index';

export const Schedule = (talks: TalkInterface[]) => {
  talks.map((talk, index) => {
    return (
      <>
        <Talk {...talk} key={index} />
        {talk.isBreak && <BreakLine {...talk} key={index} />}
      </>
    );
  });
};
import { Break } from "../../contexts/break/domain/Break";
import { GetAllScheduleLines } from "../../contexts/schedule-line/application/GetAllScheduleLines";
import { ScheduleLine } from "../../contexts/schedule-line/domain/ScheduleLine";
import { ScheduleLineTypeEnum } from "../../contexts/schedule-line/domain/ScheduleLineType";
import { Talk as TalkEntity } from "../../contexts/talk/domain/Talk";
import { DualTalkLine, SingleTalkLine, BreakLine } from "./scheduleLine";

import styles from './index.module.css';

export const Schedule = () => {
  const scheduleLines = new GetAllScheduleLines().execute();

  const renderScheduleLine = (line: ScheduleLine) => {
    switch(line.type) {
      case ScheduleLineTypeEnum.Break:
        return renderBreakLine(line.break);
      case ScheduleLineTypeEnum.SingleTalk:
        return renderSingleTalkLine(line.talk);
      case ScheduleLineTypeEnum.DualTalk:
        return renderDualTalkLine(line.talks);
    }
  }

  const renderBreakLine = (_break: Break) => {
    return (
      <BreakLine
        title={_break.title} 
        timestamp={_break.timestamp} 
      />
    )
  }
  const renderSingleTalkLine = (talk: TalkEntity) => {
    return (
      <SingleTalkLine mask={'mask1'} {...talk.toPrimitives()} />
    )
  }
  const renderDualTalkLine = ({primary, secondary}: {primary: TalkEntity, secondary: TalkEntity}) => {
    return (
      <DualTalkLine
        primaryTalk={{mask:'mask1', ...primary.toPrimitives()}} 
        secondaryTalk={{mask:'mask1', ...secondary.toPrimitives()}} 
      />
    )
  }

  return (
    <div className={styles.schedule}>
      {scheduleLines.map(line => renderScheduleLine(line))}
    </div>
  )
};
import { Break } from "../../contexts/break/domain/Break";
import { GetAllScheduleLines } from "../../contexts/schedule-line/application/GetAllScheduleLines";
import { ScheduleLine } from "../../contexts/schedule-line/domain/ScheduleLine";
import { ScheduleLineTypeEnum } from "../../contexts/schedule-line/domain/ScheduleLineType";
import { Talk as TalkEntity } from "../../contexts/talk/domain/Talk";
import { DualTalkLine, SingleTalkLine, BreakLine } from "./components/ScheduleLine";
import { Timestamp } from "../../contexts/shared/domain/Timestamp";

import styles from './styles/index.module.css';

export const Schedule = () => {
  const scheduleLines = new GetAllScheduleLines().execute();

  const renderScheduleLine = (line: ScheduleLine) => {
    switch(line.type.value) {
      case ScheduleLineTypeEnum.Break:
        return renderBreakLine(line.break);
      case ScheduleLineTypeEnum.SingleTalk:
        return renderSingleTalkLine(line.talk);
      case ScheduleLineTypeEnum.DualTalk:
        return renderDualTalkLine({timestamp: line.timestamp, ...line.talks});
    }
  }

  const renderBreakLine = (_break: Break) => {
    return (
      <BreakLine
        title={_break.title} 
        timestamp={_break.timestamp}
        key={`Break-${_break.title}`}
      />
    )
  }
  const renderSingleTalkLine = (talk: TalkEntity) => {
    return (
        <SingleTalkLine
          key={`Single-Talk-Line:${talk.title}`}
          mask={'mask1'} 
          {...talk.toPrimitives()} 
        />
    )
  }
  const renderDualTalkLine = ({timestamp, primary, secondary}: {timestamp: Timestamp, primary: TalkEntity, secondary: TalkEntity}) => {
    return (
      <DualTalkLine
        key={`Dual-Talk-Line:"${primary.title}" & "${secondary.title}"`}
        timestamp={timestamp}
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
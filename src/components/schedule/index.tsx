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
  
  const renderScheduleLine = (line: ScheduleLine, index: number) => {

    switch(line.type.value) {
      case ScheduleLineTypeEnum.Break:
        return renderBreakLine(line.break);
      case ScheduleLineTypeEnum.SingleTalk:
        const mask = `mask${1 + (index % 4)}`;
        return renderSingleTalkLine({talk: line.talk, mask});
      case ScheduleLineTypeEnum.DualTalk:
        const primaryMask = `mask${1 + (index % 2)}`;
        const secondaryMask = `mask${3 + (index % 2)}`;
        return renderDualTalkLine({timestamp: line.timestamp, masks: {primaryMask, secondaryMask}, ...line.talks});
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

  const renderSingleTalkLine = ({talk, mask}: {talk: TalkEntity, mask: string}) => {
    return (
        <SingleTalkLine
          key={`Single-Talk-Line:${talk.title}`}
          talk={{mask, ...talk.toPrimitives()}}
        />
    )
  }

  const renderDualTalkLine = ({timestamp, masks, primary, secondary}: {timestamp: Timestamp, masks: {primaryMask: string, secondaryMask: string}, primary: TalkEntity, secondary: TalkEntity}) => {
    return (
      <DualTalkLine
        key={`Dual-Talk-Line:"${primary.title}" & "${secondary.title}"`}
        timestamp={timestamp}
        primaryTalk={{mask: masks.primaryMask, ...primary.toPrimitives()}}
        secondaryTalk={{mask: masks.secondaryMask, ...secondary.toPrimitives()}}
      />
    )
  }

  return (
    <div className={styles.schedule}>
      {scheduleLines.map((line, index) => renderScheduleLine(line, index))}
    </div>
  )
};
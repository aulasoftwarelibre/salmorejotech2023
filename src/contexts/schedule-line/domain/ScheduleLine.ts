import { Break } from "../../break/domain/Break";
import { Talk } from "../../talk/domain/Talk";
import { TalkTrackEnum } from "../../talk/domain/TalkTrack";
import { InvalidScheduleLineError } from "./errors/InvalidScheduleLineError";
import { InvalidScheduleLineUsageError } from "./errors/InvalidScheduleLineUsageError";
import { ScheduleLineType, ScheduleLineTypeEnum } from "./ScheduleLineType";

export interface ScheduleLineParams {
  type: ScheduleLineType,
  talk?: Talk,
  talks?: Talk[],
  break?: Break;
}

export interface SingleTalkLineParams {
  talk: Talk;
}

export interface DualTalkLineParams {
  primaryTalk: Talk;
  secondaryTalk: Talk;
}

export interface BreakLineParams {
  break: Break;
}

export class ScheduleLine {
  private readonly _type: ScheduleLineType;
  private readonly _talks: Talk[] = new Array<Talk>();
  private readonly _break: Break | undefined;

  // In this constructor we trust what comes from static factory methods!
  private constructor(args: ScheduleLineParams) {
    this._type = args.type;
    this._talks = args.talk ? [args.talk] : [...args.talks || []]
    this._break = args.break;
  }

  public static createSingleTalkLine(args: SingleTalkLineParams): ScheduleLine {
    if(args.talk.track !== TalkTrackEnum.Unique) {
      throw InvalidScheduleLineError.causeSingleLineMustHaveUniqueTrackTalk();
    }
    return new ScheduleLine({
      type: new ScheduleLineType(ScheduleLineTypeEnum.SingleTalk),
      talk: args.talk,
    })
  }

  public static createDualTalkLine(args: DualTalkLineParams): ScheduleLine {
    
    const { primaryTalk, secondaryTalk } = args;

    if(primaryTalk.track !== TalkTrackEnum.Primary || secondaryTalk.track !== TalkTrackEnum.Secondary) {
      throw InvalidScheduleLineError.causeDualLineMustHavePrimaryAndSecondaryTrackTalks();
    }

    return new ScheduleLine({
      type: new ScheduleLineType(ScheduleLineTypeEnum.DualTalk),
      talks: [primaryTalk, secondaryTalk] 
    })
  }
  
  public static createBreakLine(args: BreakLineParams): ScheduleLine {
    return new ScheduleLine({
      type: new ScheduleLineType(ScheduleLineTypeEnum.Break),
      break: args.break
    })
  }

  get type(): ScheduleLineTypeEnum {
    return this._type.value;
  }

  get talk(): Talk {
    if(this.type !== ScheduleLineTypeEnum.SingleTalk) {
      throw InvalidScheduleLineUsageError.causeOnlySingleTalkLinesHaveAccessToTalkProperty()
    }
    return this._talks[0] as Talk;
  }

  get talks(): {primary: Talk, secondary: Talk}{
    if(this.type !== ScheduleLineTypeEnum.DualTalk) {
      throw InvalidScheduleLineUsageError.causeOnlyDualTalkLinesHaveAccessToTalksProperty()
    }

    if(this._talks[0].track === TalkTrackEnum.Primary) {
      return { primary: this._talks[0], secondary: this._talks[1] }
    }

    return { primary: this._talks[1], secondary: this._talks[0] }
  }

  get break(): Break {
    if(this.type !== ScheduleLineTypeEnum.Break) {
      throw InvalidScheduleLineUsageError.causeBreakLinesHaveAccessToBreakProperty()
    }

    return this._break as Break;
  }
}

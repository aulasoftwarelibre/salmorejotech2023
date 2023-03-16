import { InvalidScheduleLineTypeError } from "./errors/InvalidScheduleLineTypeError";

export const enum ScheduleLineTypeEnum {
  Break = 0,
  SingleTalk = 1,
  DualTalk = 2,
}

export class ScheduleLineType {
  constructor(public readonly value: ScheduleLineTypeEnum) {  }

  public static of(val: number) {
    switch(val) {
      case 1:
        return new ScheduleLineType(ScheduleLineTypeEnum.SingleTalk);
      case 2:
        return new ScheduleLineType(ScheduleLineTypeEnum.DualTalk);
      case 0:
        return new ScheduleLineType(ScheduleLineTypeEnum.Break);
      default:
        throw InvalidScheduleLineTypeError.causeTypeIsNotRegistered(val);
    }
  }

  public equals(value: ScheduleLineTypeEnum) {
    return this.value === value;
  }
}
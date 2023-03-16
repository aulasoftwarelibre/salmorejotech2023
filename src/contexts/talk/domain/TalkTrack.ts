import { InvalidTalkTrackError } from "./errors/InvalidTalkTrackError";

export const enum TalkTrackEnum {
  Unique = 0, 
  Primary = 1,
  Secondary = 2,
}

export class TalkTrack {
  private constructor(public readonly value: TalkTrackEnum) {  }

  public static of(val: number) {
    switch(val) {
      case 1:
        return new TalkTrack(TalkTrackEnum.Primary);
      case 2:
        return new TalkTrack(TalkTrackEnum.Secondary);
      case 0:
        return new TalkTrack(TalkTrackEnum.Unique);
      default:
        throw InvalidTalkTrackError.causeTrackIsNotRegistered(val);
    }
  }

  public equals(val: TalkTrackEnum) {
    return this.value === val;
  }
}
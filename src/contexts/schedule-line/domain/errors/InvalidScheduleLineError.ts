export class InvalidScheduleLineError extends Error {
  public static causeSingleLineMustHaveUniqueTrackTalk() {
    return new InvalidScheduleLineError("Trying to initialize a single talk schedule line with a talk that's not unique!");
  }
  public static causeDualLineMustHavePrimaryAndSecondaryTrackTalks() {
    return new InvalidScheduleLineError("Trying to initialize a dual talk schedule line without primary and secondary talk setted up!");
  }
  public static causeDualLineMustHaveCommonTimestamp() {
    return new InvalidScheduleLineError("Trying to initialize a dual talk schedule line without a common timestamp!");
  }
}
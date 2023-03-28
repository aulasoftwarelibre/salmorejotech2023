export class InvalidScheduleLineUsageError extends Error {
  public static causeOnlySingleTalkLinesHaveAccessToTalkProperty() {
    return new InvalidScheduleLineUsageError('Trying to access property .talk on a non single talk schedule line!');
  }
  public static causeOnlyDualTalkLinesHaveAccessToTalksProperty() {
    return new InvalidScheduleLineUsageError('Trying to access property .talks on a non dual talk schedule line!');
  }
  public static causeBreakLinesHaveAccessToBreakProperty() {
    return new InvalidScheduleLineUsageError('Trying to access property .break on a non break schedule line!');
  }
}
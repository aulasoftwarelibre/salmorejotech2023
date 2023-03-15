export class InvalidScheduleLineTypeError extends Error {
  public static causeTypeIsNotRegistered(type: number): InvalidScheduleLineTypeError {
    return new InvalidScheduleLineTypeError(`Selected Shedule Line Type ${type} does not exist`);
  }
}
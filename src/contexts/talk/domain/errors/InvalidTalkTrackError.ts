export class InvalidTalkTrackError extends Error {
  public static causeTrackIsNotRegistered(track: number): InvalidTalkTrackError {
    return new InvalidTalkTrackError(`Selected track ${track} does not exist`);
  }
}
export class InvalidTalkLabelError extends Error {
  public static causeLabelIsNotRegistered(label: string): InvalidTalkLabelError {
    return new InvalidTalkLabelError(`the label ${label} is not a registered label`);
  }
}
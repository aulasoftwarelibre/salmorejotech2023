export interface SpeakerInfoAsPrimitives {
  imageUrl: string,
  name: string,
}

export class SpeakerInfo {
  public readonly imageUrl: string;
  public readonly name: string;
  constructor(args: SpeakerInfoAsPrimitives) {
    this.name = args.name;
    this.imageUrl = args.imageUrl;
  }
}
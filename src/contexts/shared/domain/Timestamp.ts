export interface TimestampAsPrimitives {
  startsAt: string,
  endsAt: string,
}

export class Timestamp {
  public readonly startsAt: string;
  public readonly endsAt: string;
  constructor(args: TimestampAsPrimitives) {
    this.startsAt = args.startsAt;
    this.endsAt = args.endsAt;
  }

  public toPrimitives(): TimestampAsPrimitives {
    return {
      startsAt: this.startsAt,
      endsAt: this.endsAt,
    }
  }
}
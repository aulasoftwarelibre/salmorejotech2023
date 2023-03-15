import { Timestamp, TimestampAsPrimitives } from "../../shared/domain/Timestamp";

export interface BreakAsPrimitives {
  title: string;
  timestamp: TimestampAsPrimitives;
}

export class Break {
  public readonly title: string;
  private readonly _timestamp: Timestamp;
  constructor(args: BreakAsPrimitives) {
    this.title = args.title;
    this._timestamp = new Timestamp(args.timestamp);
  }

  get timestamp(): TimestampAsPrimitives {
    return this._timestamp.toPrimitives();
  }
}
import { Timestamp, TimestampAsPrimitives } from "../../shared/domain/Timestamp";

export interface BreakAsPrimitives {
  title: string;
  timestamp: TimestampAsPrimitives;
}

export interface BreakParams {
  title: string;
  timestamp: Timestamp;
}

export class Break {
  public readonly title: string;
  public readonly timestamp: Timestamp;
  constructor(args: BreakParams) {
    this.title = args.title;
    this.timestamp = args.timestamp;
  }
}

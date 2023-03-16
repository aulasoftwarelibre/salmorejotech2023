import { Timestamp, TimestampAsPrimitives } from "../../shared/domain/Timestamp";
import { SpeakerInfo, SpeakerInfoAsPrimitives } from "./SpeakerInfo";
import { LabelAsPrimitives, TalkLabel } from "./TalkLabel";
import { TalkTrack, TalkTrackEnum } from "./TalkTrack";

export interface TalkAsPrimitives {
  title: string;
  info: string;
  timestamp: TimestampAsPrimitives;
  labels: LabelAsPrimitives[];
  track: number;
  speakerInfo: SpeakerInfoAsPrimitives;
}

export interface TalkParams {
  title: string;
  info: string;
  timestamp: TimestampAsPrimitives;
  labels: string[];
  track: number;
  speakerInfo: SpeakerInfoAsPrimitives;
}

export interface CreateTalkParams {
  title: string;
  info: string;
  timestamp: TimestampAsPrimitives;
  labels: string[];
  speakerInfo: SpeakerInfoAsPrimitives;
}

export class Talk {
  public readonly title: string;
  public readonly info: string;
  public readonly timestamp: Timestamp;
  public readonly labels: Array<TalkLabel>;
  public readonly track: TalkTrack;
  public readonly speakerInfo: SpeakerInfo;

  private constructor(args: TalkParams) {
    this.title = args.title;
    this.info = args.info;
    this.timestamp = new Timestamp(args.timestamp);
    this.labels = args.labels.map(label => new TalkLabel(label));
    this.track = TalkTrack.of(args.track);
    this.speakerInfo = new SpeakerInfo(args.speakerInfo)
  }

  public static createUniqueTalk(args: CreateTalkParams) {
    return new Talk({track: TalkTrackEnum.Unique,...args})
  }

  public static createPrimaryTalk(args: CreateTalkParams) {
    return new Talk({track: TalkTrackEnum.Primary,...args})
  }

  public static createSecondaryTalk(args: CreateTalkParams) {
    return new Talk({track: TalkTrackEnum.Secondary,...args})
  }

  public toPrimitives(): TalkAsPrimitives {
    return {
      title: this.title,
      info: this.info,
      timestamp: this.timestamp,
      labels: this.labels.map(label => label.toPrimitives()),
      track: this.track.value,
      speakerInfo: this.speakerInfo,
    }
  }

}
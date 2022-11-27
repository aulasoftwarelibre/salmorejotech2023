export interface TalkInterface {
  id: string;
  title: string;
  info: string;
  startsAt: string;
  endsAt: string;
  labels: Array<string>;
  isBreak: boolean;
  track: number;
  speaker: SpeakerInfoInterface;
}

export interface SpeakerInfoInterface {
  imageUrl: string;
  name: string;
}

export interface TalksLinePropsInterface {
  talk1: TalkInterface;
  talk2?: TalkInterface;
}

export interface BreakLinePropsInterface {
  title: string;
  startsAt: string;
  endsAt: string;
}

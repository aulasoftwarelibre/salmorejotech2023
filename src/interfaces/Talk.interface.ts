export interface Talk {
  id: string;
  title: string;
  info: string;
  date: string;
  labels: Array<string>;
  isBreak: boolean;
  track: number;
  //Speaker info
  imageUrl: string;
  name: string;
}

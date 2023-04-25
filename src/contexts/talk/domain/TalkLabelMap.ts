import { LabelAsPrimitives } from "./TalkLabel";

const enum LabelColor {
  Purple = "#b51963",
  Yellow = "#FFEA00",
  Lime = "#00bf7d",
  Mint = "#00b4c5",
  Blue = "#0073e6",
  LightBlue = '#6495ED',
  Pink = "#f194b8",
  Black = "#000000",
  White = "#ffffff"
} 

export const TalkLabelMap = new Map<string, LabelAsPrimitives>([
  ['QA', {text: 'QA', textColor: LabelColor.Black, color: LabelColor.Lime}],
  ['Backend', {text: 'Backend', textColor: LabelColor.White, color: LabelColor.Purple}],
  ['Frontend', {text: 'Frontend', textColor: LabelColor.White, color: LabelColor.Blue}],
  ['Cyber', {text: 'Ciberseguridad', textColor: LabelColor.Black, color: LabelColor.Mint}],
  ['IA', {text: 'IA', textColor: LabelColor.Black, color: LabelColor.Pink}],
  ['Career', {text: 'Dev Career', textColor: LabelColor.Black, color: LabelColor.White}],
  ['Data', {text: 'Data', textColor: LabelColor.Black, color: LabelColor.Yellow}],
  ['DevOps', {text: 'DevOps', textColor: LabelColor.Black, color: LabelColor.LightBlue}],
])

import { LabelAsPrimitives } from "./TalkLabel";

const enum LabelColor {
  Purple = "#b51963",
  Yellow = "#2a5547",
  Lime = "#00bf7d",
  Mint = "#00b4c5",
  Blue = "#0073e6",
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
  ['General', {text: 'General', textColor: LabelColor.Black, color: LabelColor.White}],
])

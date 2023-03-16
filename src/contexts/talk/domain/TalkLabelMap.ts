import { LabelAsPrimitives } from "./TalkLabel";

const enum LabelColor {
  Red = "#DD3F4E",
  Yellow = "#FAD000",
  Lime = "#7ECC49",
  Mint = "#6ACCBC",
  Blue = "#14AAF5",
  Lavender = "#EB96EB"

} 

export const TalkLabelMap = new Map<string, LabelAsPrimitives>([
  ['QA', {text: 'QA', color: LabelColor.Lime}],
  ['Backend', {text: 'Backend', color: LabelColor.Blue}],
  ['Frontend', {text: 'Frontend', color: LabelColor.Red}],
  ['PM', {text: 'Project Management', color: LabelColor.Mint}],
  ['Infra', {text: 'Infrastructure', color: LabelColor.Yellow}]
])
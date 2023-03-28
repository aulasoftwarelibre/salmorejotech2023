import { LabelAsPrimitives } from "./TalkLabel";

const enum LabelColor {
  Purple = "#cc00ff",
  Yellow = "#FAD000",
  Lime = "#1fb800",
  Mint = "#6ACCBC",
  Blue = "#14AAF5",
  Lavender = "#EB96EB"

} 

export const TalkLabelMap = new Map<string, LabelAsPrimitives>([
  ['QA', {text: 'QA', color: LabelColor.Lime}],
  ['Backend', {text: 'Backend', color: LabelColor.Purple}],
  ['Frontend', {text: 'Frontend', color: LabelColor.Blue}],
  ['PM', {text: 'Project Management', color: LabelColor.Mint}],
  ['Infra', {text: 'Infrastructure', color: LabelColor.Yellow}]
])

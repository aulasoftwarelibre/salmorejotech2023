import { InvalidTalkLabelError } from "./errors/InvalidTalkLabelError";
import { TalkLabelMap } from "./TalkLabelMap";

export interface LabelAsPrimitives {
  text: string,
  textColor: string,
  color: string,
}

export class TalkLabel {
  public readonly text: string;
  public readonly textColor: string;
  public readonly color: string;
  constructor(label: string) {
    const thisLabel = TalkLabelMap.get(label)
    if(!thisLabel) {
      throw InvalidTalkLabelError.causeLabelIsNotRegistered(label);
    }
    this.text = thisLabel.text;
    this.textColor = thisLabel.textColor;
    this.color = thisLabel.color;
  }

  public toPrimitives(): LabelAsPrimitives {
    return {
      text: this.text,
      textColor: this.textColor,
      color: this.color,
    }
  }
}
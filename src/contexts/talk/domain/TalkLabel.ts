import { InvalidTalkLabelError } from "./errors/InvalidTalkLabelError";
import { TalkLabelMap } from "./TalkLabelMap";

export interface LabelAsPrimitives {
  text: string,
  color: string,
}

export class TalkLabel {
  public readonly text: string;
  public readonly color: string;
  constructor(label: string) {
    const thisLabel = TalkLabelMap.get(label)
    if(!thisLabel) {
      throw InvalidTalkLabelError.causeLabelIsNotRegistered(label);
    }
    this.text = thisLabel.text;
    this.color = thisLabel.color;
  }

  public toPrimitives(): LabelAsPrimitives {
    return {
      text: this.text,
      color: this.color,
    }
  }
}
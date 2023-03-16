import data from '../../../../data/schedule.json'
import { Break } from '../../break/domain/Break';
import { Talk } from '../../talk/domain/Talk';
import { ScheduleLine } from '../domain/ScheduleLine';
import { ScheduleLineRepository } from '../domain/ScheduleLineRepository';
import { ScheduleLineType, ScheduleLineTypeEnum } from '../domain/ScheduleLineType';


export class JsonScheduleLineRepository implements ScheduleLineRepository {
  public getAll(): ScheduleLine[] {
    return data.map(document => this.parseDocument(document))
  }

  private parseDocument(document: any) {
    const lineType = ScheduleLineType.of(document.type);
  
    switch(lineType.value) {
      case ScheduleLineTypeEnum.Break:
        const breakPrimitives = document.break;
        const _break = new Break(breakPrimitives);

        return ScheduleLine.createBreakLine({ break: _break }); 

      case ScheduleLineTypeEnum.SingleTalk:
        const talkPrimitives = this.parseTalkDocument(document.talk);
        const talk = Talk.createUniqueTalk(talkPrimitives)

        return ScheduleLine.createSingleTalkLine({ talk });
      
      case ScheduleLineTypeEnum.DualTalk:
        const primaryTalkPrimitives = this.parseTalkDocument(document.primaryTalk);
        const primaryTalk = Talk.createPrimaryTalk(primaryTalkPrimitives);
        const secondaryTalkPrimitives = this.parseTalkDocument(document.secondaryTalk);
        const secondaryTalk = Talk.createSecondaryTalk(secondaryTalkPrimitives);

        return ScheduleLine.createDualTalkLine({ timestamp: primaryTalk.timestamp ,primaryTalk, secondaryTalk })
    }
  }

  private parseTalkDocument(talkDocument: any) {
    return {
      title: talkDocument.title,
      info: talkDocument.info,
      timestamp: {
        startsAt: talkDocument.timestamp.startsAt,
        endsAt: talkDocument.timestamp.endsAt,
      },
      labels: talkDocument.labels,
      speakerInfo: {
        name: talkDocument.speaker.name, 
        imageUrl: talkDocument.speaker.imageUrl, 
      }
    }
  }

}

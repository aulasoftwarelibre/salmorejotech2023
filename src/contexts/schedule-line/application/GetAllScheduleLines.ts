import { ScheduleLine } from "../domain/ScheduleLine";
import { JsonScheduleLineRepository } from "../infrastructure/JsonScheduleLineRepository";

export class GetAllScheduleLines {

  private readonly repository = new JsonScheduleLineRepository();
  
  execute(): ScheduleLine[] {
    return this.repository.getAll()
  }
}
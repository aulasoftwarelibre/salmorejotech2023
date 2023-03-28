import { ScheduleLine } from "./ScheduleLine";

export interface ScheduleLineRepository {
  getAll(): ScheduleLine[]
}
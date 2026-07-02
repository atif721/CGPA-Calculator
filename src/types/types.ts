export interface ClassInfo {
  course: string,
  section: string,
  room: string,
}

export type DaySchedule = Record<string, ClassInfo | null>;
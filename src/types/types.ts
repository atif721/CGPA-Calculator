export interface ClassInfo {
  course: string,
}

export type DaySchedule = Record<string, ClassInfo | null>;
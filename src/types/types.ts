export type GradeValue = string;

export interface GradeOption {
  label: string;
  value: GradeValue;
}

export const gradeOptions: GradeOption[] = [
  { label: "A+ (4.00)", value: "4.0" },
  { label: "A (3.75)", value: "3.75" },
  { label: "A- (3.50)", value: "3.5" },
  { label: "B+ (3.25)", value: "3.25" },
  { label: "B (3.00)", value: "3.0" },
  { label: "B- (2.75)", value: "2.75" },
  { label: "C+ (2.50)", value: "2.5" },
  { label: "C (2.25)", value: "2.25" },
  { label: "D (2.00)", value: "2.0" },
  { label: "F (0.00)", value: "0.0" },
];

export const creditOptions: string[] = ["0.5", "1.0", "1.5", "2.0", "3.0"];

export const semesterOptions: string[] = [
  "1st",
  "2nd",
  "3rd",
  "4th",
  "5th",
  "6th",
  "7th",
  "8th",
  "9th",
  "10th",
];

export interface Course {
  name: string;
  credit: string;
  gpa: string;
}

export interface Semester {
  name: string;
  cgpa: string;
}

export const EMPTY_COURSE: Course = { name: "", credit: "", gpa: "" };
export const EMPTY_SEMESTER: Semester = { name: "", cgpa: "" };


export interface ClassInfo {
  teacher_name: string;
  course: string;
  section: string;
  room: string;
}

export type TimeSlot = Record<string, ClassInfo[]>;
export type DaySchedule = Record<string, TimeSlot>;
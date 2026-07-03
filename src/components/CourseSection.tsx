import { creditOptions, gradeOptions, type Course } from "@/types/types";
import type { DaySchedule } from "@/types/types";
import FilterCourse from "@/components/FilterCourse";

export type CourseField = keyof Course;

interface CourseSectionProps {
  data: DaySchedule | null;
  section: string;
  courses: Course[];
  onUpdate: (index: number, field: CourseField, value: string) => void;
}

export function CourseSection({ data, section, courses, onUpdate }: CourseSectionProps) {
  const courseOptions = FilterCourse({ data, section });

  return (
    <>
      <div className="hidden sm:grid grid-cols-3 font-medium border-b pb-2">
        <div>Course Name</div>
        <div>Earned Credit</div>
        <div>Letter Grade</div>
      </div>
      {courses.map((course, index) => (
        <div key={index} className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-center py-2 border-b sm:border-none">
          <select
            value={course.name}
            onChange={(e) => onUpdate(index, "name", e.target.value)}
            className="p-2 border rounded-md w-full">
            <option value="">Select Course</option>
            {courseOptions.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>

          <select
            value={course.credit}
            onChange={(e) => onUpdate(index, "credit", e.target.value)}
            className="p-2 border rounded-md w-full">
            <option value="">Select Credit</option>
            {creditOptions.map((credit) => (
              <option key={credit} value={credit}>
                {credit}
              </option>
            ))}
          </select>

          <select
            value={course.gpa}
            onChange={(e) => onUpdate(index, "gpa", e.target.value)}
            className="p-2 border rounded-md w-full">
            <option value="">Select Grade</option>
            {gradeOptions.map((grade) => (
              <option key={grade.label} value={grade.value}>
                {grade.label}
              </option>
            ))}
          </select>
        </div>
      ))}
    </>
  );
}

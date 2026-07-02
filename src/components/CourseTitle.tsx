import type { Course } from "@/types";
import type { DaySchedule } from "@/types/types";
import type { CourseField } from "./CourseSection";
import FilterCourse from "./FilterCourse";

interface CourseTitleProps {
  data: DaySchedule | null;
  semester: string;
  section: string;
  courses: Course[];
  onUpdate: (index: number, field: CourseField, value: string) => void;
}

const CourseTitleNames = ({ data, semester, section, courses, onUpdate }: CourseTitleProps) => {
  {
    // console.log(data, semester, section);
  }

  return (
    <FilterCourse data={data} section={section} />
    // <div className="flex-1 bg-blue-100 rounded-lg p-3 dark:bg-gray-900">
    // </div>
  );
};

export default CourseTitleNames;

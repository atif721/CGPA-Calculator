import type { ClassInfo, DaySchedule } from "@/types/types";

interface CourseSectionProps {
  data: DaySchedule | null;
  courses: ClassInfo;
}

const CourseTitleNames = ({ data, courses }: CourseSectionProps) => {
  {
    console.log(data);
  }
  return (
    <div className="flex-1 bg-blue-100 rounded-lg p-3 dark:bg-gray-900">
      {/* <div key={courses.course} className="flex flex-col gap-2">
        <p className="font-bold text-lg text-foreground">{courses.course}</p>
      </div> */}
    </div>
  );
};

export default CourseTitleNames;

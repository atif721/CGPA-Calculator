import type { DaySchedule } from "@/types/types";

interface FilterDataProps {
  data: DaySchedule | null;
  section: string;
}

const FilterCourse = ({ data, section }: FilterDataProps) => {
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"];

  const displayedCourses = new Set<string>();
  const uniqueCourses: string[] = [];

  days.forEach((day) => {
    if (!data || !data[day]) return;

    Object.values(data[day]).forEach((classes) => {
      const filtered = classes?.filter((cls) => cls.section === section) ?? [];
      filtered.forEach((cls) => {
        if (!displayedCourses.has(cls.course)) {
          displayedCourses.add(cls.course);
          uniqueCourses.push(cls.course);
        }
      });
    });
  });

  return (
    <div className="rounded-xl shadow-md p-4 mb-4 bg-card dark:bg-[rgb(7,35,57)] border border-border dark:border-border">
      {uniqueCourses.map((course) => (
        <p key={course}>{course}</p>
      ))}
    </div>
  );
};
export default FilterCourse;

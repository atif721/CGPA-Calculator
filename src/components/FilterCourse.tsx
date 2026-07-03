import type { DaySchedule } from "@/types/types";

interface FilterCourseProps {
  data: DaySchedule | null;
  section: string;
}

const FilterCourse = ({ data, section }: FilterCourseProps): string[] => {
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

  return uniqueCourses.sort((a, b) => a.localeCompare(b));
};

export default FilterCourse;

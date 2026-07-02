import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CourseSection, type CourseField } from "@/components/CourseSection";
import { SemesterSection, type SemesterField } from "@/components/SemesterAverage";
import { EMPTY_COURSE, EMPTY_SEMESTER, type Course, type Semester } from "@/types";
import { calculateAverageCGPA, calculateCGPA } from "@/lib/cgpa";
import "./App.css";
import useSheetData from "./hooks/useSheetData";
import SelectingSemester from "./components/SelectingSemester";
import CourseTitle from "./components/CourseTitle";

const getStored = (key: string, fallback: string) => localStorage.getItem(key) ?? fallback;

function App() {
  const [courses, setCourses] = useState<Course[]>([{ ...EMPTY_COURSE }]);
  const [semesters, setSemesters] = useState<Semester[]>([{ ...EMPTY_SEMESTER }]);

  const [semester, setSemester] = useState(() => getStored("semester", ""));
  const [section, setSection] = useState(() => getStored("section", ""));

  const handleSemesterChange = (val: string) => {
    setSemester(val);
    localStorage.setItem("semester", val);
  };

  const handleSectionChange = (val: string) => {
    setSection(val);
    localStorage.setItem("section", val);
  };

  const { data, loading, error, sections } = useSheetData(semester);

  const addCourse = (): void => {
    setCourses((prev) => [...prev, { ...EMPTY_COURSE }]);
  };

  const addSemester = (): void => {
    setSemesters((prev) => [...prev, { ...EMPTY_SEMESTER }]);
  };

  const updateCourse = (index: number, field: CourseField, value: string): void => {
    setCourses((prev) => prev.map((course, i) => (i === index ? { ...course, [field]: value } : course)));
  };

  const updateSemester = (index: number, field: SemesterField, value: string): void => {
    setSemesters((prev) => prev.map((semester, i) => (i === index ? { ...semester, [field]: value } : semester)));
  };

  if (error) {
    return <div> error happaned</div>;
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center my-auto min-h-svh">
        <h2>Loading</h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-4 bg-white text-gray-900">
      <div className="max-w-3xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold text-center">CGPA Calculator</h1>

        <SelectingSemester
          semester={semester}
          section={section}
          sections={sections}
          onSemesterChange={handleSemesterChange}
          onSectionChange={handleSectionChange}
        />

        <CourseSection data={data} semester={semester} section={section} courses={courses} onUpdate={updateCourse} />

        <div className="flex flex-col sm:flex-row justify-between items-center pt-6 gap-4">
          <Button onClick={addCourse} className="py-7 bg-blue-200">
            <span className="text-base sm:text-lg">Add Another Course</span>
          </Button>

          <div className="text-xl sm:text-2xl font-semibold bg-blue-100 px-4 py-2 sm:px-6 sm:py-3 rounded-lg shadow text-center">
            Final CGPA: <span className="text-blue-700">{calculateCGPA(courses)}</span>
          </div>
        </div>

        <h2 className="text-2xl font-bold pt-10 text-center">Semester Average Calculator</h2>
        <SemesterSection semesters={semesters} onUpdate={updateSemester} />

        <div className="flex justify-between items-center pt-4 flex-col sm:flex-row gap-4">
          <Button onClick={addSemester} className="py-6 px-8 text-xl bg-green-200">
            Add Semester
          </Button>
          <div className="text-xl sm:text-2xl font-semibold bg-green-100 px-4 py-2 sm:px-6 sm:py-3 rounded-lg shadow text-center">
            Average CGPA: <span className="text-green-700">{calculateAverageCGPA(semesters)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

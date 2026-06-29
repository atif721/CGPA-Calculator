import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const gradeOptions = [
  { label: "A+ (4.00)", value: 4.0 },
  { label: "A (3.75)", value: 3.75 },
  { label: "A- (3.50)", value: 3.5 },
  { label: "B+ (3.25)", value: 3.25 },
  { label: "B (3.00)", value: 3.0 },
  { label: "B- (2.75)", value: 2.75 },
  { label: "C+ (2.50)", value: 2.5 },
  { label: "C (2.25)", value: 2.25 },
  { label: "D (2.00)", value: 2.0 },
  { label: "F (0.00)", value: 0.0 },
];

const creditOptions = ["0.5", "1.0", "1.5", "2.0", "3.0"];
const semesterOptions = [
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

function App() {
  const [courses, setCourses] = useState([{ name: "", credit: "", gpa: "" }]);
  const [semesters, setSemesters] = useState([{ name: "", cgpa: "" }]);

  const addCourse = () => {
    setCourses([...courses, { name: "", credit: "", gpa: "" }]);
  };

  const addSemester = () => {
    setSemesters([...semesters, { name: "", cgpa: "" }]);
  };

  const updateCourse = (index, field, value) => {
    const newCourses = [...courses];
    newCourses[index][field] = value;
    setCourses(newCourses);
  };

  const updateSemester = (index, field, value) => {
    const newSemesters = [...semesters];
    newSemesters[index][field] = value;
    setSemesters(newSemesters);
  };

  const calculateCGPA = () => {
    let totalCredits = 0;
    let totalWeightedGPA = 0;

    for (const course of courses) {
      const credit = parseFloat(course.credit);
      const gpa = parseFloat(course.gpa);

      if (!isNaN(credit) && !isNaN(gpa)) {
        totalCredits += credit;
        totalWeightedGPA += credit * gpa;
      }
    }

    return totalCredits > 0
      ? (totalWeightedGPA / totalCredits).toFixed(2)
      : "0.00";
  };

  const calculateAverageCGPA = () => {
    let total = 0;
    let count = 0;

    for (const semester of semesters) {
      const cgpa = parseFloat(semester.cgpa);
      if (!isNaN(cgpa)) {
        total += cgpa;
        count++;
      }
    }

    return count > 0 ? (total / count).toFixed(2) : "0.00";
  };

  return (
    <div className="min-h-screen p-4 bg-white text-gray-900">
      <div className="max-w-3xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold text-center">CGPA Calculator</h1>

        <div className="hidden sm:grid grid-cols-3 font-medium border-b pb-2">
          <div>Course Name</div>
          <div>Earned Credit</div>
          <div>Letter Grade</div>
        </div>

        {courses.map((course, index) => (
          <div
            key={index}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-center py-2 border-b sm:border-none">
            <Input
              type="text"
              placeholder="e.g. CSE2101 or Java"
              value={course.name}
              onChange={(e) => updateCourse(index, "name", e.target.value)}
            />
            <select
              value={course.credit}
              onChange={(e) => updateCourse(index, "credit", e.target.value)}
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
              onChange={(e) => updateCourse(index, "gpa", e.target.value)}
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

        <div className="flex flex-col sm:flex-row justify-between items-center pt-6 gap-4">
          <Button onClick={addCourse} className="py-7 bg-blue-200">
            <span className="text-base sm:text-lg">Add Another Course</span>
          </Button>

          <div className="text-xl sm:text-2xl font-semibold bg-blue-100 px-4 py-2 sm:px-6 sm:py-3 rounded-lg shadow text-center">
            Final CGPA: <span className="text-blue-700">{calculateCGPA()}</span>
          </div>
        </div>

        {/* Semester Average CGPA Section */}
        <h2 className="text-2xl font-bold pt-10 text-center">
          Semester Average Calculator
        </h2>

        <div className="hidden sm:grid grid-cols-2 font-medium border-b pb-2">
          <div>Semester</div>
          <div>CGPA</div>
        </div>

        {semesters.map((semester, index) => (
          <div
            key={index}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center py-2 border-b sm:border-none">
            <select
              value={semester.name}
              onChange={(e) => updateSemester(index, "name", e.target.value)}
              className="p-2 border rounded-md w-full">
              <option value="">Select Semester</option>
              {semesterOptions.map((sem) => (
                <option key={sem} value={sem}>
                  {sem}
                </option>
              ))}
            </select>
            <Input
              type="number"
              step="0.01"
              placeholder="e.g. 3.75"
              value={semester.cgpa}
              onChange={(e) => updateSemester(index, "cgpa", e.target.value)}
            />
          </div>
        ))}

        <div className="flex justify-between items-center pt-4 flex-col sm:flex-row gap-4">
          <Button
            onClick={addSemester}
            className="py-6 px-8 text-xl bg-green-200">
            Add Semester
          </Button>
          <div className="text-xl sm:text-2xl font-semibold bg-green-100 px-4 py-2 sm:px-6 sm:py-3 rounded-lg shadow text-center">
            Average CGPA:{" "}
            <span className="text-green-700">{calculateAverageCGPA()}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

import type { Course, Semester } from "@/types";

/** Weighted CGPA from a list of {credit, gpa} courses. Returns "0.00" when no valid input. */
export function calculateCGPA(courses: Course[]): string {
  let totalCredits = 0;
  let totalWeightedGPA = 0;

  for (const course of courses) {
    const credit = parseFloat(course.credit);
    const gpa = parseFloat(course.gpa);

    if (!Number.isNaN(credit) && !Number.isNaN(gpa)) {
      totalCredits += credit;
      totalWeightedGPA += credit * gpa;
    }
  }

  return totalCredits > 0
    ? (totalWeightedGPA / totalCredits).toFixed(2)
    : "0.00";
}

/** Average of entered semester CGPAs. Returns "0.00" when no valid input. */
export function calculateAverageCGPA(semesters: Semester[]): string {
  let total = 0;
  let count = 0;

  for (const semester of semesters) {
    const cgpa = parseFloat(semester.cgpa);
    if (!Number.isNaN(cgpa)) {
      total += cgpa;
      count += 1;
    }
  }

  return count > 0 ? (total / count).toFixed(2) : "0.00";
}

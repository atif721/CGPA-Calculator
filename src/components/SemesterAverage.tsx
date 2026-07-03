import { Input } from "@/components/ui/input";
import { semesterOptions, type Semester } from "@/types/types";

export type SemesterField = keyof Semester;

interface SemesterSectionProps {
  semesters: Semester[];
  onUpdate: (index: number, field: SemesterField, value: string) => void;
}

export function SemesterSection({ semesters, onUpdate }: SemesterSectionProps) {
  return (
    <>
      <div className="hidden sm:grid grid-cols-2 font-medium border-b pb-2">
        <div>Semester</div>
        <div>CGPA</div>
      </div>

      {semesters.map((semester, index) => (
        <div
          key={index}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center py-2 border-b sm:border-none"
        >
          <select
            value={semester.name}
            onChange={(e) => onUpdate(index, "name", e.target.value)}
            className="p-2 border rounded-md w-full"
          >
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
            onChange={(e) => onUpdate(index, "cgpa", e.target.value)}
          />
        </div>
      ))}
    </>
  );
}

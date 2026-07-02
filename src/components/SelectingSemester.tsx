import { SEMESTERS } from "@/utils/constants";

interface SelectingSemesterProps {
  semester: string;
  section: string;
  sections: string[];
  onSemesterChange: (val: string) => void;
  onSectionChange: (val: string) => void;
}

const SelectingSemester = ({
  semester,
  section,
  sections,
  onSemesterChange,
  onSectionChange,
}: SelectingSemesterProps) => {
  return (
    <>
      <div className="flex justify-around gap-4 font-medium border-b pb-2">
        <div>Semester</div>
        <div>Section</div>
      </div>

      <div className="flex justify-around gap-4 py-2 border-b sm:border-none">
        <select
          value={semester}
          onChange={(e) => onSemesterChange(e.target.value)}
          className="p-2 border rounded-md w-full">
          <option value="">Select Semester</option>
          {SEMESTERS.map((sem) => (
            <option key={sem} value={sem}>
              {sem}
            </option>
          ))}
        </select>
        <select
          value={section}
          onChange={(e) => onSectionChange(e.target.value)}
          className="p-2 border rounded-md w-full">
          <option value="">Select Section</option>
          {sections.map((sec) => (
            <option key={sec} value={sec}>
              {sec}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};
export default SelectingSemester;

import { useEffect, useState, useCallback } from "react";
import { BASE_URL } from "../utils/constants";
import type { DaySchedule } from "@/types/types";

const useSheetData = (semester: string) => {
  const [data, setData] = useState<DaySchedule | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const url = BASE_URL;
      const routineRes = await fetch(`${url}/cse/?semester=${semester}`);
      const routineJSON = await routineRes.json();
      setData(routineJSON);

      setLoading(false);
    } catch {
      setError("Something error");
      setLoading(false);
    }
  }, [semester]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, loading, error };
};

export default useSheetData;
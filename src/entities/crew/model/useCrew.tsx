import { useQuery } from "@tanstack/react-query";
import { fetchCrewById } from "../api/fetchApi";

export const useCrew = () => {
  const getCrewById = (id: string) =>
    useQuery<any, any>({
      queryKey: ["crewKey", id],
      queryFn: () => fetchCrewById(id),
    });

  return { getCrewById };
};

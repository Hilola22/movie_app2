import { api } from "@/shared/api";

export const fetchCrewById = async (id: string) => {
  const response = await api.get(`/person/${id}`);
  return response.data;
};
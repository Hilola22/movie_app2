import { useQuery } from "@tanstack/react-query";
import { fetchReviewById } from "../api/fetchApi";

export const useReviews = () => {
  const getReviews = (id: string) =>
    useQuery<any, any>({
      queryKey: ["reviewKey", id],
      queryFn: () => fetchReviewById(id),
    });

  return { getReviews };
};

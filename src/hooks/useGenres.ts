import { useQuery } from "@tanstack/react-query";
import { FetchResponse } from "./useData";
import apiClient from "../services/api-client";
import genres from "../data/genres";
import Genre from "../entities/Genre";

const useGenres = () => useQuery({
  queryKey: ['genres'],
  queryFn: () => apiClient.get<FetchResponse<Genre>>('/genres').then((res) => res.data),
  staleTime: 1000 * 60 * 60 * 24, // 24 hours
  initialData: genres,
});

export default useGenres;

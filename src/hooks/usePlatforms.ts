import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import Platform from "../entities/Platform";
import apiClient from "../services/api-client";
import { FetchResponse } from "./useData";


const usePlatforms = () => useQuery({
  queryKey: ['platforms'],
  queryFn: () => apiClient.get<FetchResponse<Platform>>('/platforms/lists/parents').then((res) => res.data),
  staleTime: 1000 * 60 * 60 * 24, // 24 hours
  initialData: platforms,
});

export default usePlatforms;

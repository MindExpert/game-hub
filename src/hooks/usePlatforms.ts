import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import Platform from "../entities/Platform";
import apiClient, { FetchResponse } from "../services/api-client";

const usePlatforms = () => useQuery({
  queryKey: ['platforms'],
  queryFn: () => apiClient.get<FetchResponse<Platform>>('/platforms/lists/parents').then((res) => res.data),
  staleTime: 1000 * 60 * 60 * 24, // 24 hours
  initialData: platforms,
});

export default usePlatforms;

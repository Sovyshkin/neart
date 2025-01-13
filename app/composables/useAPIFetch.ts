// composables/useAPIFetch.ts

import { useFetch } from "#app"

export const useAPIFetch = (path, options = {}) => {
  const config = useRuntimeConfig()

  return useFetch(path, { 
    baseURL: config.public.baseUrl,
    ...options
  })
}

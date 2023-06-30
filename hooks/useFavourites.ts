import useSwr from "swr";

import fetcher from "@/libs/fetcher";

const useFavourites = () => {
   const {data, isLoading, error ,mutate}=useSwr("/api/favourites" , fetcher,{
    revalidateIfStale:false,
    revalidateOnFocus:false,
    revalidateOnReconnect:false,
   })

   return{
    data,
    isLoading,
    error,
    mutate
   }
}
 
export default useFavourites;
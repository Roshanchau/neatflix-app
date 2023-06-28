import useSwr from "swr";

import fetcher from "@/libs/fetcher";

const useBillboard=()=>{
    const{data , isLoading , error}=useSwr("/api/random" , fetcher,{
        revalidateIfStale:false,
        revalidateOnFocus:false,
        revalidateOnReconnect:false,
    });

    return{
        data,
        isLoading,
        error
    }
}

export default useBillboard;
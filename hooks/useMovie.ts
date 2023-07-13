import useSwr from "swr";
import fetcher from "@/libs/fetcher";

const useMovie = (id?: string) => {
    const {data , isLoading, error }=useSwr(id?`/api/movies/${id}`:null , fetcher,{
        revalidateIfStale:false,
        revalidateOnFocus:false,
        revalidateOnReconnect:false
    })

    return{     
        data ,
        isLoading, 
        error
    }
}
 
export default useMovie;
import axios from "axios";

import React, {useCallback  , useMemo} from "react";
import {AiOutlineCheck, AiOutlinePlus} from "react-icons/ai";
import useCurrentUser from "@/hooks/useCurrentUser"; 
import useFavourites from "@/hooks/useFavourites";

interface FavouriteButtonProps{
    movieId:string,
}

const FavouriteButton:React.FC<FavouriteButtonProps> = ({movieId}) => {
    const{mutate: mutateFavorites}=useFavourites();
    const{data:currentUser , mutate}=useCurrentUser();

    const isFavourite=useMemo(()=>{
        const list=currentUser?.favoriteIds || [] ;
        return list.includes(movieId);
    } , [currentUser , movieId])

    const toggleFavorites = useCallback(async () => {
        let response;
        if (isFavourite) {
          response = await axios.delete(`/api/favourite?movieId=${movieId}`);
        } else {
          response = await axios.post("/api/favourite", { movieId });
        }
        const updatedFavoriteIds = response?.data?.favoriteIds;
    
        mutate({
          ...currentUser,
          favoriteIds: updatedFavoriteIds,
        });
        mutateFavorites();
      }, [movieId, isFavourite, currentUser, mutate, mutateFavorites]);
    
    const Icon=isFavourite? AiOutlineCheck:AiOutlinePlus;

    return ( <div
        onClick={toggleFavorites}
        className="
        cursor-pointer
        group/item
        w-6
        h-6
        lg:h-10
        lg:w-10
        border-white
        border-2
        rounded-full
        flex
        items-center
        justify-center
        transition
        hover:border-neutral-300
    ">
        <Icon className="text-white size={25}"/>
    </div> );
}
 
export default FavouriteButton
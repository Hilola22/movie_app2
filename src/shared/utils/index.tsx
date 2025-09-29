import noImage from "@/shared/assets/noImage.png";

export const createImageUrl = (path:string | null) => {
    if(path){
        return `https://image.tmdb.org/t/p/original${path}`
    }
    return `${noImage}`;
}
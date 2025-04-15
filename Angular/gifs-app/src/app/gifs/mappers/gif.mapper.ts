import { GiphyItem } from "../interfaces/giphy.interface";
import { Gif } from "../interfaces/gif.interface";

// Mappers, following DTO (Data Transfer Object) pattern
export const mapGiphyToGif = (gif: GiphyItem): Gif => {
    return {
        id: gif.id,
        title: gif.title,
        url: gif.images.original.url
    };
};

export const mapGiphyToGifArray = (gifs: GiphyItem[]): Gif[] => {
    return gifs.map(mapGiphyToGif);
};
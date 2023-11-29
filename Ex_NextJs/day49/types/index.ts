import {SVGProps} from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
    size?: number;
};
export type GalleryResponse = {
    id: number,
    src: string
}
export type TravelResponse = {
    id: number,
    title: string,
    thumbnail: string,
    description: string,
    price: number,
    gallery: GalleryResponse[]
}

export type TravelsResponse = {
    travels: TravelResponse[]
}
export type ErrorResponse = {
    message: string,
    error: string
}

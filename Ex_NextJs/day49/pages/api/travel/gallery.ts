import {NextApiRequest, NextApiResponse} from "next";
import {travels} from "@/data/travel-data";
import {ErrorResponse, GalleryResponse, TravelResponse, TravelsResponse} from "@/types";
import {deAccent} from "@/utils/string-utils";

const travelData = travels;
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<GalleryResponse[] | ErrorResponse>
) {
    if (req.method === "GET") {
        return getGallery(req, res)
    }
}

const getGallery = (req: NextApiRequest, res: NextApiResponse<GalleryResponse[] | ErrorResponse>) => {
    try {
        const result: GalleryResponse[] = travelData.travels.reduce((previousValue: GalleryResponse[], travel: TravelResponse) => {
            return [...previousValue, ...travel.gallery]
        }, [])
        res.status(200).json(result)

    } catch (err: any) {
        const serverError: ErrorResponse = {
            message: "Server error",
            error: err.message()
        }
        res.status(500).json(serverError)
    }
}
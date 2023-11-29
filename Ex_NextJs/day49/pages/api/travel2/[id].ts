import {NextApiRequest, NextApiResponse} from "next";
import {travels} from "@/pages/data/travel-data";
import {ErrorResponse, TravelResponse, TravelsResponse} from "@/types";
import {deAccent} from "@/utils/string-utils";

const travelData = travels;
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<TravelResponse | ErrorResponse>
) {

}

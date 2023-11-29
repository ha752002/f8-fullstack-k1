import {NextApiRequest, NextApiResponse} from "next";
import {travels} from "@/data/travel-data";
import {ErrorResponse, TravelsResponse} from "@/types";
import {deAccent} from "@/utils/string-utils";

const travelData = travels;
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<TravelsResponse | ErrorResponse>
) {

}

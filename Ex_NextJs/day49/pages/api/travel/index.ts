import {NextApiRequest, NextApiResponse} from "next";
import {travels} from "@/data/travel-data";
import {ErrorResponse, TravelsResponse} from "@/types";
import {deAccent} from "@/utils/string-utils";

const travelData = travels;
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<TravelsResponse | ErrorResponse>
) {
    if (req.method === "GET") {
        const query = req.query;
        console.log("query: ", query)
        return filterData(req, res)
    }
}

const getAll = (req: NextApiRequest, res: NextApiResponse<TravelsResponse | ErrorResponse>) => {
    try {
        res.status(200).json(travelData)
    } catch (err : any) {
        const serverError: ErrorResponse = {
            message: "Server error",
            error: err.message()
        }
        res.status(500).json(serverError)
    }
}
const filterData = (req: NextApiRequest, res: NextApiResponse<TravelsResponse | ErrorResponse>) => {
    try {
        const {q, price} = req.query;
        const result: TravelsResponse = {
            travels: []
        }
        result.travels = travelData.travels.filter((travel) => {
            let isValid = true;
            if (q) {
                console.log(q)
                isValid = deAccent(travel.title).toLowerCase().includes(deAccent((q + "")).toLowerCase());
            }
            if (price) {
                console.log(price)
                isValid = travel.price <= +price;
            }
            return isValid;
        })
        res.status(200).json(result)

    } catch (err : any) {
        const serverError: ErrorResponse = {
            message: "Server error",
            error: err.message()
        }
        res.status(500).json(serverError)
    }
}
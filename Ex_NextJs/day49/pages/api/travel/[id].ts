import {NextApiRequest, NextApiResponse} from "next";
import {travels} from "@/data/travel-data";
import {ErrorResponse, TravelResponse, TravelsResponse} from "@/types";
import {deAccent} from "@/utils/string-utils";

const travelData = travels;
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<TravelResponse | ErrorResponse>
) {
    if (req.method === "GET") {
        const query = req.query;
        console.log("query: ", query)
        return getById(req, res)
    }
}

const getById = (req: NextApiRequest, res: NextApiResponse<TravelResponse | ErrorResponse>) => {
    try {
        const {id} = req.query;
        if(id && typeof (+id) === "number"){
            const result = travelData.travels.find(travel => travel.id === +id)
           if(result){
               res.status(200).json(result)
           } else{
               const notFoundError: ErrorResponse = {
                   message: "Resource not found",
                   error: `Travel with id = ${id} not found`
               }
               res.status(404).json(notFoundError)
           }
        }

    } catch (err : any) {
        const serverError: ErrorResponse = {
            message: "Server error",
            error: err.message()
        }
        res.status(500).json(serverError)
    }
}
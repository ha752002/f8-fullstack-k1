import {NextApiRequest, NextApiResponse} from "next";
import {ProfileResponse} from "@/types/profile";
import {v4 as uuid} from "uuid";
import {ErrorResponse} from "@/types";

const profileList: ProfileResponse[] = [{
    id: "10e98b60-0a43-43ef-97f5-4f4739d63fa3",
    age: 10,
    name: "hong ha"
}, {
    id: "c5176ab3-19e7-4367-a581-4f44ca963ce4",
    age: 10,
    name: "Xuan Bach"
}]

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<ProfileResponse | ErrorResponse>
) {
    const id = req.query.id;
    const data: ProfileResponse | undefined = profileList.find((value: ProfileResponse) => value.id === id);
    if (!data) {
        const error: ErrorResponse = {
            error : `${id} is not found`,
            message : "Not found"
        }

        res.status(404).json(error)
    }

    res.status(200).json(data!)
}
import {NextApiRequest, NextApiResponse} from "next";
import {ProfileResponse} from "@/types/profile";
import {v4 as uuid} from "uuid";

const profileList: ProfileResponse[] = [{
    id: uuid(),
    age: 10,
    name: "hong ha"
},{
    id: uuid(),
    age: 10,
    name: "Xuan Bach"
}]

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<ProfileResponse[]>
) {
    const data: ProfileResponse[] = profileList ;
    res.status(200).json(data)
}
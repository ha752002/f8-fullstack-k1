
import district from "../../../data/quan_huyen.json"
export function GET(request) {

    const provinceId = request.nextUrl.searchParams.get("province_id");
    if(!provinceId) {
        return Response.json({error: "error"})
    }
    let districtArr = Object.values(district);

    console.log(districtArr)
    return Response.json({})
}

import province from "../../../data/tinh_tp.json"
// import province from "../../../data/quan_huyen.json"
export function GET() {
    // console.log(province)
    return Response.json(
        Object.values(province)
    )
}
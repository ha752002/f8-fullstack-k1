import {getServerSession} from "next-auth";
import {authOptions} from "@/app/api/auth/[...nextauth]/route";


export default async function Home() {
    const session = await getServerSession(authOptions)
    // console.log()
    if(!session){
        return <>Not logged yet</>
    }
    return <pre>{JSON.stringify(session, null, 2)}</pre>
}

"use client"

import {useParams, useRouter} from "next/navigation";
import useSWR from "swr";
import {apiClient} from "@/services/api";
import {Link} from "@nextui-org/link";
import Image from "next/image";
import {Button} from "@nextui-org/button";
import {useRef} from "react";
import {sendEmail} from "@/utils/email";

const Checkout = () => {
    const params = useParams();
    const router = useRouter();
    const {data, error, isLoading} = useSWR('/api/travel/' + params?.id, (url) => apiClient.get(url).then(res => res.data))
    const form = useRef<HTMLFormElement>(null);

    if (isLoading){
        return <>...loading</>
    }
    if (error){
        return <>Error</>
    }
    return (
        data && <form ref={form} onSubmit={(e) => {
            e.preventDefault()
            console.log(form.current)
            if (form.current) {
                sendEmail(form.current)
            }
        }}>
            <label>Name</label>
            <input type="text" name="user_name"/>
            <label>Email</label>
            <input type="email" name="email"/>
            <label>Destination</label>
            <input type="text" name="destination" defaultValue={data.title}/>
            <label>Price</label>
            <input readOnly={true} name="price" defaultValue={data.price}/>
            <input type="text" name="image" hidden={true} defaultValue={data.thumbnail}/>
            <Button type="submit" color={"success"}>Send</Button>
        </form>
    );
};

export default Checkout;
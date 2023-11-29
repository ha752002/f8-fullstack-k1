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
    const {data, error} = useSWR('/api/travel/' + params?.id, (url) => apiClient.get(url).then(res => res.data))
    const form = useRef<HTMLFormElement>(null);

    return (
        data && <form ref={form} onSubmit={(e) => {
            e.preventDefault()
            if (form.current) {
                sendEmail(form.current)
            }
        }}>
            <label>Name</label>
            <input type="text" name="user_name"/>
            <label>Email</label>
            <input type="email" name="user_email"/>
            <label>Message</label>
            <textarea name="message"/>
            <input type="submit" value="Send"/>
        </form>
    );
};

export default Checkout;
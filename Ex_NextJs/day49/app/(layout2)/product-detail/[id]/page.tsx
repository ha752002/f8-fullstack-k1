"use client"

import {useParams} from "next/navigation";
import useSWR from "swr";
import {apiClient} from "@/services/api";

const ProductDetail = () => {
    const params = useParams();
    console.log(params)
    const {data, error} = useSWR('/pages/' + params.id, (url) =>  apiClient.get(url).then(res => res.data))

    console.log(`envi`, process.env.API_DOMAIN)
    return (
        <div>
            ProductDetail
        </div>
    );
};

export default ProductDetail;
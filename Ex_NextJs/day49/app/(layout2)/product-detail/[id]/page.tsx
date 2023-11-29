"use client"

import {useParams} from "next/navigation";
import useSWR from "swr";
import {apiClient} from "@/services/api";
import {Link} from "@nextui-org/link";
import Image from "next/image";

const ProductDetail = () => {
    const params = useParams();
    console.log(params)
    const {data, error} = useSWR('/api/travel/' + params?.id, (url) =>  apiClient.get(url).then(res => res.data))

    return (
        data && <div className="box">
                <Image loader={(src) => data.thumbnail}
                       src={data.thumbnail}
                       alt={"Picture of the destinationBox"} width={200} height={200}/>
                <div className="content">
                    <h3><i className="fas fa-map-marker-alt"></i> {data.title}</h3>
                    <p>{data.description}</p>
                </div>
        </div>
    );
};

export default ProductDetail;
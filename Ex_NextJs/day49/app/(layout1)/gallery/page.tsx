"use client"
import useSWR from "swr";
import {apiClient} from "@/services/api";
import Image from "next/image";
import {GalleryResponse} from "@/types";
import './gallery.css'

const Gallery = () => {
    const {data, error} = useSWR('/api/travel/gallery', (url) => apiClient.get(url).then(res => res.data))
    console.log(data)

    return (
        data && <div className="image-container">
            {
                data.map((destination : GalleryResponse) => {
                    return <div className="box">
                        <Image loader={(src) => destination.src}
                               src={destination.src}
                               alt={"Picture of the destinationBox"} width={200} height={200}/>
                        {/*<div className="content">*/}
                        {/*    <h3><i className="fas fa-map-marker-alt"></i> {data.title}</h3>*/}
                        {/*    <p>{data.description}</p>*/}
                        {/*</div>*/}
                    </div>
                })
            }
        </div>
    );
};

export default Gallery;
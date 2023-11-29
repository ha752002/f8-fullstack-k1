"use client"
import React from 'react';
import {Button} from "@nextui-org/button";
import {useRouter} from "next/navigation";

const NotFound = () => {
    const router = useRouter();
    return (
        <div>
            Not Found
            <br/>
            <Button onClick={(e) => {
                router.push(`/`);
            }} color={"success"}>Go to home</Button>
        </div>
    );
};

export default NotFound;
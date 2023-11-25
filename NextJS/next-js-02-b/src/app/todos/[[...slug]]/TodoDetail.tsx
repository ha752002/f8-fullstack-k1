"use client"
import {useSearchParams} from "next/navigation";
import {useRouter} from "next/router";

const TodoDetail =   (data : {
    title: string;
}) => {
    console.log(data)
    return (
        <div>
            {data.title}
        </div>
    );
};

export default TodoDetail;
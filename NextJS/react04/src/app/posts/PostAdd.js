"use client";
import { useRef } from "react";
import {useSWRConfig} from "swr";

const PostAdd = () => {
    const name = useRef("");
    const { mutate } = useSWRConfig();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const postData = { title: name.current.value };
        await addPost(postData);
    };

    const addPost = async (data) => {
        const postApi = `${process.env.NEXT_PUBLIC_SERVER_API}/posts`;
        const response = await fetch(postApi, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        if(response.ok){
            mutate(postApi);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="title" name="title" ref={name} />
                <button type="submit">them</button>
            </form>
        </div>
    );
};

export default PostAdd;

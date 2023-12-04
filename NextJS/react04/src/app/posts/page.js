import React from 'react';
import PostList from "@/app/posts/PostList";
import PostAdd from "@/app/posts/PostAdd";

const Page = () => {

    return (
        <div>
            <PostList />
            <PostAdd />
        </div>
    );
};

export default Page;
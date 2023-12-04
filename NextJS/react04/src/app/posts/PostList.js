"use client";
import process from "process";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());
const postApi = `${process.env.NEXT_PUBLIC_SERVER_API}/posts`;
// export const postApi = `https://jsonplaceholder.typicode.com/posts`;

const PostList = () => {
    const { data: posts, isLoading, error } = useSWR(postApi, fetcher,{
        // refreshInterval :500
        // revalidateOnFocus: false,
        revalidateOnReconnect : true
    });

    if (isLoading) return <h3>Loading....</h3>;

    if (error) {
        return <h3>Đã có lỗi xảy ra</h3>;
    }

    return (
        <div>
            {posts?.map(({ id, title }) => (
                <h3 key={id}>{title}</h3>
            ))}
        </div>
    );
};

export default PostList;

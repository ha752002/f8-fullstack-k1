import { client } from "./client.js"

export const getBlogsData = async () => {
    const blogsData = await client.get("/blogs");
    // console.log(blogsData);
    return blogsData.data.data;
}

export const postBlog = async (value) => {
    const { data: dataResponse, response: response } = await client.post("/blogs/", value);
    // console.log(dataResponse);
}

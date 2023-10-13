import { client } from "./client.js"

export const getAllBlogs = async () => {
    const { data: dataResponse, response: response } = await client.get("/blogs/");
    return dataResponse.data;
}


export const postBlog = async (value) => {
    const { data: dataResponse, response: response } = await client.post("/blogs/", value);
}
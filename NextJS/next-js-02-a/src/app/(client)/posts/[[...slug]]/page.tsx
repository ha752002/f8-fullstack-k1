import Post from "@/components/Posts/Post";
import PostDeatil from "@/components/Posts/PostDeatil";
import Category from "@/components/Posts/Category";

const Posts = ({params}:{params : any}) => {
    console.log(params)
    if(!params.slug){
        return <Post />
    }
    return (
        <div>
            <h1>Posts</h1>
            {params.slug[1] ? <PostDeatil /> : <Category />}
        </div>
    );
};

export default Posts;
import {useEffect, useState} from "react";
import {IPost} from "../../models/IPost.ts";
import {getData} from "../../services/api-service.ts";
import {IResponse} from "../../models/IResponse.ts";
import PostComponent from "./PostComponent.tsx";

export const PostsComponent = () => {
    const [posts, setPosts] = useState<IPost[]>([]);
    useEffect(() => {
        getData<IResponse &  {posts: IPost[]}>('posts').then(({posts})=>setPosts(posts));
    }, [])
    return (
        <>
            {
                posts &&
                posts.map((post) => (<PostComponent key={post.id} post={post}/>))
            }
        </>
    );
};
import   {  useEffect, useState} from 'react';
import {IPost} from "../models/IPost.ts";
import {getPosts} from "../services/api-servise.ts";
import PostComponent from "./PostComponent.tsx";

const PostsComponent = () => {
    const [posts, setPosts] = useState<IPost[]>([]);
    useEffect(() => {
    getPosts().then(res=>setPosts(res));
    }, [])


    return (
        <>
            {posts.map(post => (<PostComponent post={post} key={post.id} />))}
        </>
    );
};

export default PostsComponent;
import {useEffect, useState} from 'react';
import {getFromDummy} from "../services/api-service.ts";
import {IPostDummy} from "../models/DummyJson/IPost.ts";

const PostsDummyPage = () => {
    const [posts, setPosts] = useState<IPostDummy[] | null>(null);
    useEffect(() => {
        const getPosts = async ()=>{
            setPosts(await getFromDummy.posts());

        }
        getPosts();
    })
    return (
        <div>
            {posts&&
                posts.map((post) => (
                    <p key={post.id}>
                        {post.title}
                    </p>
                ))
            }
        </div>
    );
};

export default PostsDummyPage;
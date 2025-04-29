import {useEffect, useState} from 'react';
import {IPosts} from "../models/JsonPlaceholder/IPost.ts";
import {getFromJsonPl} from "../services/api-service.ts";

const PostsJsonPage = () => {
    const [posts, setPosts] = useState<IPosts>([]);
    useEffect(() => {
      const getPosts = async ()=>{
          setPosts(await getFromJsonPl.posts());

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

export default PostsJsonPage;
import {FC} from 'react';
import {IPost} from "../models/IPost.ts";

interface PostProp {
    post: IPost;
}

const PostComponent: FC<PostProp> = ({post}) => {
    return (
        <div className="w-[70vw]  mx-auto border-2 rounded-lg mb-10 overflow-hidden ">

               <div className={'flex flex-row justify-between bg-blue-500'}>
                   <p>userId: {post.userId}</p>
                   <span>id: {post.id}</span>
               </div>
               <div>
                   <h2 className={"font-bold"}>{post.title}</h2>
                   <p className={'mt-2'}>{post.body}</p>
               </div>

        </div>
    );
};

export default PostComponent;

import {IPost} from "../../models/IPost.ts";

interface IPostProps {
    post: IPost;
}

const PostComponent = ({post}: IPostProps) => {
    return (
        <div className={'border border-blue-400 rounded-md mb-5 px-2'}>
            <p className={'font-bold'}>{post.title}</p>
            <p>{post.body}</p>
        </div>
    );
};

export default PostComponent;
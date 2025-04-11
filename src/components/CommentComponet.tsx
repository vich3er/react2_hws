import  {FC} from 'react';
import {IComment} from "../models/IComment.ts";

interface CommentProp {
    comment: IComment;
}

const CommentComponet: FC<CommentProp> = ({comment}) => {
    return (
        <div className="w-[97%] mx-auto border mb-2 p-2 flex flex-col rounded-2xl gap-5">
            <div className="flex flex-row justify-between">
               <p> postId: {comment.id}</p>
              <p>  id: {comment.id}</p>
            </div>
            <div className="flex flex-col gap-5">
<div>
    <p className={'bg-amber-300  rounded-2xl   inline-block p-1 px-2'}>email: {comment.email}</p>

</div>
               <div className="flex flex-col  items-center ">
                   <p className={'inline-block bg-amber-300 rounded-2xl p-1 px-2 text-center'}>     {comment.name}</p>
                   <p> {comment.body}</p>
               </div>
            </div>
            </div>
    );
};

export default CommentComponet;
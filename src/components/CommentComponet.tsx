import React, {FC} from 'react';
import {IComment} from "../models/IComment.ts";

interface CommentProp {
    comment: IComment;
}

const CommentComponet: FC<CommentProp> = ({comment}) => {
    return (
        <div className="w-[90%] ">
            <div className="flex flex-row justify-between ">
               <p> postId: {comment.id}</p>
              <p>  id: {comment.id}</p>
            </div>
            <div>
                <div className={'flex flex-col   items-end'}>
                 <p>   name: {comment.name}</p>
                    <p>email: {comment.email}</p>
                </div>
                <p>
                    {comment.body}</p>
            </div>
            </div>
    );
};

export default CommentComponet;
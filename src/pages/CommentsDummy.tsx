import  {useEffect, useState} from 'react';
import {ICommentDummy} from "../models/DummyJson/IComment.ts";
import {getFromDummy} from "../services/api-service.ts";
// ctrl alt o

const CommentsDummy = () => {
    const [comments, setComments] = useState<ICommentDummy[]| null>(null)
    useEffect(() => {
        getFromDummy.comments().then(comments => setComments(comments))
    })
    return (
        <div>
            { comments&&
                comments.map((comment: ICommentDummy) => <p key={comment.id}>{comment.body}</p>)
            }
        </div>
    );
};

export default CommentsDummy;
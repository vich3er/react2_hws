
// ctrl alt o

import {getFromJsonPl} from "../services/api-service.ts";
import {useEffect, useState} from "react";
import {IComment} from "../models/JsonPlaceholder/IComment.ts";

const CommentsJson = () => {
    const [comments, setComments] = useState<IComment[]| null>(null)
    useEffect(() => {
        getFromJsonPl.comments().then(comments => setComments(comments))
    })
    return (
        <div>
            { comments&&
                comments.map((comment) => <p key={comment.id}>{comment.name}</p>)
            }
        </div>
    );
};

export default CommentsJson;
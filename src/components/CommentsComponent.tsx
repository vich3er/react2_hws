import   {useEffect, useState} from 'react';
import {IComment} from "../models/IComment.ts";
import {getComments} from "../services/api-service.ts";
import CommentComponet from "./CommentComponet.tsx";

const CommentsComponent = () => {

    const [comments, setComments] = useState<IComment[]>([]);

    useEffect(() => {
      const getData = async ()=>{
            setComments(await getComments());
      }
         getData();

    }, [])

    return (
        <div>
            {
                comments.map((comment, i) =>  <CommentComponet comment={comment} key={i} />)
            }
        </div>
    );
};

export default CommentsComponent;
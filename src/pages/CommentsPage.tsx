import {useAppSelector} from "../redux/hooks/useAppSelector.ts";
import {useAppDispatch} from "../redux/hooks/useAppDispatch.ts";
import {useEffect} from "react";
import {commentsSliceActions} from "../redux/slices/commentsSlice.ts";
import {CommentComponent} from "../components/CommentComponent.tsx";


export const CommentsPage = () => {



    const {comments} = useAppSelector(({commentsSlice})=> commentsSlice);
    const dispatch = useAppDispatch();
    useEffect(() => {
        if (comments.length==0)
            dispatch(commentsSliceActions.loadComments())
    }, [])
    console.log(comments);
    return (
        <>
            {
                comments&& comments.map((comment) => <CommentComponent postId={comment.postId}
                                                                       name={comment.name}
                                                                       email={comment.email}
                                                                       body={comment.body}/>)
            }
        </>
    );
};
import {FC} from "react";

interface CommentProps {
    postId: number;
    name: string;
    email: string;
    body: string;
}

export const CommentComponent: FC<CommentProps> = ({postId, name, email, body}) => {
    return (
        <div className={'border-2 border-indigo-600 rounded-md p-5 my-5'}>
        <div className={'flex justify-between'}>
            <div className={'bg-indigo-600 text-white  w-40 p-1 mr-3 break-words'}>
                <div>
                    {postId}
                </div>
                <div>
                    {name}
                </div>
                <div>
                    {email}
                </div>
            </div>

            <p className={'flex-1'}>{body}</p>
        </div>

        </div>
    );
};
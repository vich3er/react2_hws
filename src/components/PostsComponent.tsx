import {FC} from "react";

interface PostsCompProps {
    userId: number;
    title: string;
    body: string;
}

export const PostsComponent:FC<PostsCompProps> = ({userId, title, body}) => {
    return (
        <div  className={'border-2 border-indigo-600 rounded-md p-5'}>
            <div>userId: {userId}</div>
            <h3 className={'text-white bg-indigo-600 rounded-md p-1'}>{title}</h3>
            <p>{body}</p>
        </div>
    );
};
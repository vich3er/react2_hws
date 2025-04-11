import {IComment} from "../models/IComment.ts";

export const getComments =async (): Promise<IComment[]> => {
    return await fetch("https://jsonplaceholder.typicode.com/comments").then((res) => res.json());
}

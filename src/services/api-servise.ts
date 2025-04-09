import {IPost} from "../models/IPost.ts";

export const getPosts = async (): Promise<IPost[]>=>{
    return await fetch("https://jsonplaceholder.typicode.com/posts").then(res => res.json())
}
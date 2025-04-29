import {getUrlDummy, getUrlJson} from "../constants/urls.ts";
import {IUsers} from "../models/JsonPlaceholder/IUser.ts";
import {IUserDummy, IUsersDummy} from "../models/DummyJson/IUser.ts";
import {IPosts} from "../models/JsonPlaceholder/IPost.ts";
import {IComments} from "../models/JsonPlaceholder/IComment.ts";
import {ICommentDummy, ICommentsDummy} from "../models/DummyJson/IComment.ts";
import {IPostDummy, IPostsDummy} from "../models/DummyJson/IPost.ts";

export const getFromJsonPl = {
    users: async (): Promise<IUsers> => {
        return await fetch(getUrlJson.users).then(res => res.json());
    },
    posts: async (): Promise<IPosts> => {
        return await fetch(getUrlJson.posts).then(res => res.json());
    },
    comments: async (): Promise<IComments> => {
        return await fetch(getUrlJson.comments).then(res => res.json());
    }

}

export const getFromDummy = {
    users: async (): Promise<IUserDummy[]> => {
        const res: IUsersDummy = await fetch(getUrlDummy.users).then(res => res.json());
        return res.users;
    },
    comments: async (): Promise<ICommentDummy[]> => {
        const res: ICommentsDummy = await fetch(getUrlDummy.comments).then(res => res.json());
        return res.comments
    },
    posts: async (): Promise<IPostDummy[]> => {
        const res: IPostsDummy = await fetch(getUrlDummy.posts).then(res => res.json());
        return res.posts;
    },
}


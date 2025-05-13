import {IUsersResponse} from "../models/IUsersResponse.ts";

const url = "https://dummyjson.com/users"

export const getPaginatedUsers =async (pageNumber: string) : Promise<IUsersResponse>=>{
const skip = (+pageNumber - 1)*30;
    return await fetch(url + `?skip=${skip}`).then((res) => res.json());
}
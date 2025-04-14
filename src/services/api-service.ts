
import {IQuotes} from "../models/IQuotes.ts";

export const getQuotes =async (): Promise<IQuotes> => {
    return await fetch('https://dummyjson.com/quotes').then((res) => res.json());
}

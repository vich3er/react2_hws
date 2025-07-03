import {IPost} from "../../models/IPost.ts";
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";

type postsInitialStateType = {
    posts: IPost[];
    isLoadingPosts: boolean;
}

const postsInitialState: postsInitialStateType = {
    posts: [], isLoadingPosts: false
}
export const postsSlice = createSlice({
    name: "postsSlice",
    initialState: postsInitialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(loadPosts.fulfilled, (state, action: PayloadAction<IPost[]>) => {
            state.posts = action.payload;
            state.isLoadingPosts = false;
        })
        builder.addCase(loadPosts.pending, (state) => {
            state.isLoadingPosts = true;
        })
    }
})


const loadPosts = createAsyncThunk(
    'postsSlice/loadPosts',
    async (_, thunkAPI) => {
        try {
            const posts = await fetch('http://jsonplaceholder.typicode.com/posts').then(res => res.json())
            return thunkAPI.fulfillWithValue(posts)
        } catch (error) {
            console.error(error);
            return thunkAPI.rejectWithValue(error);
        }
    }
)


export const postsSliceActions = {
    ...postsSlice.actions, loadPosts
}
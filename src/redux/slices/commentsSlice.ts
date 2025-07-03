import {IComment} from "../../models/IComment.ts";
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";

type commentsInitialStateType = {
    comments: IComment[];
    isLoadingComments: boolean;
}

const commentsInitialState: commentsInitialStateType = {
    comments: [],
    isLoadingComments: false,
}

export const commentsSlice = createSlice({
    name: "commentsSlice",
    initialState: commentsInitialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(loadComments.fulfilled, (state, action: PayloadAction<IComment[]>) => {
            state.comments = action.payload;
            state.isLoadingComments= false;
        })
        builder.addCase(loadComments.pending, (state, action) => {
            state.isLoadingComments =  true
        })
    }
})

const loadComments = createAsyncThunk(
    'comments/loadComments',
    async (_, thunkAPI) => {
        try {
            const comments = await fetch( 'https://jsonplaceholder.typicode.com/comments').then((response) => response.json());
            console.log(comments);
            return thunkAPI.fulfillWithValue(comments);
        } catch (error) {
            console.error(error);
            return thunkAPI.rejectWithValue(error);
        }
    }
)


export const commentsSliceActions = {
    ...commentsSlice.actions, loadComments
}


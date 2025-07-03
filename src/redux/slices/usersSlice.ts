import {IUser} from "../../models/IUser.ts";
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";

type usersInitialStateType = {
    users: IUser[]; isLoadingUsers: boolean;
}

const usersInitialState: usersInitialStateType = {
    users: [], isLoadingUsers: false,
}

export const usersSlice = createSlice({
    name: "usersSlice",
    initialState: usersInitialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(loadUsers.fulfilled, (state, action: PayloadAction<IUser[]>) => {
            state.users = action.payload;
            state.isLoadingUsers = false;
        })
        builder.addCase(loadUsers.pending, (state) => {
            state.isLoadingUsers = true;
        })
    }
})

const loadUsers = createAsyncThunk(
    'usersSlice/loadUsers',
    async (_, thunkAPI) => {
        try {
            const users = await fetch('https://jsonplaceholder.typicode.com/users')
                .then(value => value.json());

            return thunkAPI.fulfillWithValue(users);
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
)


export const usersSliceActions = {
    ...usersSlice.actions, loadUsers
}
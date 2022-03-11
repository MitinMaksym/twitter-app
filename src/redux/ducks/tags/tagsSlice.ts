import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Tag = {
    tagTitle: string;
    tweetsCount: number;
};

type InitialState = {
    items: Tag[];
    loading: boolean
};

const initialState = {
    items: [],
    loading: false,
} as InitialState;

const tagsSlice = createSlice({
    name: "tags",
    initialState,
    reducers: {
        fetchTags(state) {
            state.loading = true;
        },
        setTags(state, action: PayloadAction<Tag[]>) {
            state.items = action.payload;
        },
        setLoading(state, action: PayloadAction<boolean>) {
            state.loading = action.payload;
        },
    },
});

export const { fetchTags, setTags, setLoading } = tagsSlice.actions;

export default tagsSlice.reducer;
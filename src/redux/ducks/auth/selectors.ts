import { RootState } from "../../rootReducer";

export const selectAuthenticated = (state:RootState) => state.auth.authenticated
export const selectLoading = (state:RootState) =>state.auth.loading
export const selectUserData = (state:RootState) =>state.auth.user
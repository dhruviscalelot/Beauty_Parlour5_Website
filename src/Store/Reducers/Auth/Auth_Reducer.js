import { createAsyncReducer } from "../../Helpers/AsyncReducerHelper";
import { AUTH } from "../../Helpers/Type";

// Each reducer is just one line
export const LoginReducer = createAsyncReducer(AUTH.LOGIN);

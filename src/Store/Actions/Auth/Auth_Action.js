import { createAsyncAction } from "../../Helpers/AsyncActionHelper";
import * as AuthServices from "../../../Services/Services";
import { AUTH } from "../../Helpers/Type";

export const login = createAsyncAction(AuthServices.login, AUTH.LOGIN);

import { createAsyncReducer } from "../../Helpers/AsyncReducerHelper";
import { GENERAL } from "../../Helpers/Type";

export const SubmitInquiryReducer = createAsyncReducer(GENERAL.SUBMIT_INQUIRY);
export const GetHomeDataReducer = createAsyncReducer(GENERAL.GET_HOME_DATA);

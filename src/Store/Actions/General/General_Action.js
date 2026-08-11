import { createAsyncAction } from "../../Helpers/AsyncActionHelper";
import * as Services from "../../../Services/Services";
import { GENERAL } from "../../Helpers/Type";

export const submitInquiry = createAsyncAction(Services.submitInquiry, GENERAL.SUBMIT_INQUIRY);
export const getHomeData = createAsyncAction(Services.getHomeData, GENERAL.GET_HOME_DATA);

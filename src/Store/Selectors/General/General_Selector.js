import { useMemo } from "react";
import { useSelector } from "react-redux";

export const getHomeData = (state) => state.GetHomeDataReducer.payload.Data;

export const useHomeData = () => {
    const list = useSelector(getHomeData);
    return useMemo(() => list || [], [list])
};
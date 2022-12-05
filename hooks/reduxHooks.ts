import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";

import type { RootState, AppDispatch } from "../store/store";

//Making new hooks by passing the types to the regular redux hooks
export const useAppDispatch = () => useDispatch<AppDispatch>();

// Aliasing the fuction with the correct type
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;




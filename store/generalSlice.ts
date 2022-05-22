import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./";
import { InterfaceAlertProps } from "native-base/lib/typescript/components/composites/Alert/types";

interface GlobalNotificationState {
  message: string;
  visible: boolean;
  type: InterfaceAlertProps["status"];
}

export interface GeneralState {
  globalNotification: GlobalNotificationState;
}

export const initialState: GeneralState = {
  globalNotification: {
    message: "",
    type: "error",
    visible: false,
  },
};

export const generalSlice = createSlice({
  name: "general",
  initialState,
  reducers: {
    updateGlobalNotification(state, action: PayloadAction<GlobalNotificationState>) {
      state.globalNotification = action.payload;
    },
  },
});

export const { updateGlobalNotification } = generalSlice.actions;

export const selectGlobalNotification = (state: RootState) => state.general.globalNotification;

export default generalSlice.reducer;

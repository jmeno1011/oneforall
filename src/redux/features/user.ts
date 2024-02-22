import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'
import { IuserInfo, IuserList, IuserRowList } from "../../types/user";


export interface UserState {
  userList: IuserList[] | null;
  userRowList: IuserRowList[] | null;
  userInfo: IuserInfo | null;
}

const initialState: UserState = {
  userList: null,
  userRowList: null,
  userInfo: null
}

export const user = createSlice({
  name: 'user',
  initialState,
  reducers: {
    settingUserlist: (state, action: PayloadAction<IuserList[]>) => ({
      ...state,
      userList: action.payload
    }),
    settingUserRowlist: (state, action: PayloadAction<IuserRowList[]>) => ({
      ...state,
      userRowList: action.payload
    }),
    settingUserInfo: (state, action: PayloadAction<IuserInfo>) => ({
      ...state,
      userInfo: action.payload
    })
  }
})

export const { settingUserlist, settingUserRowlist, settingUserInfo } = user.actions;
export default user.reducer;
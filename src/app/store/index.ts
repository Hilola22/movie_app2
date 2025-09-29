import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from '@/features/auth'
import { bookMarkSlice } from '../../features/bookmark'

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    bookmark: bookMarkSlice.reducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
import { configureStore } from '@reduxjs/toolkit'
import Messages from './Messages'

const store =  configureStore({
  reducer: {
    messages: Messages
  },
})

export default store;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
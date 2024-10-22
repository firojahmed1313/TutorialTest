import { configureStore } from '@reduxjs/toolkit'
import counterR from './testSlice.js'

export const store = configureStore({
  reducer: {
    counter: counterR,
  },
})
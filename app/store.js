import { configureStore } from '@reduxjs/toolkit'
import wordReducer from '../features/word/allWordSlice'

export default configureStore({
  reducer: {
    word: wordReducer
  }
})

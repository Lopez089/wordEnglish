import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import firebase from 'firebase/app'
import 'firebase/firestore'

export const getAllWord = createAsyncThunk(
  'word/getWordAll',
  async () => {
    return firebase.firestore().collection(process.env.NEXT_PUBLIC_COLLECTION).get()
      .then(querySnapshot => {
        console.log('funciona')
        const AllWordGetDB = []
        querySnapshot.forEach((doc) => {
          const newState = {
            id: doc.id,
            data: doc.data()
          }
          AllWordGetDB.push(newState)
        })
        return AllWordGetDB
      }

      )
  }
)

export const wordSlice = createSlice({
  name: 'word',
  initialState: {
    AllWord: []
  },
  reducers: {},
  extraReducers: {
    [getAllWord.fulfilled]: (state, action) => {
      state.AllWord = action.payload
    }
  }
})

export default wordSlice.reducer

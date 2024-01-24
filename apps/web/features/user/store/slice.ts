import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { User } from '../types'
import { fetchUserData } from '../api'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '@/store'

const initialState: User = {
    name: null,
    isSignedIn: false
}

export const userDataThunk = createAsyncThunk(
    'user/fetchUserData',
    fetchUserData
)

const userSlicer = (initState: User) =>
    createSlice({
        name: 'user',
        initialState: initState || initialState,
        reducers: {
            login: (state: User, action: PayloadAction<string>) => {
                state.name = action.payload
                state.isSignedIn = true
            },
            logout: (state: User) => {
                state.name = null
                state.isSignedIn = false
            }
        },
        extraReducers: (builder) => {
            builder.addCase(userDataThunk.fulfilled, (state, action) => {
                console.log(action, 'fulfilled')
                if (action.payload) {
                    state.name = action.payload
                    state.isSignedIn = true
                } else {
                    state.isSignedIn = false
                }
            })
            builder.addCase(userDataThunk.pending, (state) => {
                console.log(state, 'pending')
                state.isSignedIn = false
            })
            builder.addCase(userDataThunk.rejected, (state) => {
                console.log(state, 'rejected')
                state.isSignedIn = false
            })
            builder.addDefaultCase((state) => {
                // console.log(state, 'addDefaultCase')
            })
            // console.log(builder)
        }
    })

const generateUserSlice = (initState: User) => {
    return userSlicer(initState).reducer
}

export const userSlice = userSlicer(initialState)

export const { login, logout } = userSlice.actions

// selector
export const selectorUserData = (state: RootState) => state.user

export default generateUserSlice

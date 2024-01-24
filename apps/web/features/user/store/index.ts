import { configureStore } from '@reduxjs/toolkit'
import generateUserSlice from './slice'
import { User } from '../types'

export const store = (states: User) => {
    return configureStore({
        reducer: {
            user: generateUserSlice(states)
        }
    })
}
export default store

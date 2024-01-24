'use client'
import React, { FC } from 'react'

import { Provider } from 'react-redux'

import { ReactNode } from 'react'

import {
    configureStore,
    createSlice,
    ThunkAction,
    Action,
    combineReducers
} from '@reduxjs/toolkit'

import store from './index'
import { fetchUserData } from '@/features/user/api'
import { login, logout } from '@/features/user/store/slice'
type ReduxProviderType = {
    children: ReactNode
    arg?: {}
}
const UserProvider = async ({ children }: { children: ReactNode }) => {
    const res = await fetch('https://dummyjson.com/products/1')
    const result = await res.json()
    const kk = {
        name: result.title
    }

    const newChildren = React.isValidElement(children)
        ? React.cloneElement(children, kk) // childreのprops拡張
        : children

    return <>{newChildren}</>
}
export default UserProvider

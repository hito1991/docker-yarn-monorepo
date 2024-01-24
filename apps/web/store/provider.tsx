'use client'
import React, { useEffect } from 'react'
import { ReactNode } from 'react'
import { Provider } from 'react-redux'

import { User } from '@/types/user'

// import { useAppDispatch } from '@/store/hooks'
import store from '@/store'
import { fetchUserData } from '@/features/user/api'
import { login, logout } from '@/features/user/store/slice'

type ReduxProviderType = {
    children: ReactNode
    arg?: string | undefined
}
const ReduxProvider = async ({ children, arg }: ReduxProviderType) => {
    // console.log(store.getState()['user'])

    return <Provider store={store}>{children}</Provider>
}

export default ReduxProvider

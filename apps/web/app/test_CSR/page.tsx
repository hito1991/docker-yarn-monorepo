'use client'

import React, { FC, useRef, useState } from 'react'
import HeaderContainer from '@/components/layout/header/Container'
import TestComponent from '@/components/TestComponent'

import { userDataThunk, selectorUserData } from '@/features/user/store/slice'

import { useAppDispatch, useAppSelector } from '@/store/hooks'

const Test: FC = () => {
    const tt = useAppSelector(selectorUserData)
    // console.log(tt)
    // userDataThunk()
    return (
        <>
            <HeaderContainer />
            <TestComponent />
        </>
    )
}
export default Test

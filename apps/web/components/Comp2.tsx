// 'use client'

import React, { FC, memo } from 'react'
import El from "@mono/ui/elements/el"

import { useDispatch, useSelector } from 'react-redux'
import HeaderContainer from '@/components/layout/header/Container'

interface Data {
    id: number
    title: string
}

const Comp2: FC = memo(async () => {
    // const sss = useSelector((state) => state.user)
    const num = Math.floor(Math.random() * (10 - 1) + 1)
    const res = await fetch(`https://dummyjson.com/products/2`, {
        cache: 'no-store'
    })
    const result = await res.json()
    // console.log(sss)
    return <>
        <El></El>
        <div>{result.title}</div>
    </>
})
export default Comp2

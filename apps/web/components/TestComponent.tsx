'use client'

import React, { FC, useEffect, useRef, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import HeaderContainer from '@/components/layout/header/Container'

interface pData {
    front_default: string
}
interface Data {
    id: number
    title: string
    name: string
    sprites: pData
}

const TestComponent: FC = () => {
    // console.log(item)
    const refEfectRun = useRef(false)

    // const sss = useSelector((state) => state.user)
    // console.log(sss)

    const [data, setData] = useState<Data | null>(null)

    const [productID, setProductID] = useState<number | null>(null)

    const fetchData = async () => {
        try {
            const num = Math.floor(Math.random() * (150 - 1) + 1)
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${num}/`)
            const result = await res.json()
            setData(result)
            setProductID(result.id)
            // console.log(result)
        } catch {
        } finally {
        }
    }

    useEffect(() => {
        if (!refEfectRun.current) fetchData()
        return () => {
            refEfectRun.current = true
        }
    }, [])
    // if (!productID) return ''
    return (
        <div>
            {/* <HeaderContainer /> */}
            <h1>Test CSR page です</h1>
            <p>{data?.name}</p>
            <img src={data?.sprites.front_default} alt='' />
        </div>
    )
}
export default TestComponent

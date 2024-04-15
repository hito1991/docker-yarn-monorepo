import React, { FC, useEffect, memo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { fetchUserData } from '@/features/user/store/slice'

import Link from 'next/link'
import { User } from '@/features/user/types'
const Header: FC = memo(() => {
    // console.log(props)
    // const dispatch = useDispatch()
    // const sss = await useSelector((state: any) => state.user)
    // console.log(props)

    // const ttt = await fetchUserData()

    // const res = await fetch('https://dummyjson.com/products/1')
    // const result = await res.json()

    // console.log(result)

    const style = {
        padding: '15px',
        border: 'solid 1px #fff'
    }
    return (
        <>
            <header className='bg-white'>
                <div className='flex items-center justify-between bg-white h-[53px] px-[15px]'>
                    <div className='w-[62px] h-[25px]'>
                        <Link className='flex h-full' href='/'>
                            TOP
                            {/* <img src={result.thumbnail} alt='logo' /> */}
                        </Link>
                    </div>
                    <div className='flex items-center'>
                        <div className='px-[10px]'>search</div>
                        <div className='px-[10px]'>login</div>
                        <div className='px-[10px]'>resister</div>
                        <div className='px-[10px]'>menu</div>
                    </div>
                </div>

                <Link href='/test_CSR/' style={style}>
                    CSR
                    {/* <a style={style}>CSR</a> */}
                </Link>
                <Link href='/test_SSR/' style={style}>
                    SSR
                    {/* <a style={style}>SSR</a> */}
                </Link>
                <Link href='/test_SSG/' style={style}>
                    SSG
                    {/* <a style={style}>SSG</a> */}
                </Link>
            </header>
        </>
    )
})
export default Header

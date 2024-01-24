import React, { FC } from 'react'

import Header from './Header'
import UserProvider from '@/features/user/store/provider'

const HeaderContainer: FC = async (props) => {
    // await store.dispatch(login(ttt))
    // console.log(ttt)
    // console.log(props)
    return (
        <>
            <Header />
        </>
    )
}
export default HeaderContainer

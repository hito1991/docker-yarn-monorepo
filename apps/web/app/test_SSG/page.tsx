import React, { FC } from 'react'
import HeaderContainer from '@/components/layout/header/Container'

export default async function Page() {
    // const num = Math.floor(Math.random() * (150 - 1) + 1)
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/151/`, {
        cache: 'force-cache'
    })
    //{cache: 'force-cache'} でキャッシュあり
    const result = await res.json()

    // const pp = await fetch(`http://172.25.50.200:8080/time`, {
    //     cache: 'no-store'
    // })
    // const ppp = await pp.json()
    return (
        <div>
            <HeaderContainer />
            <h1>Test SSG? ssr? page</h1>
            {/* <div>{ppp.time}</div> */}
            <p>{result.name}</p>
            <img src={result.sprites.front_default} alt='' />
            {/* <p>{res.status}</p> */}
        </div>
    )
}
// export default Test

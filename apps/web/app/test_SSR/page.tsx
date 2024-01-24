import React, { FC } from 'react'
import { Metadata, ResolvingMetadata } from 'next'

import HeaderContainer from '@/components/layout/header/Container'
import Comp2 from '@/components/Comp2'
// type Props = {
//     params: { id: string }
//     searchParams: { [key: string]: string | string[] | undefined }
// }
// export async function generateMetadata(
//     { params, searchParams }: Props,
//     parent: ResolvingMetadata
// ): Promise<Metadata> {
//     return {
//         title: 'ssr',
//         openGraph: {
//             images: ['/some-specific-page-image.jpg']
//         }
//     }
// }

export const dynamic = 'force-dynamic'
// export const fetchCache = 'force-no-store'

export default async function Page() {
    // await new Promise((resolve) => setTimeout(resolve, 1000))
    const num = Math.floor(Math.random() * (10 - 1) + 1)
    let res, result
    // try {
    //     res = await fetch(`http://172.25.50.200:8080/time`, {
    //         cache: 'no-store'
    //     })
    //     result = await res.json()

    //     console.log(res, result)
    // } catch (err) {
    //     console.log(err, 'err')
    // }

    // const result = await res.json()
    console.log('SSR render')

    return (
        <>
            <HeaderContainer />
            <div>
                <h1>Test SSR page</h1>
                <p>{result?.time}</p>
                {/* <p>{res.status}</p> */}
                {/* <p>{result.title}</p>
                <img src={result.thumbnail} alt='' /> */}
                <Comp2 />
            </div>
        </>
    )
}
// export default Test

'use client'

import React, { FC, useEffect, useRef, useState } from 'react'
import HeaderContainer from '@/components/layout/header/Container'
import TestComponent from '@/components/TestComponent'

import { userDataThunk, selectorUserData } from '@/features/user/store/slice'

import { useAppDispatch, useAppSelector } from '@/store/hooks'



const compress = async (target: string): Promise<string> => {
    const arrayBufferToBinaryString = (arrayBuffer: ArrayBuffer): string => {
      const bytes = new Uint8Array(arrayBuffer);

      let binaryString = "";
      for (let i = 0; i < bytes.byteLength; i++) {
        binaryString += String.fromCharCode(bytes[i]);
      }

      return binaryString;
    };

    const blob = new Blob([target]);
    const stream = blob.stream();
    const compressedStream = stream.pipeThrough(
      new CompressionStream("deflate-raw")
    );

    const buf = await new Response(compressedStream).arrayBuffer();

    const binaryString = arrayBufferToBinaryString(buf);
    const encodedByBase64 = btoa(binaryString);
    return encodedByBase64;
}

const decompress = async (target: string): Promise<string> => {
    const binaryStringToBytes = (str: string): Uint8Array => {
        const bytes = new Uint8Array(str.length);
        for (let i = 0; i < str.length; i++) {
            bytes[i] = str.charCodeAt(i);
        }
        return bytes;
    };

    const decodedByBase64 = atob(target);
    const bytes = binaryStringToBytes(decodedByBase64);

    const stream = new Blob([bytes]).stream();

    const decompressedStream = stream.pipeThrough(
        new DecompressionStream("deflate-raw")
    );

    return await new Response(decompressedStream).text();
}

const Test: FC = () => {
    const tt = useAppSelector(selectorUserData)
    const [str,setStr]= useState('')

    const orgStr = "AWARDおめでとうございます!!🎉\n約1年ほど前から作品を読ませていただいているのですが、子供ながら夫のくずっぷりでムカムカしているところからの最後のどんでん返しが見ていてとてもスカッとして、読み終わると次回の更新が待ち遠しくなります。\nまだ成人してもないので浮気や不倫をされた人の気持ちはわからないですが大人になってもし漫画のようなことがあれば、この作品の女性たちをお手本にして仕返しをできるよう予習しておきます。\n改めてAWARDおめでとうございます！\nこれからもお仕事頑張ってください!!!";
    // console.log(tt)
    // userDataThunk()
    const ny = async()=>{
        const decompressed = await decompress(str)
        console.log(decompressed)
    }
    const tttt = async()=>{
        const compressed = await compress(orgStr)
        setStr(compressed)
    }
    // useEffect(()=>{
    //     tttt()
    // },[])



    useEffect(()=>{
        if(str){
            setTimeout(()=>{
                ny()
            },2000)
        }
    },[str])

    return (
        <>
            <button onClick={tttt}>tttt</button>
            <HeaderContainer />
            <TestComponent />
        </>
    )
}
export default Test

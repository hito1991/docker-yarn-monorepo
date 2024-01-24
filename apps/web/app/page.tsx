// import Image from 'next/image'
import styles from './page.module.css'
import HeaderContainer from '@/components/layout/header/Container'

export default function Home() {
    return (
        <>
            <HeaderContainer />
            <main className={styles.main}>
                <div className={styles.description}>
                    {/* <p>
                        Get started by editing&nbsp;
                        <code className={styles.code}>app/page.tsx</code>
                    </p> */}
                    <a href='./test_CSR'>test_CSR</a>
                    <a href='./test_SSR'>test_SSR</a>
                    <a href='./test_SSG'>test_SSG</a>
                </div>
            </main>
        </>
    )
}

import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })
import { useRouter } from 'next/router'
export default function Home() {
  const router = useRouter();
  return (
    <div>
      <h1>Hello {router.query.name? `Hello, ${router.query.name}` : "I Dont know Your Name"}</h1>
    </div>
  )
}

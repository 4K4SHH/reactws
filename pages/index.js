import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })
import { useRouter } from 'next/router'
export default function Home() {
  const router = useRouter();
  const [name, setName] = useState("")
  return (
    <div>
      <input type="text" onChange={(event) => setName(event.target.value)} placeholder='Name'/>
      <h1>{name? `Hello, ${name}` : "I Dont know Your Name"}</h1>
    </div>
  )
}

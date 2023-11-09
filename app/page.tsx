import type { Metadata } from 'next'
import Link from 'next/link'
import './globals.css'

export const metadata: Metadata = {
  title: 'home page :3'
}

export default function FirstPost() {
  return <center>
      <div style={{minHeight: "120px"}}>
        <h2>♡ hiiii! this is <span style={{color:"hotpink", fontSize: "40px"}}>prinetta</span>'s epic website ♡</h2>
        <img src="images/layout/naoto.gif" alt="a very cool character dancing" width="13%" className="fade-in"/>

        <br/>
        <Link href="/art">Art</Link><br/>
        <Link href="/lolita">Lolita fashion</Link>
      </div>
    </center>
}
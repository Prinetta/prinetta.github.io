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
        everything is VERY much work in progress right now. most subpages don't exist yet or don't have full styling yet. 
        expect tons of random bugs to crop up (+ console.log statements LOL). right now my goal is to finish the main pages for lolita and art and hopefully 
        replace a lot of the assets with self-drawn ones. i do use some of my real art already but most of it are just messy sketches that will be worked over.<br/>
        if you have any questions, feel free to contact me on github (github.com/prinetta) {"<3 ^__^"} <br/>
        one day i will have more information about myself and this site ♡♡
        <br/>
        <Link href="/art">Art</Link><br/>
        <Link href="/lolita">Lolita fashion</Link>
      </div>
    </center>
}
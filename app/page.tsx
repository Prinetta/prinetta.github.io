import type { Metadata } from 'next'
import Link from 'next/link'
import './globals.css'
import styles from "./styles.module.css"

export const metadata: Metadata = {
  title: 'home page :3'
}

export default function FirstPost() {
  return <center>
      <div style={{minHeight: "120px", padding: "3% 30%"}}>
        <h2>♡ hiiii! this is <span style={{color:"hotpink", fontSize: "40px"}}>prinetta</span>'s epic website ♡</h2>
        <img src="images/layout/naoto.gif" alt="a very cool character dancing" width="30%" className="fade-in"/>
        <br/>
        everything is VERY much work in progress right now. most subpages don't exist yet or don't have full styling yet.
        expect tons of random bugs to crop up (+ console.log statements LOL). <br/>additionally, this site is best viewed on a pc with a chromium based browser.
        <br/>more compability will follow later!
        <br/>right now my goal is to finish the main pages for lolita and art and hopefully 
        replace a lot of the assets with self-drawn ones. i do use some of my real art already but most of it are just messy sketches that will be worked over.<br/>
        my most worked on page is the <Link href="/lolita/wardrobe" style={{color: 'hotpink', textDecoration: "black underline"}}>wardrobe-page</Link>. please check it out if you like EGL !
        if you have any questions, feel free to contact me on github (github.com/prinetta) {"<3 ^__^"} <br/>
        <br/>
        <nav className='flex flex-col'>
          <Link href="/art" className={styles["nav-button"]}>♡ Art ♡</Link>
          <Link href="/lolita" className={styles["nav-button"]}>♡ Lolita fashion ♡</Link>          
        </nav>
      </div>
    </center>
}
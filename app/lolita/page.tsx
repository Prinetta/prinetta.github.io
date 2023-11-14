import Link from 'next/link';
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'lolita fashion !'
}

export default function FirstPost1() {

  return <>
    <div className="bg">
      <div className="main">
        <h1>introduction</h1>
        hello! welcome to my little corner of EGL fashion ♡♡<br/>
        i've always admired lolita fashion from afar but after moving out and getting my first job,
        i realized <i>i</i> could wear lolita fashion too!<br/><br/>
        
        i've only been wearing it for about half a year and there's still much to learn but this hobby has grown quite dear to me
        which is why i wanted to dedicate a special place to it!<br/><br/>

        ~ a little bit about me ~<br/>
        styles: sweet & gothic<br/>
        for sweet i immediately fell in love with the sugary overload OTT aesthetic of the 2010s. other than that i also love the cozy feeling of old school & kajurori very much!<br/><br/>
        favourite brands: <br/>
        baby the stars shine bright ✩ˎˊ˗<br/>
        the soft cotton, the sweet watercolor-style illustrations, the kumyas.... 
        BTSSB will always be my comfort zone, it's the sweetest and softest in my heart and it will always be tough for me to part with any of their dresses !<br/><br/>
        angelic pretty ୨♡୧<br/>
        older angelic pretty is a pink & ruffle overload, they nailed the aesthetic perfectly and i especially love them for my OTT styles!
        i'm also a really big fan of their cutsews, boleros & parkas for a more casual styles.<br/>
        my favourite AP period is 2006 - 2009 ! though the prints they released right after, perfectly fit for OTT, are still a huge want on my wish list ♡<br/><br/>
        for gothic i do really like newer styles but my favourite will always be the sharp, clear cut look with huge platform heels.<br/>
        this is why i absolutely love old moitie (THE egl/ega style) and atelier boz. in some ways the designs are so simple but something about it makes it so striking. 
        <br/><br/><br/>

        <Link href="/lolita/wardrobe">my wardrobe</Link>
        <a href="coords.html">pictures</a>
        <a href="wishlist.html">wish list</a>
        <a href="dressup.html">lolita dress up :3</a>
        <br />
        <br />
        <Link href="/">home</Link>
      </div>
    </div>

    <Link href="/art">Art</Link>
  </>;
}
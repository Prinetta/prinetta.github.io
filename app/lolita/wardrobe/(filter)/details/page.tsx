'use client'

import FullWidthImage from '../../../../components/FullWidthImage'
import ItemDetails from './ItemDetails'
import styles from './styles.module.css'

export default function PageOverview(){
  return <div 
  className='flex flex-row'>
    <FullWidthImage src="/images/layout/objects/cross.png" style={styles["cross"]} height={'200px'}/>
    <div className={styles["scroll-box"]}>
      <LongText/>
      <ItemDetails/>
    </div>
    <div className={styles["item-frame"]}>
        <div className={styles["frame-background"]}/>
        <FullWidthImage src="/images/lolita/dresses/1.png" style={"item-details"} height={'300px'}/>
      </div>
    <div>

      <button>back to wardrobe</button>
    </div>

  </div>
}

function LongText(){  
  return <p className={styles["item-details"]}>
Lyrics: Mitchie M & ЯIRE
Music: Mitchie M

View romaji/english lyrics
New Feature! Mouseover a kanji character for lookup information!

心ごと体ごと　全部記憶の中の幻
本当の愛情が　指先から流れ出した

遠くから見ていたの　悲しそうな君の Face
空の涙と同じね　大粒の雨が溢れ出す

不意に気付いた視線　ハッと息を潜めた
ひんやりと冷たい手が　戸惑う君の頬に触れた

雑踏に飲み込まれ　忘れてしまった
温もりが優しさが走る

心ごと体ごと　全部記憶の中の幻
本当の愛情が　指先から流れ出した
顔上げて微笑めば　笑顔取り戻す魔法になる
こころ　Nock Nock Nock
不思議　Trick Trick Trick
生まれ変われる　（Wow Wow）
Freely Tomorrow

少し震えていたの　幼くなる君の Kiss
こんな恋知らないから　もう少し側で寄り添いたい

君の名前を呼べず　急に黙り込んだね
言葉にできない約束　時を越えて夢に見てた

暁に染まってく　星空のように
哀しみが苦しみが消える

心ごと体ごと　全部脱ぎ捨てたこの魂
無くしてた熱情が　指先から流れ出した
恐れずに求めれば　それは未来を変える Revolution
こころ　Nock Nock Nock
不思議　Trick Trick Trick
奇跡は起きる （Wow Wow）
Freely Tomorrow

心ごと体ごと　全部記憶の中の幻
本当の愛情が　指先から流れ出した
顔上げて微笑めば　笑顔取り戻す魔法になる
こころ　Nock Nock Nock
不思議　Trick Trick Trick
生まれ変われる　（Wow Wow）
Freely Tomorrow
  </p>
}
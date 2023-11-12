import Image from "next/image"

export default function FullWidthImage({src, style, height} : {src: string, style: string, height: string}){
  return <Image
    src={src}
    width={0}
    height={0}
    sizes="100vw"
    alt=""
    style={{ width: 'auto', height: height }}
    className={style}
  />
}
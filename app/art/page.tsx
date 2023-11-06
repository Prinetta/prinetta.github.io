import Image from 'next/image'
import Link from 'next/link'

export default function Page() {
  return <div className="bg">
  <div className="main">
    <h1>my art :3</h1>
    this is the test site to show off my art ! 

    here are some of the things i've drawn:<br/>
    <div className="flex justify-center space-x-10">
      <Image
        src="/images/art/gosurori.png" width={0} height={0} sizes="100vw" alt="" style={{ width: 'auto', height: '500px' }}
      />
      <Image
        src="/images/art/celeste.png" width={0} height={0} sizes="100vw" alt="" style={{ width: 'auto', height: '500px' }}
      />
    </div>

    <br/><br/>and here are some of my WIPs :3<br/>
    <div className="flex justify-center space-x-10">
      <Image
        src="/images/art/elizabeth.png" width={0} height={0} sizes="100vw" alt="" style={{ width: 'auto', height: '500px' }}
      />
      <Image
        src="/images/art/cecilia.png" width={0} height={0} sizes="100vw" alt="" style={{ width: 'auto', height: '500px' }}
      />
      <Image
        src="/images/art/nun.png" width={0} height={0} sizes="100vw" alt="" style={{ width: 'auto', height: '500px' }}
      />
    </div>
    <br/>as can be seen quite easily, i love lolita/j-fashion and religious imagery (crosses, cathedrals, angels) so obviously i combine them together &lt;3
    <br/>however i am soooo lazy with my art so it takes me forever to finish anything LOL

    <br/><br/>and also these are two of my favourite OCs ! ( they r like suicide angels .... ^__^ )<br/>
    <Image
        src="/images/art/ocs.png" width={0} height={0} sizes="100vw" alt="" style={{ width: 'auto', height: '500px' }}
    />
    <br />
    <Link href="/">home</Link>
  </div>
</div>
}
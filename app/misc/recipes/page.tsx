import Link from "next/link";

export default function RecipePage(){

  return <div>
    <h1>recipes... ?</h1>
    hiiii!! this site is supposed to be off limits as it just hosts all the recipes i like to make. most of them are not my own. <br/>
    i think it's just easier to host it on my own than use an app or something ^__^

    <br/><br/>
    <Link href={"/recipes/cooking/"}>cooking recipes</Link>
    <br/><br/>
    <Link href={"/recipes/baking/"}>baking recipes</Link>
  </div>
}
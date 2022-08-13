import { Fragment } from "react";
import Link from "next/link";

function News() {
  return <Fragment> 
    <div>News</div>
    <ul>
      <li> <a href='/news/next-here'> next here </a></li> 
      <li> <Link href='/news/next-there'> prev here</Link> </li>
    </ul>
  </Fragment>
}

export default News
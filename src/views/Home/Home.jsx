import React from 'react'

import { useSearchParams } from 'react-router-dom';
const GREATINGS =[
    "happy dipaval",
    "dipavali",
   " shub dipavali"
]
function Home() {
    <h1>home</h1>
    const [ searchParams] = useSearchParams();

    const to = searchParams.get("to");
    const from = searchParams.get("from");
    const greetingNumber = searchParams.get("g") >= GREATINGS.length ? 0 : searchParams.get("g") || 0 ;
  return (
    <div>
<h1>  dear {to} </h1>
<p> {GREATINGS[greetingNumber]} </p>
<h2> {from} </h2>

    </div>
  )
}

export default Home

import React from 'react';
import './Home.css'

import { useSearchParams } from 'react-router-dom';
const GREATINGS =[
    "Dipavalichy hardic shubhekchy",
    "Happy dipavali",
   " shub dipavali"
]

// localhost:3000/?to=santu&from=abhijeet&g=2


function Home() {
    <h1>home</h1>
    const [ searchParams] = useSearchParams();

    const to = searchParams.get("to");
    const from = searchParams.get("from");
    const greetingNumber = searchParams.get("g") >= GREATINGS.length ? 0 : searchParams.get("g") || 0 ;
  return (
    <div className='greeting-card'>
      <h1>Dipavali 🤪Greading Card</h1>
<h3>  dear {to} </h3>
<p> {GREATINGS[greetingNumber]} </p>
<h3 className='from-name'>Shubhekchuk: {from} </h3>

    </div>
  )
}

export default Home

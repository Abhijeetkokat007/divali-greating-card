import React from 'react';
import './Home.css'
import { useState,useEffect } from 'react';

import { useSearchParams } from 'react-router-dom';
const GREATINGS =[
    "एक दिवा लावु जिजाऊचरणी।  एक दिवा लावु शिवचरणी।एक दिवा लावु शंभुचरणी।आमचा इतिहास हीच आमची प्रतिष्ठा…..दिपावलीच्या हार्दिक शिवशुभेच्छा….आपल्या घरि सुख समाधान सदैवनांदो हिच जगदंबेचरणी प्रार्थना॥।। जय शिवराय ।।तुम्हाला व तुमच्या कुटुंबियांना दिवाळीच्या हार्दिक शुभेछा !!",
    "स्नेहाचा सुगंध दरवळला,आनंदाचा सण आला.विनंती आमची परमेश्वराला,सौख्य, समृध्दी लाभो तुम्हाला.दिवाळीच्या हार्दिक शुभेच्छा!",
   " सर्व मित्र परिवाराला … दीपावलीच्या धनदायी ,प्रकाशमय,चैतन्यदायी मंगलमय शुभेच्छा !!! दीपावलीच्या हार्दिक शुभेछा…"
]

// localhost:3000/?to=santu&from=abhijeet&g=2


function Home() {

  // const [to, setTo] = useState("");
  // const [from, setfrom] = useState("");
  // const [greetingNumber, setGreetingNumber] = useState("");
  // const [themeNumber, setThemeNumber] = useState("");


    <h1>home</h1>
    const [ searchParams] = useSearchParams();

    const to = searchParams.get("to");
    const from = searchParams.get("from");
    const greetingNumber = searchParams.get("g") >= GREATINGS.length ? 0 : searchParams.get("g") || 0 ;
    const themeNumber = searchParams.get("t");


  return (
    <>
    <div className={`greeting-card ${`theme-${themeNumber}`}`}>
      {/* <h1>Dipavali 🤪Greading Card</h1> */}

<img src='https://m.media-amazon.com/images/I/51wx84t3kFL._AC_UF894,1000_QL80_.jpg' className='img-akashkNdil' alt='akash kandil' />

<h3>  dear {to} </h3>
<p> {GREATINGS[greetingNumber]} </p>
<h3 className='from-name'>Shubhekchuk: {from} </h3>

    </div>

<h1> {import.meta.env.VITE_BASE_URL} </h1>
</>
  )
}

export default Home

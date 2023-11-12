import React from "react";
import "./Home.css";
import { useState, useEffect } from "react";
import akashkandil from "./../../../images/akashkzndil.png";
import { useSearchParams } from "react-router-dom";
const GREATINGS = [
  "एक दिवा लावु जिजाऊचरणी।  एक दिवा लावु शिवचरणी।एक दिवा लावु शंभुचरणी।आमचा इतिहास हीच आमची प्रतिष्ठा…..दिपावलीच्या हार्दिक शिवशुभेच्छा….आपल्या घरि सुख समाधान सदैवनांदो हिच जगदंबेचरणी प्रार्थना॥।। जय शिवराय ।।तुम्हाला व तुमच्या कुटुंबियांना दिवाळीच्या हार्दिक शुभेछा !!",
  "स्नेहाचा सुगंध दरवळला,आनंदाचा सण आला.विनंती आमची परमेश्वराला,सौख्य, समृध्दी लाभो तुम्हाला.दिवाळीच्या हार्दिक शुभेच्छा!",
  " सर्व मित्र परिवाराला … दीपावलीच्या धनदायी ,प्रकाशमय,चैतन्यदायी मंगलमय शुभेच्छा !!! दीपावलीच्या हार्दिक शुभेछा…",
];

// localhost:3000/?to=santu&from=abhijeet&g=2

function Home() {
  const [searchParams] = useSearchParams();
  const [to, setTo] = useState(searchParams.get("to"));
  const [from, setfrom] = useState(searchParams.get("from"));
  const [greetingNumber, setGreetingNumber] = useState(
    searchParams.get("g") >= GREATINGS.length ? 0 : searchParams.get("g") || 0
  );
  const [themeNumber, setThemeNumber] = useState(searchParams.get("t"));

  <h1>home</h1>;
  // const [ searchParams] = useSearchParams();

  // const to = searchParams.get("to");
  // const from = searchParams.get("from");
  // const greetingNumber = searchParams.get("g") >= GREATINGS.length ? 0 : searchParams.get("g") || 0 ;
  // const themeNumber = searchParams.get("t");

  return (
    <>
      <div className={`greeting-card ${`theme-${themeNumber}`}`}>
        {/* <h1>Dipavali 🤪Greading Card</h1> */}
      <div className="img-container">
        <img src={akashkandil} className="img-akashkNdil" alt="akash kandil" />
        <img src='https://www.editingcorp.com/wp-content/uploads/diwali-webite-lantern.png' className="img-flower" alt="akash kandil" />

        <img src={akashkandil} className="img-akashkNdil" alt="akash kandil" />
        </div>
        {/* <img src='https://cdn.imgbin.com/23/12/4/imgbin-diwali-diya-diwali-greetings-and-gold-ring-three-lighted-wax-candles-ZEvt9ffg5nSYeh4m4gMdRMpzH.png' className="img-akashkNdil" alt="akash kandil" /> */}
        <h3> प्रिय {to} </h3>
        <p className="text-greeting"> {GREATINGS[greetingNumber]} </p>
        <h3 className="from-name">शुभेच्छुक: {from} </h3>
      </div>

      <p className="text-card">
        {" "}
        Do You Want to Create Your Own Divali Greeting? Customize it here 👇👇👇{" "}
      </p>

      <h3
        className="link-card"
        onClick={() => {
          const url = `${
            import.meta.env.VITE_BASE_URL
          }?to=${to}&from=${from}&g=${greetingNumber}&t=${themeNumber}`;
          navigator.clipboard.writeText(url);
          alert(`Copied to clipbord:  ${url}`);
        }}
      >
        {import.meta.env.VITE_BASE_URL}?to={to}&from={from}&g={greetingNumber}
        &t={themeNumber}
      </h3>

      <div className="input-container">
        <input
          className="input-card"
          type="text"
          placeholder="to"
          value={to}
          onChange={(e) => {
            setTo(e.target.value);
          }}
        />

        <input
          className="input-card"
          type="text"
          placeholder="from"
          value={from}
          onChange={(e) => {
            setfrom(e.target.value);
          }}
        />

        <select
          className="input-card"
          value={greetingNumber}
          onChange={(e) => {
            setGreetingNumber(e.target.value);
          }}
        >
          <option value="0">Greeting 1 </option>
          <option value="1">Greeting 2 </option>
          <option value="2">Greeting 3 </option>
          <option value="3">Greeting 4 </option>
          <option value="4">Greeting 5 </option>
        </select>

        <select
          className="input-card"
          value={themeNumber}
          onChange={(e) => {
            setThemeNumber(e.target.value);
          }}
        >
          <option value="0">None</option>
          <option value="1">Greeting 1 </option>
          <option value="2">Greeting 2 </option>
          <option value="3">Greeting 3 </option>
          <option value="4">Greeting 4 </option>
          <option value="5">Greeting 5 </option>
        </select>
      </div>
    </>
  );
}

export default Home;

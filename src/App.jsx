import "./App.css";

import { useState } from "react";

import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import QuoteSeparator from "./components/QuoteSeparator";
import GetSessionIlustration from "./components/GetSessionIlustration";
import GetSessionCard from "./components/GetSessionCard";
import GetSessionSchedule from "./components/GetSessionSchedule";

function App() {
  const [data, setData] = useState([
    {
      id: 0,
      item: "experiencia",
      extra: {
        telefono: "54 11 5687-6574",
        titleBig: "la importancia de la salud mental",
        botontxt: "agenda tu consulta",
        quoteTxt: "la vida es como la vida",
      },
      card: {
        svg: "lorem",
        atencionTitle: "web",
        atencionTxt: "lorem",
      },
    },
    {
      id: 1,
      item: "servicios",
      extra: null,
      card: {
        svg: "lorem",
        atencionTitle: "prescencial",
        atencionTxt: "lorem",
      },
    },
    {
      id: 2,
      item: "ubicacion",
      extra: null,
      card: {
        svg: "lorem",
        atencionTitle: "telefonica",
        atencionTxt: "lorem",
      },
    },
  ]);

  return (
    <div className="App">
      <div className="full-page">
        <div className="container">
          <div className="hero--section">
            <NavBar data={data} />
            <Hero
              title={data[0].extra.titleBig}
              buttonTxt={data[0].extra.botontxt}
            />
          </div>
          <div className="cards--section">
            {data.map((item) => (
              <Card
                svg={item.card.svg}
                title={item.card.atencionTitle}
                txt={item.card.atencionTxt}
              />
            ))}
          </div>
          <div className="quoteSeparator--section">
            {/* svg w/ quote */}
            <QuoteSeparator qoute={data[0].extra.quoteTxt} />
          </div>
          <div className="getSession--section">
            <div className="getSession--left">
              <GetSessionIlustration />
            </div>
            {/* EVERY DIV THAT HAS CONTENT NEEDS TO BE A COMPONENT */}
            <div className="getSession--right">
              <GetSessionCard />
              <GetSessionSchedule />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

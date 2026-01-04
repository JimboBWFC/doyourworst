import { useMemo, useState } from "react";
import "./App.css";

import heroImg from "./assets/logo7.png";
import bannerImg from "./assets/banner1.png";
import cornerImg from "./assets/corner.png";

export default function App() {
  const [copied, setCopied] = useState(false);

  const CONTRACT_ADDRESS = "PASTE_CONTRACT_ADDRESS_HERE";

  const shortCA = useMemo(() => {
    if (!CONTRACT_ADDRESS || CONTRACT_ADDRESS.includes("PASTE_"))
      return "CA: (coming soon)";
    return `CA: ${CONTRACT_ADDRESS.slice(0, 6)}…${CONTRACT_ADDRESS.slice(-6)}`;
  }, []);

  const copyCA = async () => {
    if (!CONTRACT_ADDRESS || CONTRACT_ADDRESS.includes("PASTE_")) return;
    await navigator.clipboard.writeText(CONTRACT_ADDRESS);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  };

  return (
    <div className="page">
      {/* Corner stamp */}
      <img src={cornerImg} alt="Corner text" className="cornerImage" />

      {/* Background effects */}
      <div className="streaks" />
      <div className="grain" />

      <main className="wrap">
        {/* HERO */}
        <section
          className="hero"
          style={{ backgroundImage: `url(${bannerImg})` }}
        >
          <img src={heroImg} alt="Do Your Worst" className="heroImage" />

          <h1>
            DO YOUR <span>WORST</span>
          </h1>

          <p className="heroSub">
            A satirical meme token for people tired of the noise.
          </p>

          <div className="actions">
            <button onClick={copyCA}>
              {copied ? "Copied ✅" : "Copy Contract"}
            </button>
            <div className="ca">{shortCA}</div>
          </div>
        </section>

        {/* STATEMENT */}
        <section className="contentBlock">
          <p>
            Crypto didn’t get toxic overnight.
            <br />
            It got loud, tribal, and full of people pretending they’re in charge.
          </p>

          <p>
            Endless call groups. <br />
            Secret “alpha”. <br />
            Manufactured hype. <br />
            Public wins. Private exits.
          </p>

          <p>
            We’re not here to fight it. <br />
            We’re not here to lead it. <br />
            We’re just here to laugh at it.
          </p>
        </section>

        {/* KOL / CABAL POKE */}
        <section className="contentBlock highlight">
          <p>
            If you need permission to buy… <br />
            If you’re waiting for a KOL tweet… <br />
            If you’re scared of being on the wrong side of a cabal…
          </p>

          <p className="emphasis">
            This probably isn’t for you.
          </p>
        </section>

        {/* FOOTER STATEMENT */}
        <section className="contentBlock footerBlock">
          <p>
            No roadmap. <br />
            No promises. <br />
            No fake moral high ground.
          </p>

          <p className="footerTag">
            Just a meme. <br />
            Just a mirror. <br />
            Just… do your worst.
          </p>

          <p className="disclaimer">
            Commentary only. Not financial advice. Not connected to any other
            project.
          </p>
        </section>
      </main>
    </div>
  );
}



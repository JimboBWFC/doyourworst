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
    try {
      await navigator.clipboard.writeText(CONTRACT_ADDRESS);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch {
      // ignore
    }
  };

  return (
    <div className="page">
      <img src={cornerImg} alt="Corner text" className="cornerImage" />

      <div className="streaks" aria-hidden="true" />
      <div className="grain" aria-hidden="true" />

      <main className="wrap">
        <section className="hero" style={{ backgroundImage: `url(${bannerImg})` }}>
          <img src={heroImg} alt="Do Your Worst" className="heroImage" />

          <h1>
            DO YOUR <span>WORST</span>
          </h1>

          <p className="heroSub">
            A satirical meme token for people sick of the nastiness, the noise, and the “alpha” cosplay.
          </p>

          <div className="actions">
            <button onClick={copyCA}>{copied ? "Copied ✅" : "Copy Contract"}</button>
            <div className="ca">{shortCA}</div>
          </div>
        </section>

        <section className="contentBlock">
          <p>
            Crypto didn’t get toxic overnight.
            <br />
            It got loud, tribal, and full of people pretending they’re in charge.
          </p>

          <p>
            Endless call groups. Secret “alpha”. Manufactured hype.
            <br />
            Public wins. Private exits.
          </p>

          <p>
            We’re not here to fix it.
            <br />
            We’re here to point at it and laugh.
          </p>
        </section>

        <section className="contentBlock highlight">
          <p>
            If you need permission to buy…
            <br />
            If you’re waiting for a KOL tweet…
            <br />
            If you’re worried about the cabals…
          </p>

          <p className="emphasis">This probably isn’t for you.</p>
        </section>

        <section className="contentBlock footerBlock">
          <p>
            No roadmap. No promises. No fake moral high ground.
            <br />
            Just a meme. Just a mirror.
          </p>

          <p className="footerTag">Just… do your worst.</p>

          <p className="disclaimer">
            Commentary only. Not financial advice. Not connected to any other project.
          </p>
        </section>
      </main>
    </div>
  );
}





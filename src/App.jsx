import { useMemo, useState } from "react";
import "./App.css";

import heroImg from "./assets/logo7.png";
import bannerImg from "./assets/banner1.png";
import cornerImg from "./assets/corner.png";

export default function App() {
  const [copied, setCopied] = useState(false);

  // OPTIONAL: paste your real contract address when you have it
  const CONTRACT_ADDRESS = "PASTE_CONTRACT_ADDRESS_HERE";

  const shortCA = useMemo(() => {
    if (!CONTRACT_ADDRESS || CONTRACT_ADDRESS.includes("PASTE_")) return "CA: (coming soon)";
    return `CA: ${CONTRACT_ADDRESS.slice(0, 6)}…${CONTRACT_ADDRESS.slice(-6)}`;
  }, []);

  const copyCA = async () => {
    if (!CONTRACT_ADDRESS || CONTRACT_ADDRESS.includes("PASTE_")) return;
    try {
      await navigator.clipboard.writeText(CONTRACT_ADDRESS);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch {
      // ignore clipboard errors
    }
  };

  return (
    <div className="page">
      {/* Top-left corner stamp */}
      <img src={cornerImg} alt="Corner text" className="cornerImage" />

      {/* Background layers */}
      <div className="streaks" aria-hidden="true" />
      <div className="grain" aria-hidden="true" />

      <main className="wrap">
        {/* Banner hero */}
        <section className="hero" style={{ backgroundImage: `url(${bannerImg})` }}>
          {/* Main logo */}
          <img src={heroImg} alt="Do Your Worst" className="heroImage" />

          <h1>
            DO YOUR <span>WORST</span>
          </h1>

          {/* Funny/satirical copy */}
          <p className="tagline">
            A meme token that doesn’t pretend. No roadmap. No promises. No “next 100x” energy.
            <br />
            Every trader’s nightmare. Every degen’s dream.
          </p>

          <div className="actions">
            <button onClick={copyCA}>
              {copied ? "Copied ✅" : "Copy Contract"}
            </button>

            <div className="ca">{shortCA}</div>
          </div>

          <p className="disclaimer">
            Commentary only. Not financial advice. Not connected to any other project.
            <br />
            If you understand meme culture, this will make sense. If you don’t… probably don’t.
          </p>

          <div className="footerTag">Just… do your worst.</div>
        </section>
      </main>
    </div>
  );
}


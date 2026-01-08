// src/App.jsx
import { useEffect, useMemo, useState } from "react";
import "./App.css";

// ✅ Update these filenames if yours differ (jpg vs png etc.)
import bannerImg from "./assets/banner1.png";
import cornerImg from "./assets/corner.png";
import wowImg from "./assets/wow.png";

// Gallery (based on what you listed before)
import mad1 from "./assets/mad1.png";
import mad2 from "./assets/mad2.png";
import mad3 from "./assets/mad3.png";
import mad4 from "./assets/mad4.png";
import mad5 from "./assets/mad5.png";
import mad6 from "./assets/mad6.png";
import mad7 from "./assets/mad7.png";
import mad8 from "./assets/mad8.png";
import mad9 from "./assets/mad9.png";
import mad10 from "./assets/mad10.png";
import mad11 from "./assets/mad11.png";
import mad12 from "./assets/mad12.png";
import mad13 from "./assets/mad13.png";

const CONTRACT_ADDRESS = "PASTE_CONTRACT_ADDRESS_HERE";

export default function App() {
  const galleryImages = useMemo(
    () => [
      { src: mad1, alt: "DoYourWorst gallery image 1" },
      { src: mad2, alt: "DoYourWorst gallery image 2" },
      { src: mad3, alt: "DoYourWorst gallery image 3" },
      { src: mad4, alt: "DoYourWorst gallery image 4" },
      { src: mad5, alt: "DoYourWorst gallery image 5" },
      { src: mad6, alt: "DoYourWorst gallery image 6" },
      { src: mad7, alt: "DoYourWorst gallery image 7" },
      { src: mad8, alt: "DoYourWorst gallery image 8" },
      { src: mad9, alt: "DoYourWorst gallery image 9" },
      { src: mad10, alt: "DoYourWorst gallery image 10" },
      { src: mad11, alt: "DoYourWorst gallery image 11" },
      { src: mad12, alt: "DoYourWorst gallery image 12" },
      { src: mad13, alt: "DoYourWorst gallery image 13" },
    ],
    []
  );

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const [copied, setCopied] = useState(false);

  const openLightbox = (index) => {
    setActiveIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);

  const prevImage = () =>
    setActiveIndex((i) => (i - 1 + galleryImages.length) % galleryImages.length);

  const nextImage = () =>
    setActiveIndex((i) => (i + 1) % galleryImages.length);

  const copyAddress = async () => {
    try {
      await navigator.clipboard.writeText(CONTRACT_ADDRESS);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1400);
    } catch {
      // fallback: do nothing
      setCopied(false);
    }
  };

  // Keyboard controls for lightbox
  useEffect(() => {
    if (!lightboxOpen) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "ArrowRight") nextImage();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lightboxOpen, galleryImages.length]);

  return (
    <div className="app">
      {/* Background / accents */}
      <div className="bg" aria-hidden="true" />
      <img className="corner" src={cornerImg} alt="" aria-hidden="true" />

      {/* Top banner / header graphic */}
      <header className="top">
        <div className="container">
          <div className="topGrid">
            <div className="brand">
              <p className="kicker">Satirical memecoin</p>
              <h1 className="title">
                DO<span className="accent">YOUR</span>WORST
              </h1>

              <div className="taglines">
                <p className="tagline">No hype.</p>
                <p className="tagline">No shills.</p>
                <p className="tagline">No promises.</p>
              </div>

              <p className="lede">
                Just a token existing in a space that takes itself far too seriously.
              </p>

              <div className="ctaRow">
                <a className="btn primary" href="#gallery">
                  View the gallery
                </a>
                <a className="btn ghost" href="#buy">
                  Where to buy
                </a>
                <a className="btn ghost" href="#about">
                  What is this?
                </a>
              </div>

              <p className="micro">
                Not financial advice. Not a roadmap. Not a movement.
              </p>
            </div>

            <div className="heroArt">
              <img className="bannerImg" src={bannerImg} alt="DoYourWorst banner art" />
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* WOW image as a statement piece (not cropped) */}
        <section className="section statement">
          <div className="container">
            <div className="card statementCard">
              <div className="statementText">
                <p className="kicker">A gentle reminder</p>
                <h2 className="h2">This is not a prophecy.</h2>
                <p className="body muted">
                  It doesn’t predict the future. It doesn’t claim insight. It
                  doesn’t pretend to know what’s coming next.
                </p>
              </div>

              <div className="statementMedia">
                <img className="wowImg" src={wowImg} alt="DoYourWorst statement artwork" />
              </div>
            </div>
          </div>
        </section>

        {/* Where to buy */}
        <section className="section" id="buy">
          <div className="container narrow">
            <h2 className="h2">Where to buy</h2>

            <div className="buyCard">
              <p className="body">
                You can buy it on Solana.
              </p>

              <p className="body muted">
                This is the contract address:
              </p>

              <div className="addrRow">
                <code className="addrCode" title={CONTRACT_ADDRESS}>
                  {CONTRACT_ADDRESS}
                </code>
                <button className="btn small" type="button" onClick={copyAddress}>
                  {copied ? "Copied" : "Copy"}
                </button>
              </div>

              <div className="divider" />

              <p className="body">
                If you want to know how to buy it, google it.
              </p>
              <p className="body muted">
                Every other memecoin web page shows you how to buy.
                But, come on, you have been buying this shit for ages now.
              </p>
              <p className="body loud">
                So I won't insult you by telling you how to buy.
                Get to fuck.
              </p>

              <p className="micro">
                (Also: verify the contract address yourself before doing anything. Don’t trust random links.)
              </p>
            </div>
          </div>
        </section>

        {/* Copy sections */}
        <section className="section" id="about">
          <div className="container narrow">
            <h2 className="h2">What This Is</h2>
            <p className="body">DoYourWorst is a satirical crypto project.</p>
            <p className="body muted">
              It doesn’t predict the future. It doesn’t claim insight. It
              doesn’t pretend to know what’s coming next.
            </p>
            <p className="body">
              It simply exists — alongside charts, narratives, cycles, and noise.
            </p>

            <div className="divider" />

            <h2 className="h2">What This Isn’t</h2>
            <ul className="bullets">
              <li>Not a roadmap</li>
              <li>Not a movement</li>
              <li>Not financial advice</li>
              <li>Not here to change the world</li>
            </ul>
            <p className="body muted">There are plenty of those already.</p>

            <div className="divider" />

            <h2 className="h2">The Idea</h2>
            <p className="body">Crypto has become loud.</p>
            <p className="body muted">
              Every week brings a new story. Every cycle promises clarity. Every
              chart invites certainty.
            </p>
            <p className="body">
              DoYourWorst sits quietly in the background, watching it all unfold.
            </p>
          </div>
        </section>

        {/* Gallery */}
        <section className="section" id="gallery">
          <div className="container">
            <div className="sectionHead">
              <div>
                <h2 className="h2">The Gallery</h2>
                <p className="body muted">
                  No explanations. No context. Just impressions.
                </p>
              </div>
              <p className="micro">
                Click an image to open it. Use ← → keys. Esc to close.
              </p>
            </div>

            <div className="gallery">
              {galleryImages.map((img, idx) => (
                <button
                  key={img.src}
                  type="button"
                  className="tile"
                  onClick={() => openLightbox(idx)}
                  aria-label={`Open image ${idx + 1}`}
                >
                  <img src={img.src} alt={img.alt} loading="lazy" />
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Expectations + final note */}
        <section className="section">
          <div className="container narrow">
            <h2 className="h2">Expectations</h2>
            <p className="body">There are none.</p>
            <p className="body muted">
              No guarantees. No timelines. No assurances of anything at all.
            </p>
            <p className="body muted">
              Participation is optional. Attention is fleeting. Outcomes are uncertain.
              As always.
            </p>

            <div className="divider" />

            <h2 className="h2">Final Note</h2>
            <p className="body">Markets rise. Markets fall. Narratives repeat.</p>
            <p className="body muted">
              DoYourWorst remains exactly what it says it is.
            </p>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <p className="micro">
            © {new Date().getFullYear()} DoYourWorst — satire, art, and vibes. Nothing here is financial advice.
          </p>
        </div>
      </footer>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
          onMouseDown={(e) => {
            if (e.target.classList.contains("lightbox")) closeLightbox();
          }}
        >
          <button className="lbClose" type="button" onClick={closeLightbox} aria-label="Close">
            ✕
          </button>

          <button className="lbNav lbPrev" type="button" onClick={prevImage} aria-label="Previous">
            ‹
          </button>

          <figure className="lbFigure">
            <img
              className="lbImg"
              src={galleryImages[activeIndex].src}
              alt={galleryImages[activeIndex].alt}
            />
            <figcaption className="lbCap">
              {activeIndex + 1} / {galleryImages.length}
            </figcaption>
          </figure>

          <button className="lbNav lbNext" type="button" onClick={nextImage} aria-label="Next">
            ›
          </button>
        </div>
      )}
    </div>
  );
}






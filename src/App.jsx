import { useMemo, useState } from "react";
import "./App.css";

import heroImg from "./assets/logo7.png";
import bannerImg from "./assets/banner1.png";
import cornerImg from "./assets/corner.png";

// Gallery images (ensure these exist in src/assets/)
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

export default function App() {
  const [copied, setCopied] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const CONTRACT_ADDRESS = "PASTE_CONTRACT_ADDRESS_HERE";

  const shortCA = useMemo(() => {
    if (!CONTRACT_ADDRESS || CONTRACT_ADDRESS.includes("PASTE_"))
      return "CA: (coming soon)";
    return `CA: ${CONTRACT_ADDRESS.slice(0, 6)}…${CONTRACT_ADDRESS.slice(-6)}`;
  }, [CONTRACT_ADDRESS]);

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

  const galleryImages = [
    { src: mad1, alt: "DoYourWorst gallery 1" },
    { src: mad2, alt: "DoYourWorst gallery 2" },
    { src: mad3, alt: "DoYourWorst gallery 3" },
    { src: mad4, alt: "DoYourWorst gallery 4" },
    { src: mad5, alt: "DoYourWorst gallery 5" },
    { src: mad6, alt: "DoYourWorst gallery 6" },
    { src: mad7, alt: "DoYourWorst gallery 7" },
    { src: mad8, alt: "DoYourWorst gallery 8" },
    { src: mad9, alt: "DoYourWorst gallery 9" },
    { src: mad10, alt: "DoYourWorst gallery 10" },
    { src: mad11, alt: "DoYourWorst gallery 11" },
    { src: mad12, alt: "DoYourWorst gallery 12" },
    { src: mad13, alt: "DoYourWorst gallery 13" },
  ];

  const openLightbox = (idx) => {
    setActiveIndex(idx);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);

  const prevImage = () => {
    setActiveIndex((i) => (i - 1 + galleryImages.length) % galleryImages.length);
  };

  const nextImage = () => {
    setActiveIndex((i) => (i + 1) % galleryImages.length);
  };

  const onLightboxKeyDown = (e) => {
    if (!lightboxOpen) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") prevImage();
    if (e.key === "ArrowRight") nextImage();
  };

  return (
    <div className="page" onKeyDown={onLightboxKeyDown} tabIndex={-1}>
      <img src={cornerImg} alt="Corner text" className="cornerImage" />

      <div className="streaks" aria-hidden="true" />
      <div className="grain" aria-hidden="true" />

      <main className="wrap">
        {/* HERO */}
        <section className="section">
          <div className="container">
            <div className="hero" style={{ backgroundImage: `url(${bannerImg})` }}>
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
            </div>
          </div>
        </section>

        {/* CONTENT 1 */}
        <section className="section">
          <div className="container">
            <div className="contentBlock">
              <div className="panel stack">
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
              </div>
            </div>
          </div>
        </section>

        {/* CONTENT 2 (HIGHLIGHT) */}
        <section className="section">
          <div className="container">
            <div className="contentBlock highlight">
              <div className="panel stack">
                <p>
                  If you need permission to buy…
                  <br />
                  If you’re waiting for a KOL tweet…
                  <br />
                  If you’re worried about the cabals…
                </p>

                <p className="emphasis">This probably isn’t for you.</p>
              </div>
            </div>
          </div>
        </section>

        {/* GALLERY */}
        <section className="section">
          <div className="container">
            <div className="galleryHeader stack">
              <h2 className="galleryTitle">The Gallery</h2>
              <p className="gallerySub">
                Not marketing. Just commentary. Scroll responsibly.
              </p>
            </div>

            <div className="masonry">
              {galleryImages.map((img, idx) => (
                <figure
                  key={idx}
                  className="masonryItem"
                  onClick={() => openLightbox(idx)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") openLightbox(idx);
                  }}
                  aria-label={`Open image ${idx + 1}`}
                >
                  <img src={img.src} alt={img.alt} loading="lazy" />
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* FOOTER BLOCK */}
        <section className="section">
          <div className="container">
            <div className="contentBlock footerBlock">
              <div className="panel stack">
                <p>
                  No roadmap. No promises. No fake moral high ground.
                  <br />
                  Just a meme. Just a mirror.
                </p>

                <p className="footerTag">Just… do your worst.</p>

                <p className="disclaimer">
                  Commentary only. Not financial advice. Not connected to any other project.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* LIGHTBOX */}
      {lightboxOpen && (
        <div className="lightbox" role="dialog" aria-modal="true" onMouseDown={closeLightbox}>
          <div className="lightboxInner" onMouseDown={(e) => e.stopPropagation()}>
            <button className="lightboxClose" onClick={closeLightbox} aria-label="Close">
              ✕
            </button>

            <button className="lightboxNav left" onClick={prevImage} aria-label="Previous image">
              ‹
            </button>

            <img
              className="lightboxImg"
              src={galleryImages[activeIndex].src}
              alt={galleryImages[activeIndex].alt}
            />

            <button className="lightboxNav right" onClick={nextImage} aria-label="Next image">
              ›
            </button>

            <div className="lightboxMeta">
              <span>
                {activeIndex + 1} / {galleryImages.length}
              </span>
              <span className="lightboxHint">Esc closes • ← / → navigates</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

